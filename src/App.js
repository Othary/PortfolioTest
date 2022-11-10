
import Pricing from "./components/Pricing";
import Contacts from "./components/Contacts";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import PortfolioTrialGround from "./components/additionFilesForKeeping/PortfolioTrialGround";
// import TrialBlockMovement from "./components/additionFilesForKeeping/TrialBlockMovement";



// TODO: check for minimum web security
// TODO: set error boundaries 
// TODO: place all missing tags
// TODO: check for SEO optimization
// TODO: insert spinner component in Gallery
// TODO: put my signature on every picture
// TODO: check optimization for dark-mode
// TODO: last time try other options to move slides to precise location, calculate values
// TODO: clean all errors from the developer tools
// TODO: host the website



function App() {
    

    
    return (
        <div>
            <NavBar/>
            <Home/>
            <Portfolio/>         
            <Pricing/> 
            <Contacts/>
            
        </div>
    )
}

export default App;