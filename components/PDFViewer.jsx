// components/PDFViewer.jsx
'use client'
import { useState } from 'react'
import { TfiArrowTopRight } from 'react-icons/tfi'

export default function PDFViewer() {
  const [showPDF, setShowPDF] = useState(false)

  return (
    <div>
      <button 
        onClick={() => setShowPDF(true)}
        className="hover:underline flex gap-1 items-center  duration-200 ease-in-out"
      >
        Resume <TfiArrowTopRight className='text-[10px]' />
      </button>
      
      {showPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">My Resume</h3>
              <button 
                onClick={() => setShowPDF(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="h-full">
              <iframe 
                src="/Project_Assets/Mounir_Lagzoulii_Resume.pdf"
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}