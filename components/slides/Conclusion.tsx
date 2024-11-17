export default function Conclusion() {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Third version algorithms offer improved efficiency over previous versions</li>
          <li>Both multiplication and division algorithms use similar hardware components</li>
          <li>These algorithms form the basis for arithmetic operations in modern processors</li>
          <li>Future improvements may focus on parallel processing and specialized hardware</li>
        </ul>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Aspect</th>
              <th className="border border-gray-300 p-2">Multiplication</th>
              <th className="border border-gray-300 p-2">Division</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Key Operation</td>
              <td className="border border-gray-300 p-2">Addition</td>
              <td className="border border-gray-300 p-2">Subtraction</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Shift Direction</td>
              <td className="border border-gray-300 p-2">Right</td>
              <td className="border border-gray-300 p-2">Left</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Result Location</td>
              <td className="border border-gray-300 p-2">Product Register</td>
              <td className="border border-gray-300 p-2">Remainder Register</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }