import './App.css';
import BookList from './components/BookList';
import Navbar from "./components/Navbar";
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeToggler from './components/ThemeToggler';


function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <div className="App">
            <Navbar/>
            <BookList/>
            <ThemeToggler/>
        </div>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
