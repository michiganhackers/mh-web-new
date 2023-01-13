# Before deployment:
# 1. Obtain the .env api keys from a previous lead
# 2. Install the awscli package
# 3. Create a new IAM access key for yourself on AWS. Exec will provide the credentials
# 4. Follow the instructions in this script

branch=$(git rev-parse --abbrev-ref HEAD)
if [ $branch != dev ]
then
    while true; do
    read -p "You're not on branch dev. Are you sure you want to proceed? [y/n]: " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit 1;;
        * ) echo "Please answer y or n.";;
    esac
done
fi
echo Linting...
npm run lint
if [ $? -ne 0 ]
then
    echo "Lint failed. Aborting."
    exit 1
fi
echo Building...
npm run build
if [ $? -ne 0 ]
then
    echo "Build failed. Aborting."
    exit 1
fi
echo Build finished.

# verify that the lead pictures are included
LEADERSHIP_IMAGES=public/leadership/
if [ ! -d $LEADERSHIP_IMAGES ]
then
    echo "Lead information is missing."
    exit 1
fi

echo Preparing to configure AWS credentials. Get these from someone with access to AWS IAM.
echo They will likely need to create a new access key. An IAM user with the relevant permissions already exists.
echo Contact the web team for more details.
echo Leave \'Default region name\' and \'Default output format\' blank.
aws configure
echo Current contents of bucket:
aws s3 ls s3://michhackers.com
if [ $? -ne 0 ]
then
    echo "Could not connect to AWS. Check your credentials."
    exit 1
fi
echo Preparing to synchronizing build.
while true; do
    read -p "Are you sure you want to deploy? This cannot be undone. [y/n]: " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit 1;;
        * ) echo "Please answer y or n.";;
    esac
done
echo "Deleting old backup folder...";
aws s3 rm s3://michhackers.com/backup --recursive
echo "Copying old contents into backup folder..."
aws s3 sync s3://michhackers.com s3://michhackers.com/backup --exclude "backup"
echo "Deleting old contents..."
aws s3 rm s3://michhackers.com --recursive --exclude "backup/*"
echo "Synchronizing s3 bucket with local build folder..."
aws s3 sync build s3://michhackers.com
echo "Setting max-age for index.html"
aws s3 cp s3://michhackers.com/index.html s3://michhackers.com/index.html --metadata-directive REPLACE --cache-control max-age=86400 --content-type "text/html"
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id E3CA3DGYHE1YW2 --paths "/*"
echo "Done!"
