import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import { render } from 'react-dom';
import { withContext, setObservableConfig } from 'recompose';
// import * as Rx from 'rxjs/Rx';

import App from './App';

// setObservableConfig({ fromESObservable: Rx.Observable.from as any });

const getMain = () => <AppContainer><App /></AppContainer>;
const rootElement = document.getElementById('root');
render(getMain(), rootElement);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(getMain(), rootElement);
  });
}
