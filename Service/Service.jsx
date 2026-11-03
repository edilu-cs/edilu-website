import responsive from './responsive.png';
import portfolio from './portfolio.png';
import meeting from './meeting.png';
import calculator from './calculator.jfif';
import landing from './landing.jfif';
import furniture from './furniture.jfif';

function Service(){
    return(
     <>
     <div id="service">
          <div id='service1'>
                <p id="ido">WHAT I DO</p>
                <h1 id="need">Service What You Need</h1>
                <p id="need1">I provide modern, professional, and user-friendly web development services tailored to your needs, helping you build your online presence, showcase your business, and turn your ideas into reality.</p>
          </div>
          <div id="responsive">
                  <div id='responce'><img src={responsive}></img></div>
                  <h1 id='no1'>01</h1>
                  <h1  id='no2'>Responsive Design</h1>
                  <p>website to automatically adjust its layout and content to fit different screen sizes, such as mobile phones, tablets, and desktop computers.</p>
                  <span id='spam1'>Learn more</span>
          </div>
          <div id="portfolio">
                  <div id='responce'><img src={portfolio}></img></div>
                  <h1 id='no1'>02</h1>
                  <h1  id='no2'>Portfolio Design</h1>
                  <p>creating a professional and visually appealing website that showcases your skills, projects, experience, and achievements.</p>
                  <span  id='spam1'>Learn more</span>
          </div>
          <div id="business"> 
                  <div id='responce'><img src={meeting}></img></div>
                  <h1 id='no1'>03</h1>
                  <h1  id='no2'>Business Website</h1>
                  <p>creating professional websites that help businesses establish an online presence, showcase their products and services, attract customers, and grow their brand.</p>
                  <span id='spam1'>Learn more</span>
          </div>
     </div>
     <div id='wholeproject'>
       <div id='landing'>
             <img src={landing} id='calculator'></img>
             <h3>Web landing</h3>
             <button>see project</button>
       </div>
       <div  id='calculators'>
             <img src={calculator} id='calculator'></img>
             <h3>Calculator</h3>
             <button>see project</button>
       </div>
       <div  id='furniture'>
             <img src={furniture} id='calculator'></img>
             <h3>Shop Project</h3>
             <button>see project</button>
       </div>
       <div id='service1'>
              <h1 id='turn'>Idea Turned in to Experience</h1>
              <p>transform creative ideas into meaningful digital experiences through modern design, clean code, and innovative web development.</p>
              <button id='seeing'>see projects</button>
       </div>
     </div>
     </>
    );
}

export default Service;