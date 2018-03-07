// Deps ==========================================
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'
console.log(styles);

// Export App ====================================
const App = () => {
  return (
    <div>
      <p className={styles['test']}>React here!</p>
    </div>
  );
};
export default App;

// Render app on DOM =============================
ReactDOM.render(<App />, document.getElementById('rapp'));
