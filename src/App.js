import './App.css';


import Choose from './Components/Choose/Choose';
import Clint from './Components/Clints/Clint';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Herosection from './Components/HeroSection/Herosection';

import Subscriber from './Components/Subscriber/Subscriber';
import Team from './Components/Team/Team';

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Choose />
      {/* <ListimgView /> */}
      <Clint />
      <Team />
      <Faq />
      <Subscriber />
      <Footer />
    </>
  );
}

export default App;
