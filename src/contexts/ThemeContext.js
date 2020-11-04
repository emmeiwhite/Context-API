import React, { createContext,Component } from 'react'
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state={
        isLightTheme:true,
        light:{text:'#555',bg:'#ddd',ui:'#eee'},
        dark:{text:'#ddd',bg:'#333',ui:'#555'}
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;