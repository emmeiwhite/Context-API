import React, { createContext,Component } from 'react'
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state={
        isLightTheme:true,
        light:{text:'#555',bg:'#ddd',ui:'#eee'},
        dark:{text:'#ddd',bg:'#333',ui:'#555'}
    }

    handleToggler = ()=>{
        this.setState({
            isLightTheme:!this.state.isLightTheme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, handleToggler:this.handleToggler}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;