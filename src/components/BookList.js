import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

/* ---
class BookList extends React.Component{
    static contextType = ThemeContext;
    render(){
        const {isLightTheme,dark, light} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div style={{background:theme.bg, color:theme.text,}}>
                <ul className="booklist">
                    <li style={{background:theme.ui}}>
                        The Way of the Kings
                    </li>
    
                    <li style={{background:theme.ui}}>
                        The Beautiful mind
                    </li>
    
                    <li style={{background:theme.ui}}>
                        All that glitters is not gold
                    </li>
                </ul>
            </div>
        )
    }
    
}
--- */

// Will be using useContext() hook to consume the context

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div style={{ background: theme.bg, color: theme.text }}>
      <ul className="booklist">
        <li style={{ background: theme.ui }}>The Way of the Kings</li>

        <li style={{ background: theme.ui }}>The Beautiful mind</li>

        <li style={{ background: theme.ui }}>All that glitters is not gold</li>
      </ul>
    </div>
  );
};
export default BookList;
