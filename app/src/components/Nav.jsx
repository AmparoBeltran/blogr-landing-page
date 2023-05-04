import { NavStyled } from "./styles/Nav.styled"
import { useState } from "react"

export default function Nav() {
    const [open, setOpen] = useState(false)

    const handleOpenButton = () => {
        setOpen(true)
    }

    const handleCloseButton = () => {
        setOpen(false)
    }

    return (
        <NavStyled>

            <img src="/images/logo.svg" />
            <nav className={open ? 'open' : ''}>
                <button onClick={handleCloseButton} className="icon-close"><img src="/images/icon-close.svg" /></button>
                <div className="menu">

                    <div className="dropdown">
                        <div className="dropdown-target">
                            <button className="dropbtn">Product</button>
                            <img className="mobile-arrow" src="/images/icon-arrow-dark.svg" />
                            <img className="desktop-arrow" src="/images/icon-arrow-light.svg" />

                        </div>
                        <div className="dropdown-content">
                            <a href="#">Overview</a>
                            <a href="#">Pricing</a>
                            <a href="#">Marketplace</a>
                            <a href="#">Features</a>
                            <a href="#">Integrations</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropdown-target">
                            <button className="dropbtn">Company</button>
                            <img className="mobile-arrow" src="/images/icon-arrow-dark.svg" />
                            <img className="desktop-arrow" src="/images/icon-arrow-light.svg" />
                        </div>
                        <div className="dropdown-content">
                            <a href="#">About</a>
                            <a href="#">Team</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropdown-target">
                            <button className="dropbtn">Connect</button>
                            <img className="mobile-arrow" src="/images/icon-arrow-dark.svg" />
                            <img className="desktop-arrow" src="/images/icon-arrow-light.svg" />
                        </div>
                        <div className="dropdown-content">
                            <a href="#">Contact</a>
                            <a href="#">Newletter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                    <hr />

                    <div className="dropdown desktop-login">
                        <a href="#">Login</a>
                        <button className="btn primary mobile" href="#">Sign Up</button>
                    </div>
                </div>
            </nav>
            {!open && <button onClick={handleOpenButton} className="icon-menu"><img src="/images/icon-hamburger.svg" /></button>}
        </NavStyled >
    )
}





