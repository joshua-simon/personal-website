import photo from '../images/josh_photo.jpg'

const Main = () => {
    return(
        <div className="row">
           <div className="top-row-container">
               <div className="top-row-photo">
                       <img src = {photo}/>
                       <h1>Joshua Simon</h1>
                       <h2>Web Developer</h2>
               </div>
               <div className="top-row-blurb">
                   <h2>Hi! I'm Josh</h2> <br></br>
                   <p>I come from a background of biochemistry and music, and have a broad employment history
                       in education and science. <br></br>
                    A love of programming and building web pages led me to study web development at Enspiral Dev Academy, 
                    and  I'm <br></br> currently looking for a front-end or full-stack role in Wellington. 
                    Please get in touch!
                   </p>
                   <div className="icons">
                       {/* <label>
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
                       </label> */}
                       
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Main