import React from 'react'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Preloader from '@/components/Preloader'

const layout = ({children}) => {
  return (
    <div className='min-h-svh'>
      <Preloader>
        <Header />
          {children}
          <footer style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)'}} className="w-full  flex h-svh relative ">
              <div className="fixed flex bottom-0 w-full h-auto">
                  <Footer />
              </div>
            </footer>
          </Preloader>

    </div>
  )
}

export default layout
