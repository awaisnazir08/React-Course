import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text Utils" aboutText="About TextUtils"/>
    <TextForm heading="Enter the text to Analyze" placeholder="Enter here"/>
    </>
  );
}

export default App;
