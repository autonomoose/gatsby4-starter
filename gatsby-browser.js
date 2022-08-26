/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { SnackbarProvider } from 'notistack';
import Layout from './src/components/layout'
require('typeface-roboto');


export const wrapPageElement = ({ element, props }) => {
    return (
      <SnackbarProvider maxSnack={3} dense preventDuplicate>
        <Layout {...props}>
          {element}
        </Layout>
      </SnackbarProvider>
  )};
