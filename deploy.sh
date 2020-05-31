yarn lint
if [ $? -ne 0 ]
then
    echo "Lint failed. Aborting."
    exit 1
fi
yarn build
if [ $? -ne 0 ]
then
    echo "Build failed. Aborting."
    exit 1
fi
echo Build finished.
echo Preparing to configure AWS credentials. Get these from someone with access to AWS IAM.
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
echo "Synchronizing backup folder..."; 
aws s3 sync s3://michiganhackers.org s3://michiganhackers.org/backup --exclude "backup"
echo "Synchronizing s3 bucket with local build folder..."
aws s3 sync build s3://michiganhackers.org
echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation --distribution-id E35WT0YDK4WYA0 --paths "/*"
echo "Done!"

