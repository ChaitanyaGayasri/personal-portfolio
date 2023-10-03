import Header from "../Header"
import About from "../About"
import MyContact from "../../MyContact"
import "./index.css"

const Home = () => (
     <>
     <Header/>
     <div className="main">
     <div className="home-container">
     <div className="home-content">
       <h1 className="home-heading">I'm a <span className="span">Frontend Developer</span></h1>
       <p className="home-description">
       I Worked as Full Stack developer at NextWave since 8 months 
       learning new technologies and using responsive web design layout
      to develop the web pages. I enjoy turning complex problems into simple,making website responsive.
      My aim is to become frontend devloper that i can assure make people lives better using my skills and building the web applications effective and attractive towards learning new things, solveing complex problems..
       </p>
       <button type="button" className="shop-now-button">
       Hire Me!
       </button>
     </div>
     <img
       src="https://i.postimg.cc/brJC2dZR/8222-1.jpg"
       alt="Profile"
       className="home-desktop-img"
     />
   </div>
   </div>
   <About/>
  <MyContact/>
   </>
     
)
export default Home  