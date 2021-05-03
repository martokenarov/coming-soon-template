import React from 'react';
import styles from './App.module.css';
import Main from './components/Main';
import Background from './components/Background';

function App() {
  return (
    <div className={styles.App}>
      <Background />
      <Main />
    </div>
  );
}

export default App;
