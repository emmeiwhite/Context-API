import React, { Component,createContext } from 'react'

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
    state={
        isAuthenticated:false
    }

    toggleAuthenication = ()=>{
        this.setState({
            isAuthenticated:!this.state.isAuthenticated
        })
    }
    render() {
        return (
            <AuthContext.Provider value={{...this.state,toggleAuthenication:this.toggleAuthenication}}>
                {this.props.children }
            </AuthContext.Provider>
        )
    }
}
