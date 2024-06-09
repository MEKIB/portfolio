import React from 'react'
import './footer.css'
import telegram_icon from '../../assets/telegram_icon.jpg'
import github_icon from '../../assets/github.png'
import {Link} from 'react-router-dom'
function Footer(){
    return(
    <footer id="footer">
            <div class="container">
                <div class="footer-left">
                    <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Designed by MEKIBIB ATLAW</p>
                </div>
                <div class="footer-right">
                    <ul>
                    <li><a href="http://t.me/MekWebDev" target='_blank'><img src={telegram_icon} alt="Telegram" /></a></li>
                    <li> <a href="https://github.com/MEKIB" target='_blank'><img src={github_icon} alt="GitHub" /></a></li>
                    </ul>
                </div>
            </div>
    </footer>
    )
}
export default Footer
