import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/GlobalStyles"
import Hero from "./components/Hero"
import MainContainer from "./components/MainContainer"
import Footer from "./components/Footer"


const theme = {

  colors: {

    // Primary

    lightRed: 'hsl(356, 100%, 66%)', //(CTA text)
    veryLightRed: 'hsl(355, 100%, 74%)', //(CTA hover background)
    veryDarkBlue: 'hsl(208, 49%, 24%)', //(headings)

    // Neutral

    white: 'hsl(0, 0%, 100%)', //(text)
    grayishBlue: 'hsl(240, 2%, 79%)', //(footer text)
    veryDarkGrayishBlue: 'hsl(207, 13%, 34%)', //(body copy)
    veryDarkBlackBlue: 'hsl(240, 10%, 16%)', //(footer background)

  },

  gradients: {
    // Background gradient - Intro/CTA mobile nav:

    veryLightRed: 'hsl(13, 100%, 72%)',
    lightRed: 'hsl(353, 100%, 62%)',

    // Background gradient - body:

    veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
    veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
  },


  desktop: '1440px'


}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <MainContainer />
      <Footer />
    </ThemeProvider>
  )
}

export default App


