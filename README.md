# Redirect www to non www URL using cloudfront and lambda@edge using Cloudfront

1. Create an empty aws S3 bucket.
1. Create the lambda function in us-east-1 since it will be used for cloudfront using redirecturl.js.
1. Publish the new version of this lambda function.
1. Create a Cloudfront distribution on this bucket using cname containing www
1. In Cloudfront distribution, while creating Behavior, In Lambda function associations choose below values

         Event Type          -   Viewer Request
         Lambda Function ARN -   arn:aws:lambda:us-east-1:ACC_ID:function:FUNCTION_NAME:PUBLISHED_VERSION 
      
