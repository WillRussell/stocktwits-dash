import React, { useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { isUndefined } from 'lodash';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';
import { lightTheme, darkTheme } from './support/themes';

function App() {
  const [cookies, setCookie] = useCookies(['themeOpts']);
  const initialTheme = isUndefined(cookies.themeOpts) ? false : cookies.themeOpts.isThemeLight;
  const [isThemeLight, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme(!isThemeLight);
    setCookie('themeOpts', {
      isThemeLight: !isThemeLight,
    }, { path: '/' });
  };

  return (
    <CookiesProvider>
      <MuiThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
        <CssBaseline />
        <div className="app">
          <Layout
            toggleTheme={toggleTheme}
            isThemeLight={isThemeLight}
          />
        </div>
      </MuiThemeProvider>
    </CookiesProvider>
  );
}

export default App;
