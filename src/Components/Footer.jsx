const Footer = () => {
    return (
        <footer className=" flex-col footer">
        <div className="footer__text-box">
            Made with <span className="color-primary">&lt;/&gt;</span> by Aryan
            Chaudhary
        </div>
        <div className="footer__icons-box">
            <a target="blank" href="https://github.com/aryan-13/Ecom-store-ui">
                <i className="footer__items footer__items-icons fab fa-github"></i>
            </a>
            <a href="https://twitter.com/AryannnC" target="blank">
                <i className="footer__items footer__items-icons fab fa-twitter"></i>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/aryan-chaudhary/">
                <i className="footer__items footer__items-icons fab fa-linkedin"></i>
            </a>
        </div>
        <div className="footer__copyright-box">
            &copy; 2022 Lunar<span className="color-primary">Store</span>
        </div>
    </footer>
    )
}
export default Footer