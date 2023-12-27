
import './App.css';

import Choose from './Components/Choose/Choose';
import Clint from './Components/Clints/Clint';
import Header from './Components/Header/Header';
import Herosection from './Components/HeroSection/Herosection';
import Team from './Components/Team/Team';

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Choose />
      <Clint />
      <Team />
    </>
  );
}

export default App;
