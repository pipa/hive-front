// Deps ==========================================
import React from 'react';
import ReactDOM from 'react-dom';

// Export App ====================================
const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};
export default App;

// Render app on DOM =============================
ReactDOM.render(<App />, document.getElementById('rapp'));
