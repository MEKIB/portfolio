import React from 'react'
import './footer.css'
function Footer(){
    
    return(
        <section id='footer'>
            <div>
             <p>&copy;2023-{new Date().getFullYear()}</p>
             <p>Designed by MEKIBIB ATLAW</p>
            </div>
        </section>
    )
}
export default Footer
