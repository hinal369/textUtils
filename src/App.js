import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      < Navbar title='TextUtils2' aboutTitle="About us"/>
      < TextForm />
      {/* <About/> */}
    </>
  );
}

export default App;
