import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './redux/store';
import Header from './components/Header/Header';
import Books from './components/Books';

const App = () => {
  const theme = createMuiTheme();

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Books />
        </React.Fragment>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
