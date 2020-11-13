import './App.css';
import BookList from './components/BookList';
import Navbar from "./components/Navbar";
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggler from './components/ThemeToggler';


function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
          <Navbar/>
          <BookList/>
          <ThemeToggler/>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
