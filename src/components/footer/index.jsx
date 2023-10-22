import Info from './info'
const Footer = ()=>{
    return(
        <div>
            <Info />
            <footer class="footer_section">
                <div class="container">
                <p>
                    &copy; <span id="displayDateYear"></span> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;