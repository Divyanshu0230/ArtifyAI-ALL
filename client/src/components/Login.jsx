import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Login')
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {

      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setShowLogin(false)
          navigate('/dashboard')
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
          navigate('/dashboard')
        } else {
          toast.error(data.message)
        }

      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const navbar = document.getElementById('nav-bar')
    navbar.style.opacity = 0.05
    return () => {
      document.body.style.overflow = 'unset';
      navbar.style.opacity = 1
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-[9999] backdrop-blur-md bg-black/40 flex justify-center items-center'>

      <motion.form onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        className='relative bg-white/95 backdrop-blur-xl p-10 rounded-2xl text-slate-500 shadow-2xl border border-gray-100 max-w-md w-full mx-4'>
        <h1 className='text-center text-3xl text-neutral-700 font-bold mb-2'>{state}</h1>
        <p className='text-sm text-gray-500 text-center mb-6'>Welcome to ArtifyAI! Please sign in to continue</p>

        {state !== 'Login' &&
          <div className='border border-gray-200 px-6 py-3 flex items-center gap-3 rounded-xl mt-5 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200'>
            <img src={assets.user_icon} alt="" className="w-5 h-5" />
            <input onChange={e => setName(e.target.value)} value={name} type="text" className='outline-none text-sm bg-transparent flex-1' placeholder='Full Name' required />
          </div>}

        <div className='border border-gray-200 px-6 py-3 flex items-center gap-3 rounded-xl mt-4 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200'>
          <img src={assets.email_icon} alt="" className="w-5 h-5" />
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm bg-transparent flex-1' placeholder='Email id' required />
        </div>

        <div className='border border-gray-200 px-6 py-3 flex items-center gap-3 rounded-xl mt-4 bg-gray-50/50 hover:bg-gray-50 transition-colors duration-200'>
          <img src={assets.lock_icon} alt="" className="w-5 h-5" />
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm bg-transparent flex-1' placeholder='Password' required />
        </div>

        <p className='text-sm text-purple-600 my-4 cursor-pointer hover:text-purple-700 transition-colors duration-200'>Forgot password?</p>

        <button className='bg-gradient-to-r from-purple-600 to-blue-600 w-full text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

        {state === 'Login' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-purple-600 cursor-pointer hover:text-purple-700 transition-colors duration-200' onClick={() => setState('Sign Up')}>Sign Up</span></p>
          :
          <p className='mt-5 text-center'>Already have an account? <span className='text-purple-600 cursor-pointer hover:text-purple-700 transition-colors duration-200' onClick={() => setState('Login')}>Login</span></p>}

        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer hover:scale-110 transition-transform duration-200' />

      </motion.form>

    </div>
  )
}

export default Login
