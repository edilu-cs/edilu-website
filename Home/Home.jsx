import edilu from './edilu.png';

function Home(){
function contacts(){
    window.location.href = '#contact';
}
function projects(){
    window.location.href = '#service';
}
    return(
     <>
     <div id="home">
        <div>
                <h1 id="build">Build Something <span id="remarkable">Remarkable</span></h1>
                <p id="intro">Welcome to my web development portfolio, where creativity meets technology.</p>
                <p id="introduction">Explore my work, discover my skills, and see how I transform ideas into modern, responsive, and professional websites.</p>
               <button id='projects' onClick={projects}>Project</button>
               <button  id='contactme' onClick={contacts}>Contact Me</button>
        </div>
        <div id='edildiv'>
               <img src={edilu} id='edilimage'></img>

        </div>
     </div>
     </>
    );
}

export default Home;