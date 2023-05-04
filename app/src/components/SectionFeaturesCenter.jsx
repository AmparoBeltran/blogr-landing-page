import { SectionFeaturesCenterStyled } from "./styles/SectionFeatures.styled";

export default function SectionFeaturesCenter() {
    return (
        <SectionFeaturesCenterStyled>
            <img src="/images/illustration-phones.svg" />
            <div className="wrapper">
                <article>
                    <div className="features">
                        <h3>State of the Art Infrastructure</h3>
                        <p>
                            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>
                </article>
            </div>

        </SectionFeaturesCenterStyled>
    )
}