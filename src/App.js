import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import GlobalStyles from './common/styles/globalStyle';
import Main from './containers/Main/Main';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <GlobalStyles />
      <Main />
    </StyledEngineProvider>
  );
}

export default App;
