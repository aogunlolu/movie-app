import './App.css';
import Banner from './components/Banner';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
      <Banner/>
      <Pages/> 
    </BrowserRouter>

  );
}

export default App;
