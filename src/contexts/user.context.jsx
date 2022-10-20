import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// as the actual value we want to access 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        onAuthStateChangedListener(() => {})
    },[])

    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>
};