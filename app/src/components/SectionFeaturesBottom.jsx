import { SectionFeaturesStyled } from "./styles/SectionFeatures.styled";

export default function SectioFeaturesBottom() {
    return (
        <SectionFeaturesStyled inverted={true}>
            <article>
                <div className="features">
                    <h3>Free, open, simple</h3>
                    <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

                    </p>
                </div>
                <div className="features">
                    <h3>Powerful tooling</h3>
                    <p>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                    </p>
                </div>
            </article>
            <img className="mobile" src="/images/illustration-laptop-mobile.svg" />
            <img className="desktop" src="/images/illustration-laptop-desktop.svg" />

        </SectionFeaturesStyled>
    )
}