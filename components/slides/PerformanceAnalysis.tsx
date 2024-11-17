import SlideWrapper from '../SlideWrapper'

export default function PerformanceAnalysis() {
  return (
    <SlideWrapper title="Performance Analysis">
      <div className="space-y-6">
        <table 
          className="w-full border-collapse rounded-lg overflow-hidden shadow-lg"
          role="table"
          aria-label="Performance Analysis"
        >
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 to-purple-100">
              <th className="p-4 text-left font-bold">Algorithm</th>
              <th className="p-4 text-left font-bold">Time Complexity</th>
              <th className="p-4 text-left font-bold">Space Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Multiplication (Version 3)</td>
              <td className="border border-gray-300 p-2">O(n)</td>
              <td className="border border-gray-300 p-2">O(n)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Division (Version 3)</td>
              <td className="border border-gray-300 p-2">O(n)</td>
              <td className="border border-gray-300 p-2">O(n)</td>
            </tr>
          </tbody>
        </table>

        <div className="prose max-w-none">
          <p className="text-lg">
            Both algorithms achieve linear time complexity (O(n)) as they process each bit 
            of the operands exactly once. The space complexity remains linear (O(n)) due 
            to the register requirements proportional to operand sizes.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
