import photo from '../images/josh_photo.jpg'

const Main = () => {
    return(
        <div className="row">
           <div className="top-row-container">
               <div className="column left">
                   <div className="text">
                       <img src = {photo}/>
                       <p>Joshua Simon</p>
                       <p>Web Developer</p>
                   </div>
               </div>
               <div className="column right">
                   <h1>Hi! I'm Josh</h1>
                   <p>I come from a background of biochemistry and music. <br></br>
                   I completed a postgrad research project on photosynthesis at Otago University ,<br></br>
                    and spent 4 years at the New Zealand School of Music studying Jazz Saxophone and Composition.<br></br>
                    A love of science and technology drew me towards programming and web development,<br></br>
                    which led me to studying web dev bootcamp with Enspiral Dev Academy. <br></br>
                    I'm currently looking for a front-end or full-stack role in Wellington. <br></br>
                    Please get in touch!
                   </p>
                   <div className="icons">
                       <label>
                           Music
                        <a href="https://soundcloud.com/josh-simon-264281792">
                       <i>🎷</i>
                       </a>
                       </label>
                       <label>
                           Science
                        <a href="https://soundcloud.com/josh-simon-264281792">
                       <i>🧪</i>
                       </a>
                       </label>
                       <label>
                           Code
                        <a href="https://github.com/joshua-simon">
                       <i>💻</i>
                       </a>
                       </label>
                       
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Main