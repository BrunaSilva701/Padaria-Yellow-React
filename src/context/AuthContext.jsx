import React, {createContext, useState, useContext} from 'react'

const AuthContext = createContext()

// provedor
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (username) => setUser({name:username})

    const logout = () => setUser(null)

    return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

//consumo
export const useAuth = () => useContext(AuthContext)