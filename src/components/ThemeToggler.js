import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import './ThemeToggler.css'

export default function ThemeToggler() {
    return (
        <ThemeContext.Consumer>
            {
                (context)=>{
                    const {handleToggler} = context;
                    return(
                        <button 
                          className="theme-toggler"
                          onClick={()=>handleToggler()}
                          >Toggle Theme
                          </button>
                    )
                }
            }
        </ThemeContext.Consumer>
      
    )
}
