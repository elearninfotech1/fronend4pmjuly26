import React from 'react'
import footer from "./footerStyles.module.css"
const Footer = () => {
  return (
      <footer className={footer.footer}>          
            <div className="container">
                 <div className="row">
                    <div className="col-md-6">
                        <p>😂 2026 Surgy Life.</p>
                  </div>
                   <div className="col-md-6">
                        <p className='text-end'>Designed by Surgy Life.</p>
                    </div>
                </div> 
            </div>
      </footer>
  )
}

export default Footer