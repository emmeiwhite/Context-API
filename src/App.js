import './App.css';
import BookList from './components/BookList';
import Navbar from "./components/Navbar";
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
          <Navbar/>
          <BookList/>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
