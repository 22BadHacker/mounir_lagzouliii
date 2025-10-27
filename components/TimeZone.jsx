// components/CasablancaTime.jsx
'use client'
import { useState, useEffect } from 'react'

export default function TimeZone() {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      // Time formatter for Casablanca
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      
      // Date formatter for Casablanca
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      // Moroccan date format (optional)
      const moroccanDateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })

      setCurrentTime(timeFormatter.format(now))
      setCurrentDate(dateFormatter.format(now))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="">
        <div className="font-Archivo flex flex-col leading-[1.1] text-[14px] font-[450]">
          Casablanca — {currentTime || '--:--:--'} (GMT+1) 
        </div>
      <div className="text-center">
        
        
        
        
      </div>
    </div>
  )
}


{/* <span>{currentDate || 'Loading date...'}</span> */}