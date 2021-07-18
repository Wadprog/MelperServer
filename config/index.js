/**
 * Here lives all configuration for the app
 */

const environments = {};

environments.production = {
  NAME: 'Production',
  PORT: 3000,
  DB_URI: 'mongodb://127.0.0.1:2701/OASIS_CRM',
};
environments.development = {
  JWT_SECRET: 'MELPER- @BIG FAT SECRET #OH',
  NAME: 'Development',
  PORT: 4000,
  DB_URI:
    'mongodb+srv://wadson:Poupouy12@cluster0.u4okt.mongodb.net/Melper?retryWrites=true&w=majority',
  EXPECTED_TOKEN_HEADER: 'x-auth-token',
};

const DESIRED_ENVIRONMENT =
  typeof process.env.NODE_ENVIRONMENT === 'string'
    ? process.env.NODE_ENVIRONMENT
    : false;

const ENVIRONMENT_TO_RETURN =
  typeof environments[DESIRED_ENVIRONMENT] === 'object'
    ? environments[DESIRED_ENVIRONMENT]
    : environments.development;

module.exports = ENVIRONMENT_TO_RETURN;
