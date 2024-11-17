'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'



export default function Introduction() {

  return (

    <div className="space-y-8 p-6 bg-white/80 rounded-xl shadow-lg">

      <motion.div

        initial={{ opacity: 0, y: 20 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="text-center space-y-6"

      >

        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">

          Third Version Multiplication and Division Algorithms

        </h1>

        <p className="text-2xl text-gray-600">Computer Architecture (07-0613-CSA404)</p>

      </motion.div>



      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.5, duration: 0.8 }}

        className="grid grid-cols-2 gap-12 mt-12"

      >

        <div className="space-y-6">

          <h2 className="text-3xl font-semibold">Presented By</h2>

          <div className="flex items-center space-x-6">

            <Image

              src="https://i.ibb.co.com/WyW152X/seyam.png"

              alt="Student"

              width={144}

              height={144}

              className="rounded-full object-cover border-4 border-primary shadow-lg"

            />

            <div>

              <h3 className="font-semibold">Touhidul Alam Seyam</h3>

              <p className="text-sm text-gray-600">Registration: 230240003</p>

              <p className="text-sm text-gray-600">Student ID: 01923105101003</p>

              <p className="text-sm text-gray-600">4th Semester, Section A</p>

              <p className="text-sm text-gray-600">40th Batch, July-Dec Session</p>

            </div>

          </div>

        </div>



        <div className="space-y-6">

          <h2 className="text-3xl font-semibold">Presented To</h2>

          <div className="flex items-center space-x-6">

            <Image

              src="https://i.ibb.co.com/G5HyqqR/abser-sir.jpg"

              alt="Professor"

              width={144}

              height={144}

              className="rounded-full object-cover border-4 border-primary shadow-lg"

            />

            <div>

              <h3 className="font-semibold">Nurul Absar</h3>

              <p className="text-sm text-gray-600">Associate Professor</p>

              <p className="text-sm text-gray-600">Computer Science & Engineering</p>

              <p className="text-sm text-gray-600">nabsar@bgctub.ac.bd</p>

            </div>

          </div>

        </div>

      </motion.div>



      <motion.div

        initial={{ opacity: 0, y: 20 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ delay: 1, duration: 0.8 }}

        className="flex justify-center mt-12"

      >

        <Image

          src="https://i.ibb.co.com/SfTkrfx/BGCTUB-logo.png"

          alt="BGC Trust University Bangladesh"

          width={160}

          height={160}

          className="object-contain"

        />

      </motion.div>

    </div>

  )

}
