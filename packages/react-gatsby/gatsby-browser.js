import 'antd/dist/antd.min.css';

import { ThemeProvider } from 'emotion-theming';
import React from 'react';

import { GlobalStyles } from './src/components/mod';

const theme = {};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
