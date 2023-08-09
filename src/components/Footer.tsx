import { StyledFooter } from "../styles/styled-footer";

export const Footer = () => {
    return (
        <StyledFooter>
            <div className="contato">
                <h2>Contato</h2>
            </div>

            <div className="social">
                <div>
                    <ul className="links">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>

                    <p>Your Website 2020. All Rights Reserved.</p>
                </div>

                <div>
                    <ul className="socialmedia">
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-twitter"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </StyledFooter>
    )
}