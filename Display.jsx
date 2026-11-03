import Navigation from './Navigation/Navigate.jsx';
import Home from './Home/Home.jsx';
import Service from './Service/Service.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';

function Display(){
    return(
        <>
       <Navigation/>
       <Home/>
       <Service/>
       <About/>
       <Contact/>
       </>
    );
}

export default Display;