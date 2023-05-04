import SectioFeaturesBottom from "./SectionFeaturesBottom";
import SectionFeaturesCenter from "./SectionFeaturesCenter";
import SectionFeaturesTop from "./SectionFeaturesTop";
import { MainContainerStyled } from "./styles/MainContainer.styled";

export default function MainContainer() {
    return (
        <MainContainerStyled>
            <h2>Designed for the future</h2>
            <SectionFeaturesTop />
            <SectionFeaturesCenter />
            <SectioFeaturesBottom />
        </MainContainerStyled>
    )
}