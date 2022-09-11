import { Auth } from "aws-amplify"

/*
    default values to be used below along with environment
    to specify at BUILD
*/
const project_region = "us-east-1";
const api_name =  'unknown-api';
const api_ep = 'unknown-url-endpoint';
const s3_bucket = 'unknown-bucket';
const s3_region = project_region;
const cog_idpool_id = 'us-east-1:3659149b-bcad-41a0-9160-581cd5dbec92';
const cog_region = project_region;
const cog_userpool_id = 'us-east-1_SmIQ1Twtb';
const cog_userpool_clientid = '5vn63bsgur4u3bolnls4mhmig8';
const graphql_ep = 'unkown-appsync-endpoint';
const graphql_region = project_region;
const graphql_authtype = 'AMAZON_COGNITO_USER_POOLS';
const graphql_key = 'null';

/*
 this function allows API (and graphQL API) access to
 extended user identity information via authentication header
 you don't need this if you aren't using AWS APIG or AWS Appsync
 this function requires aws amplify library to be installed and
        import { Auth } from "aws-amplify"
*/
const getIdToken = async () => ({
  Authorization: (await Auth.currentSession()).getIdToken().getJwtToken()
});


// start config section
export const apiconfig = {API: {endpoints:
    [{
        name: api_name,
        endpoint: api_ep,
        custom_header: getIdToken,
    }],
}};

export const storageconfig = {Storage: {
        bucket: s3_bucket,
        region: s3_region,
},};

// static picture of recent aws-exports w/ any foreign settings

const awsmobile = {
    "aws_project_region": project_region,
    "aws_cognito_identity_pool_id": cog_idpool_id,
    "aws_cognito_region": cog_region,
    "aws_user_pools_id": cog_userpool_id,
    "aws_user_pools_web_client_id": cog_userpool_clientid,
    "oauth": {},
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],

    "aws_appsync_graphqlEndpoint": graphql_ep,
    "aws_appsync_region": graphql_region,
    "aws_appsync_authenticationType": graphql_authtype,
    "aws_appsync_apiKey": graphql_key,
    "graphql_headers": getIdToken,
};

export default awsmobile;