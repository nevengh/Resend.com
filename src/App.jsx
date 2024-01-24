import './App.css'
import Container from './Components/Container/Container'
import Companies from './Sections/Companies/Companies'
import DevelopEmail from './Sections/DevelopEmail/DevelopEmail'
import EmailReimagened from './Sections/EmailReimagened/EmailReimagened'
import EverythingInControl from './Sections/EverythingInControl/EverythingInControl'
import FirstClass from './Sections/FirstClass/FirstClass'

import Footer from './Sections/Footer/Footer'


import Hero from './Sections/Hero/Hero'
import Integrate from './Sections/Integrate/Integrate'

import NavBar from './Sections/NavBar/NavBar'

import ReachHuman from './Sections/ReachHuman/ReachHuman'
import SubSectionOne from './Sections/SubSectionOne/SubSectionOne'
import SubSectionTwo from './Sections/SubSectionTwo/SubSectionTwo'


const App = () => {
  return (
    <>
      {/* <NavBar/>
      
      <Hero/>
      <Companies/>
      <Integrate/> */}
      <NavBar/>
      <Container>
        
      <Hero/>
      <Companies/>
      <Integrate/>
      <FirstClass/>
      {/* <FirstClassDeveloper/> */}
      <DevelopEmail/>
      <ReachHuman/>
      <SubSectionOne/>
      <EverythingInControl/>
      
      
      
      <SubSectionTwo/>
      <EmailReimagened/>
      {/* <Companies/> */}
      </Container>
      <Footer/>
    </>
    
  )
}

export default App