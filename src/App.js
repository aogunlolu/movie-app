import './App.css';
import Banner from './components/Banner';
import Pages from './pages/Pages';
// import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'






function App() {
  return (
    <BrowserRouter>
      <Banner/>
      <Pages/> 
      {/* <Footer/> */}
    </BrowserRouter>

  );
}

export default App;
