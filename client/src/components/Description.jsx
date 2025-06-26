import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function Description() {
  return (
    <motion.div 
      initial= {{opacity:0.2, y:100}} 
      transition={{duration:1}} 
      whileInView={{opacity:1, y:0}} 
      viewport={{once:true}} 
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    >
      <motion.h1 
        className='text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900'
        whileHover={{ 
          color: '#4f46e5',
          scale: 1.02
        }}
        transition={{ duration: 0.2 }}
      >
        Next-Generation AI Art Studio
      </motion.h1>

      <motion.p 
        className='text-xl text-gray-600 mb-16 text-center'
        whileHover={{ 
          color: '#9333ea',
          scale: 1.02
        }}
        transition={{ duration: 0.2 }}
      >
        Where innovation meets artistic expression
      </motion.p>

      <div className='flex flex-col gap-8 md:gap-14 md:flex-row items-start max-w-6xl mx-auto'>
        <motion.div
          className='w-full md:w-[45%] relative group'
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={assets.sample_img_1} 
            alt="AI Generated Artwork" 
            className='w-full h-auto rounded-xl shadow-xl relative z-10 max-w-md mx-auto' 
          />
        </motion.div>

        <div className='w-full md:w-[55%] space-y-6 md:pl-8'>
          <motion.h2 
            className='text-2xl md:text-3xl font-bold leading-tight text-gray-900'
            whileHover={{ 
              color: '#4f46e5',
              scale: 1.01
            }}
            transition={{ duration: 0.2 }}
          >
            Introducing the Future of Digital Art Creation
          </motion.h2>

          <motion.p 
            className='text-base md:text-lg text-gray-600 leading-relaxed'
            whileHover={{ 
              color: '#6366f1',
              x: 10
            }}
            transition={{ duration: 0.2 }}
          >
            Step into the future of creative expression with ArtifyAI's revolutionary platform. Our advanced artificial intelligence technology transforms your imaginative concepts into breathtaking digital masterpieces with unprecedented precision and artistic quality.
          </motion.p>

          <motion.p 
            className='text-base md:text-lg text-gray-600 leading-relaxed'
            whileHover={{ 
              color: '#6366f1',
              x: 10
            }}
            transition={{ duration: 0.2 }}
          >
            Simply articulate your creative vision through natural language, and watch as our state-of-the-art AI engine generates stunning, high-resolution artworks in seconds. From abstract compositions to photorealistic scenes, concept art to digital illustrations - ArtifyAI empowers you to explore limitless creative possibilities.
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
