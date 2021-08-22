import React, { useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from 'react-router-dom';
import '../index.css';
import { auth } from '../firebase/firebase';
import { useAuth } from '../context/auth';
import axios from 'axios';

const proId = "1268e74b-1de3-4f18-92fc-3077acfaa72b";
const priKey = "eda1141f-08fd-4bc7-af35-4b8e3e3aaf76";

function Chats() {
    const history = useHistory();
    const { user } = useAuth();
    const [load, setLoad] = useState(true);

    // console.log("chat user", user.email)
    // console.log("chat user UID", user.uid)
    // console.log("chat user photo", user.photoURL)
    // console.log("chat user name", user.displayName)



    useEffect(() => {
        if (!user) {
            history.push('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": proId,
                "user.name": user.email,
                "user.secret": user.uid,
            }
        })
            .then(() => {
                setLoad(false);
            })
            .catch(() => {
                let formData = new FormData();
                formData.append('email', user.email);
                formData.append('username', user.email);
                formData.append('secret', user.uid);

                getFile(user.photoURL)
                    .then((avatar) => {
                        formData.append('avatar', avatar, avatar.name);
                        axios.post('https://api.chatengine.io/users',
                            formData,
                            { headers: { "private-key": priKey } }
                        )
                            .then(() => setLoad(false))
                            .catch((err) => console.log(err));
                    })
            })
    }, [user, history]);

    const getFile = async (url) => {
        const res = await fetch(url);
        const data = await res.blob();

        return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
    }

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }

    if (!user && load) return <h3>Loding...</h3>

    return (
        <>
            <div className="chats-page">
                <div className="nav-bar">
                    <div className="logo-tab">My Chat!</div>
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
                <ChatEngine
                    height='calc(100vh-66px)'
                    projectID={proId}
                    userName={user.email}
                    userSecret={user.uid}
                />
            </div>
        </>
    );
}

export default Chats;