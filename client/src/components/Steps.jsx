import React from 'react'
import {stepsData} from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div
      initial= {{opacity:0.2, y:100}} 
      transition={{duration:1}} 
      whileInView={{opacity:1, y:0}} 
      viewport={{once:true}} 
      className='flex flex-col items-center justify-center my-32'
    >
      <motion.h1 
        className='text-3xl sm:text-4xl font-semibold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text'
        style={{
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 100%',
          animation: 'gradient 3s linear infinite'
        }}
      >
        How ArtifyAI Works
      </motion.h1>
      
      <motion.p 
        className='text-lg text-gray-600 mb-8 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text'
        style={{
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 100%',
          animation: 'gradient 3s linear infinite'
        }}
      >
        Three Simple Steps to Digital Masterpieces
      </motion.p>

      <div className='space-y-6 w-full max-w-4xl text-sm'>
        {stepsData.map((item, index)=>(
          <motion.div 
            key={index} 
            className='flex items-center gap-6 p-6 px-8 bg-white/30 shadow-lg border border-gray-100 rounded-xl overflow-hidden relative group hover:shadow-xl transition-all duration-300'
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
            
            <div className='relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300'>
              <img src={item.icon} alt="" className="w-6 h-6" />
            </div>
            
            <div className='relative z-10 flex-1'>
              <motion.h2 
                className='text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-blue-500'
                style={{
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.title}
              </motion.h2>
              <p className='text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mt-1'>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </motion.div>
  )
}

export default Steps
