import React, { useEffect, useMemo } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import HomeIcon from '@mui/icons-material/Home';

import Header from './header';
import LinkD from './linkd';
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

interface LayoutProps {
        children: React.ReactNode,
        location: any,
}

const Layout = ({ children, location }: LayoutProps) => {
    // setup display modes
    const [mode, setMode] = React.useState("light");

    const theme = useMemo(
        () => createTheme(mode === "light" ? lightTheme : darkTheme), [mode]
    );

    // setup dark/light mode on initial load and add listener
    useEffect(() => {
        // local color should be set to dark, or light
        let localColor = window.localStorage.getItem('color-mode');
        const root = window.document.documentElement;

        if (typeof localColor !== 'string') {
            localColor = root.style.getPropertyValue('--color-mode');
            window.localStorage.setItem('color-mode', localColor);
        }
        setMode(localColor);

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newMode = event.matches ? "dark" : "light";
            setMode(newMode);
            window.localStorage.setItem('color-mode', newMode);
        })

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
        };
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (mode === 'light') {
            // backgrounds, borders
            root.style.setProperty('--amplify-colors-background-primary', '#f2eee2');
            root.style.setProperty('--amplify-colors-border-primary', 'var(--amplify-colors-blue-90)');
            root.style.setProperty('--amplify-colors-border-focus', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-primary-background-color', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-primary-hover-background-color', 'var(--amplify-colors-blue-80)');
            root.style.setProperty('--amplify-components-button-primary-active-background-color', 'var(--amplify-colors-blue-20)');

            // text
            root.style.setProperty('--amplify-colors-font-primary', 'var(--amplify-colors-black)');
            root.style.setProperty('--amplify-colors-font-interactive', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-color', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-hover-color', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-hover-border-color', 'var(--amplify-colors-blue-90)');
            root.style.setProperty('--amplify-components-button-hover-background-color', '#f5ce28');

            root.style.setProperty('--amplify-components-button-link-hover-color', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-link-hover-background-color', '#f5ce28');

        } else {
            // backgrounds, borders, buttons
            root.style.setProperty('--amplify-colors-background-primary', '#031424');
            root.style.setProperty('--amplify-colors-border-primary', 'var(--amplify-colors-blue-80)');
            root.style.setProperty('--amplify-colors-border-focus', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-primary-background-color', 'var(--amplify-colors-blue-100)');
            root.style.setProperty('--amplify-components-button-primary-hover-background-color', 'var(--amplify-colors-blue-80)');
            root.style.setProperty('--amplify-components-button-primary-active-background-color', 'var(--amplify-colors-blue-60)');

            // text
            root.style.setProperty('--amplify-colors-font-primary', 'var(--amplify-colors-white)');
            root.style.setProperty('--amplify-colors-font-interactive', 'var(--amplify-colors-blue-40)');
            root.style.setProperty('--amplify-components-button-color', 'var(--amplify-colors-blue-40)');
            root.style.setProperty('--amplify-components-button-hover-color', 'var(--amplify-colors-neutral-60)');
            root.style.setProperty('--amplify-components-button-hover-border-color', 'var(--amplify-colors-blue-60)');
            root.style.setProperty('--amplify-components-button-hover-background-color', '#30415d');

            root.style.setProperty('--amplify-components-button-link-hover-color', 'var(--amplify-colors-neutral-60)');
            root.style.setProperty('--amplify-components-button-link-hover-background-color', '#30415d');
        }
    }, [mode]);

    // setup bespoke authentication
    const { user } = useAuthenticator((context) => [context.user]);

  return (
        <ThemeProvider theme={theme}><CssBaseline enableColorScheme />
        { (!user && location?.pathname !== '/') ?
            <Authenticator hideSignUp={true} /> :

        <div style={{ margin: `1rem auto`, minHeight: '100vh', }} >
          <Header uname={(user?.username) ? user.username: "" } mode={mode} setMode={setMode} />
          <div style={{ margin: `0 auto`, padding: `50px 1.0875rem 1.45rem`, maxWidth: 960, }} >
            <main>{children}</main>

            <footer style={{ paddingTop: 40 }}>
              <Divider />
              <Box display='flex' justifyContent='space-around'>
                <LinkD color='secondary' to='/'><HomeIcon /> Home</LinkD>

              </Box>
              <Divider />
              <Typography variant='caption' mx={2}>
                &copy; 2021-{new Date().getFullYear()}, Werner Digital Technology Inc
              </Typography>
            </footer>
          </div>
        </div>
        }
        </ThemeProvider>
  )
}

export default Layout
