'use client'
import { motion } from 'framer-motion'



interface TableRow {

  aspect: string;

  multiplication: string;

  division: string;

}



export default function Comparison() {

  const tableData: TableRow[] = [

    {

      aspect: 'Register Usage',

      multiplication: 'Combined Product-Multiplier',

      division: 'Combined Remainder-Quotient'

    },

    {

      aspect: 'Main Operation',

      multiplication: 'Addition',

      division: 'Subtraction'

    },

    {

      aspect: 'Shift Direction',

      multiplication: 'Right',

      division: 'Left'

    },

    {

      aspect: 'Control Logic',

      multiplication: 'Simple',

      division: 'Complex'

    },

    {

      aspect: 'Hardware Cost',

      multiplication: 'Lower',

      division: 'Higher'

    }

  ]



  return (

    <div className="space-y-6">

      <motion.h2 

        initial={{ opacity: 0, y: -20 }}

        animate={{ opacity: 1, y: 0 }}

        className="text-2xl font-bold text-center"

      >

        Comparison of Third Version Algorithms

      </motion.h2>



      <motion.div 

        initial={{ opacity: 0, scale: 0.95 }}

        animate={{ opacity: 1, scale: 1 }}

        transition={{ delay: 0.2 }}

        className="overflow-x-auto"

      >

        <table className="w-full border-collapse border border-gray-300">

          <thead>

            <tr className="bg-gradient-to-r from-blue-100 to-purple-100">

              <th className="border border-gray-300 p-3">Aspect</th>

              <th className="border border-gray-300 p-3">Multiplication</th>

              <th className="border border-gray-300 p-3">Division</th>

            </tr>

          </thead>

          <tbody>

            {tableData.map((row, index) => (

              <motion.tr 

                key={row.aspect}

                initial={{ opacity: 0, x: -20 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ delay: 0.3 + index * 0.1 }}

                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}

              >

                <td className="border border-gray-300 p-3 font-medium">{row.aspect}</td>

                <td className="border border-gray-300 p-3">{row.multiplication}</td>

                <td className="border border-gray-300 p-3">{row.division}</td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </motion.div>



      <motion.div 

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.8 }}

        className="grid grid-cols-2 gap-6 mt-8"

      >

        <div className="space-y-2">

          <h3 className="font-semibold">Key Advantages of Multiplication</h3>

          <ul className="list-disc list-inside space-y-1 text-sm">

            <li>Simpler control logic</li>

            <li>Fewer hardware components</li>

            <li>More straightforward implementation</li>

          </ul>

        </div>

        <div className="space-y-2">

          <h3 className="font-semibold">Key Advantages of Division</h3>

          <ul className="list-disc list-inside space-y-1 text-sm">

            <li>More precise control over remainder</li>

            <li>Better handling of special cases</li>

            <li>Integrated quotient generation</li>

          </ul>

        </div>

      </motion.div>

    </div>

  )

}
