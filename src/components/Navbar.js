import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends React.Component{
    static contextType = ThemeContext;
    render(){
        console.log(this.context); // Now this.context contains all our app-data
        return (
            <header>
                <h3>BookList App</h3>
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
        )
    }
   
}

export default Navbar