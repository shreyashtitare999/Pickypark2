import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}></div>
   <Header/>
   <Footer/>
   
   </div>
  );
}

export default App;
