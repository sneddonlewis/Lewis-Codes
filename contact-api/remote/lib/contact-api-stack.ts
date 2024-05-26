import * as cdk from 'aws-cdk-lib';
import { EndpointType, MethodLoggingLevel } from 'aws-cdk-lib/aws-apigateway';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ContactApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new cdk.aws_dynamodb.Table(this, 'sneddsy-contact-table', {
      partitionKey: { name: 'email', type: AttributeType.STRING },
      tableName: 'sneddsy-contact-table',
    });

    const fn = new cdk.aws_lambda.Function(this, 'LambdaFunction', {
      runtime: cdk.aws_lambda.Runtime.PROVIDED_AL2,
      code: cdk.aws_lambda.AssetCode.fromAsset('lambda-compiled/function.zip'),
      handler: 'main',
    });

    const api = new cdk.aws_apigateway.RestApi(this, 'sneddsy-api-gateway', {
      defaultCorsPreflightOptions: {
        allowMethods: [
          'get',
          'post',
          'options',
        ],
        allowOrigins: [ '*' ],
      },
      deployOptions: {
        loggingLevel: MethodLoggingLevel.INFO,
      },
      endpointConfiguration: {
        types: [ EndpointType.REGIONAL ]
      }
    });


    const lambdaIntegration = new cdk.aws_apigateway.LambdaIntegration(fn);

    const healthRoute = api.root.addResource('health');
    healthRoute.addMethod('GET', lambdaIntegration);

    const registerRoute = api.root.addResource('message');
    registerRoute.addMethod('POST', lambdaIntegration);

    table.grantReadWriteData(fn);
  }
}
