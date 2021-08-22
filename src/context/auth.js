import React, { useState, useContext, useEffect, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [load, setLoad] = useState(true);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoad(false);
            history.push('/chats');
        })
    }, [user, history]);

    return (
        <AuthContext.Provider value={{ user }}>
            {!load && children}
        </AuthContext.Provider>
    );
}

