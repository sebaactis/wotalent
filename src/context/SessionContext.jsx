import { createContext, useState } from 'react'

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {

    const [accessToken, setAccessToken] = useState(false);

    return (
        <SessionContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider;