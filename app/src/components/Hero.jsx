
import Nav from "./Nav";
import { HeroStyled } from "./styles/Hero.styled";

export default function Hero() {
    return (
        <HeroStyled>
            <div className="wrapper">
                <Nav />

                <div className="cta">
                    <h1>A modern <br />publishing platform</h1>
                    <p>Grow your audience and buid your online brand</p>
                    <div className="cta-btns">
                        <button className="btn primary">Start for free</button>
                        <button className="btn secondary">Learn more</button>
                    </div>
                </div>
            </div>
        </HeroStyled>
    )
}