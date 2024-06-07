import React from 'react'
import './footer.css'
function Footer(){
    
    return(
        <footer id="footer">
        <div class="container">
            <div class="footer-left">
                <p>&copy; 2023 - <span id="current-year">{new Date().getFullYear()}</span> Designed by MEKIBIB ATLAW</p>
            </div>
            <div class="footer-right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}
export default Footer
