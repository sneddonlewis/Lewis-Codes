# AWS CDK

CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

Individual projects are responsible for creating their own output following the location convention `<project-dir>/out/<bin-name>`.  

## Useful commands

* `yarn build`   compile typescript to js
* `yarn watch`   watch for changes and compile
* `yarn test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
