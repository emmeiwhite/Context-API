import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

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

// 2) Accessing Context using Consumer. This approach can be used in functional components as well
function Navbar() {
    return (
        <ThemeContext.Consumer>{(context)=>{
            const {isLightTheme, dark, light} = context;
            const theme = isLightTheme ? light : dark;
            return(
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
        </ThemeContext.Consumer>
        )
}

export default Navbar
