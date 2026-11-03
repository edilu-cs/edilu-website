import ediluss from './ediluss.png'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'
import next from './next.png'
import sql from './sql-server.png'


function About(){
    return(
     <>
     <div id="about">
        <div id=''>
                <img src={ediluss} id='ediluss'></img>
        </div>
        <div id='aboutme'>
                <p>A LITTLE ABOUT ME</p>
                <h1>Curious mind.<br/>
                    Builder’s mindset.</h1>
                    <p> I’m Edilu, a web developer who enjoys turning ideas into useful, attractive digital experiences.</p>
                    <p>I focus on learning modern web technologies, writing organized code, and building websites that work beautifully across different screen sizes.</p>
                    <button>Let's work together</button>
        </div>
        <div id='tecnology'>
              <h3>TECHNOLOGY I WORK WITH</h3>
              <div id='wholetec'>
              <div id='htmls'>
                <img src={html} id='html'></img><span>HTML</span>

              </div>
              <div id='htmls'>
                     <img src={css} id='html'></img><span>CSS</span>
              </div>
              <div id='htmls'>
                    <img src={js} id='html'></img><span>JAVASCRIPT</span>
              </div>
              <div id='htmls'>
                   <img src={react} id='html'></img><span>REACT</span>
              </div>
              <div id='htmls'>
                   <img src={next} id='html'></img><span>NEXT</span>
              </div>
              <div id='htmls'>
                  <img src={sql} id='html'></img> <span>SQL</span>
              </div>
              </div>
        </div>
     </div>
     </>
    );
}

export default About;