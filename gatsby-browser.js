/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig, { apiconfig } from './src/aws-safeset';
// import awsconfig, { apiconfig, storageconfig } from './src/aws-safeset';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { SnackbarProvider } from 'notistack';
import Layout from './src/components/layout'
require('typeface-roboto');

Amplify.configure(awsconfig)
Amplify.configure(apiconfig);
// setup in aws-safeset before enabling
// Amplify.configure(storageconfig);

export const wrapPageElement = ({ element, props }) => {
    return (
      <Authenticator.Provider>
      <SnackbarProvider maxSnack={3} dense preventDuplicate>
        <Layout {...props}>
          {element}
        </Layout>
      </SnackbarProvider>
      </Authenticator.Provider>
  )};
