import * as React from 'react';
import * as styles from './styles.css';

import Icon from 'components/Icon';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.app}>
        <h1>sup dwg</h1>
        <Icon />
      </div>
    );
  }
}
