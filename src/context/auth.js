import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [load, setLoad] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            // if (user) {
            //     console.log("user sign in:", user);
            //     history.push('/chats');
            // }
            // else {
            //     console.log("user not sign in.")
            //     // history.push('/');
            // }
            setUser(user);
            setLoad(false);
            // console.log("user:", user);
            if (user) history.push('/chats');
            // else console.log("not get user");
        });
    }, [user, history]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!load && children}
        </AuthContext.Provider>
    );
}

