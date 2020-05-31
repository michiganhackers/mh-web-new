branch=$(git rev-parse --abbrev-ref HEAD)
if [ $branch != dev ]
then
    while true; do
    read -p "You're not on branch dev. Are you sure you want to proceed? [y/n]" yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit 1;;
        * ) echo "Please answer y or n.";;
    esac
done
fi
echo Linting...
yarn lint
if [ $? -ne 0 ]
then
    echo "Lint failed. Aborting."
    exit 1
fi
echo Building...
yarn build
if [ $? -ne 0 ]
then
    echo "Build failed. Aborting."
    exit 1
fi
echo Build finished.
echo Preparing to configure AWS credentials. Get these from someone with access to AWS IAM.
echo They will likely need to create a new access key. An IAM user with the relevant permissions already exists.
echo "Contact the web team for more details."
echo Leave \'Default region name\' and \'Default output format\' blank.
aws configure
echo Current contents of bucket:
aws s3 ls s3://michiganhackers.org
echo Preparing to synchronizing build.
while true; do
    read -p "Are you sure you want to deploy? This cannot be undone. [y/n]" yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit 1;;
        * ) echo "Please answer y or n.";;
    esac
done
echo "Deleting old backup folder...";
aws s3 rm s3://michiganhackers.org/backup --recursive
echo "Copying old contents into backup folder..."
aws s3 sync s3://michiganhackers.org s3://michiganhackers.org/backup --exclude "backup"
echo "Deleting old contents..."
aws s3 rm s3://michiganhackers.org --recursive --exclude "backup/*"
echo "Synchronizing s3 bucket with local build folder..."
aws s3 sync build s3://michiganhackers.org
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id E35WT0YDK4WYA0 --paths "/*"
echo "Done!"


