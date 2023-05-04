import { SectionFeaturesStyled } from "./styles/SectionFeatures.styled";

export default function SectionFeaturesTop() {
    return (
        <SectionFeaturesStyled>

            <article>
                <div className="features">
                    <h3>Introducing an extensible editor</h3>
                    <p>
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                        change the looks of a blog.
                    </p>
                </div>
                <div className="features">
                    <h3>Robust content management</h3>
                    <p>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </article>
            <img className="mobile" src="/images/illustration-editor-mobile.svg" />
            <img className="desktop" src="/images/illustration-editor-desktop.svg" />

        </SectionFeaturesStyled>
    )
}