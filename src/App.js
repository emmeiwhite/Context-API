import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <BookList />
          <ThemeToggler />
        </div>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
