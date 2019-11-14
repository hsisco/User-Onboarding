import React, {useState} from 'react';

import './App.css';
import OnboardingForm from './components/Form';

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <OnboardingForm user={user} setUser={setUser} />
    </div>
  );
}

export default App;
