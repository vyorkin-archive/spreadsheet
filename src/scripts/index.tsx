import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import { render } from 'react-dom';
import { setObservableConfig } from 'recompose';
import * as Rx from '@reactivex/rxjs';

import App from './App';

// TODO: fix recompose type definitions or create an issue, at least
setObservableConfig({ fromESObservable: Rx.Observable.from as any });

const Hot = (El: React.ReactElement<any>) => <AppContainer>{El}</AppContainer>;

const rootElement = document.getElementById('root');
render(Hot(<App />), rootElement);

if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NextApp = (require('./App') as any).default;
    render(Hot(<NextApp />), rootElement);
  });
}
