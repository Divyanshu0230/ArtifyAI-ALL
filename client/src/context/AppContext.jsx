import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'))

    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const isAuthenticated = !!token;

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } })

            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    const generateImage = async (prompt) => {
        try {
            console.log('Frontend: Generating image for prompt:', prompt);
            
            const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } })

            console.log('Frontend: Backend response:', data);

            if (data.success) {
                console.log('Frontend: Image generated successfully:', data.resultImage);
                loadCreditsData()
                return data.resultImage
            } else {
                console.log('Frontend: Backend returned error:', data.message);
                toast.error(data.message)
                loadCreditsData()
                if (data.creditBalance === 0) {
                    navigate('/buy')
                }
                return null
            }
        } catch (error) {
            console.error('Frontend: Error generating image:', error);
            toast.error(error.message || 'Failed to generate image')
            return null
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
        navigate('/')


    }

    useEffect(() => {
        if (token) {
            loadCreditsData()
        }
    }, [token])

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditsData, logout, generateImage, isAuthenticated
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;