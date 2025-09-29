import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'




function App() {

  const [text, setText] = useState("")
  const [summarize, setSummarize] = useState("")

  const handleform = async (e) => {
    e.preventDefault()


    if (!text.trim()) {
      alert("enter the text")
      return
    }

    const response = await axios.post("http://127.0.0.1:5000/summarize",
      {
        "text": text
      }

    )
    setSummarize(response.data.answer)




  }






  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-blue-200 to-purple-200 py-10">
        <div className="max-w-lg w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-green-300">
          
          <h1 className="text-3xl font-extrabold text-green-700 mb-2 text-center tracking-tight drop-shadow-lg">SummAi</h1>
          <p className="text-lg text-gray-700 mb-6 text-center font-medium">Summarize your answer in a few clicks</p>
          <form onSubmit={handleform} className="w-full flex flex-col items-center gap-4">
            <textarea
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter the text to summarize..."
              className="w-full h-32 p-4 border-2 border-green-400 rounded-xl shadow focus:outline-none focus:border-purple-500 resize-none bg-white text-gray-800 placeholder-gray-400 transition-all duration-200"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 hover:from-green-500 hover:to-purple-500 text-white text-lg font-bold rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <span className="inline-block align-middle mr-2"> </span>Summarize
            </button>
          </form>
          <div className="w-full mt-8 flex flex-col items-center">
            <p className="text-base text-gray-600 mb-2 font-semibold">Here is the summarized text:</p>
            <p className="w-full min-h-[3rem] mt-2 bg-gradient-to-r from-amber-500 via-pink-400 to-purple-400 text-white rounded-xl p-4 shadow text-center font-semibold text-lg transition-all duration-200">
              {summarize}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
