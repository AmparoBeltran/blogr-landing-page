import { FooterStyled } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <FooterStyled>
            <img src="/images/logo.svg" />
            <div className="nav">
                <h3>Product</h3>
                <a href="#">Overview</a>
                <a href="#">Pricing</a>
                <a href="#">Marketplace</a>
                <a href="#">Features</a>
                <a href="#">Integrations</a>
            </div>
            <div className="nav">
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Team</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
            </div>
            <div className="nav">
                <h3>Connect</h3>
                <a href="#">Contact</a>
                <a href="#">Newsletter</a>
                <a href="#">LinkedIn</a>
            </div>
        </FooterStyled>
    )
}