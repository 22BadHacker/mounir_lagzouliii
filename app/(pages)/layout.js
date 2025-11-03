import Footer from '@/components/Footer'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='min-h-svh'>
        {children}
        <footer style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)'}} className="w-full  flex h-svh relative ">
            <div className="fixed flex bottom-0 w-full h-auto">
                <Footer />
            </div>
          </footer>
    </div>
  )
}

export default layout
