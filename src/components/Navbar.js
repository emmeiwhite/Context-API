import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

// 1)Accessing Context using contextType and this.context
/* --- 
class Navbar extends React.Component{
    static contextType = ThemeContext;
    render(){
        const {isLightTheme, dark, light} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <header style={{background:theme.ui, color:theme.text}}>
                <h3>BookList App</h3>
                 <nav>
                    <ul className="main-navigation">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
 --- */

// 2) Accessing Context using Consumer. This approach can be used in functional components as well.
// 3) Now we'll consume multiple Contexts in Nabvar using Consumer way
function Navbar() {
  return (
    <AuthContext.Consumer>
      {(authContext) => {
        return (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isLightTheme, dark, light } = themeContext;
              const theme = isLightTheme ? light : dark;

              const { isAuthenticated, toggleAuthenication } = authContext;

              return (
                <header style={{ background: theme.ui, color: theme.text }}>
                  <h3>BookList App</h3>

                  {/* ---Consuming Multiple Contexts --- */}
                  <div
                    onClick={toggleAuthenication}
                    style={{ cursor: "pointer" }}
                  >
                    {isAuthenticated ? <h4>Logged In</h4> : <h4>Logged out</h4>}
                  </div>

                  <nav>
                    <ul className="main-navigation">
                      <li>
                        <a>Home</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>Contact</a>
                      </li>
                    </ul>
                  </nav>
                </header>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Navbar;
