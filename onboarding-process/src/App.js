import React from 'react';

import './App.css';
import Form from './components/Form';

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Form user={user} setUser={setUser} />
    </div>
  );
}

export default App;
