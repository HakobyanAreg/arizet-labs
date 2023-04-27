import './Footer.scss'

export const Footer = () => (
    <div className="footer w-50">
        <ul className="footer-list">
            <li className="footer-list-item">
                <a href="#" className="footer-list-item-link">Privacy Policy</a>
            </li>
            <li className="footer-list-item">
                <a href="#" className="footer-list-item-link">Terms of Use</a>
            </li>
            <li className="footer-list-item">
                <a href="#" className="footer-list-item-link">Safe Dating</a>
            </li>
            <li className="footer-list-item">
                <a href="#" className="footer-list-item-link">Contact Us</a>
            </li>
        </ul>
        <p className="copyright">
            © Copyright 2023, Kaleton Web s.r.o.
        </p>
    </div>
)
