import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/MainEditorPage/MainBody';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      
      <Header/>
      {/* <h1>Hi this is working!!</h1> */}
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default App;
