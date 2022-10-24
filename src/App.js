import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login'
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
