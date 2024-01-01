import React from 'react'
import img from '../images/Untitled.png'
import img1 from '../images/anime-site.png'
import img2 from '../images/random-joke.png'
import img3 from '../images/movie-app.png'
import img4 from '../images/weather app.png'
import img5 from '../images/fake-shop.png'
import img6 from '../images/store.png'
import img7 from '../images/rick n momo.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
     <div class="wrapper wrapper1">
      <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
      <div>
        <h1 className="h1-1">html and css projects</h1>
        <div className="projects">
          <div className="project-images">
            <h1 className="h1">Pass time suggestions</h1>
            <div className="painted">
              <img src={img} className="my-project" alt=''/>
              <br />
              <button className="btn checkout">
                <Link to="https://privils.github.io/new/">check me out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper wrapper1">
      <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
      <div>
        <h1 className="h1-1">html, css, JavaScript projects</h1>
        <div className="projects">
          <div className="project-images">
            <h1 className="h1">Anime recomentations</h1>
            <div className="painted">
              <img src={img1} className="my-project" alt=''/>
              <br />
              <button className="btn checkout">
                <Link to="https://privils.github.io/Anime-Recomentations/">
                  check me out
                </Link>
              </button>
            </div>
          </div>
          <div className="project-images">
            <h1 className="h1">random-joke-api</h1>
            <div className="painted">
              <img src={img2} className="my-project" alt=''/>
              <br />
              <button className="btn checkout">
                <Link to="https://privils.github.io/random-joke-api/">
                  check me out
                </Link>
              </button>
            </div>
          </div>
          <div className="project-images">
            <h1 className="h1">PlayStore</h1>
            <div className="painted">
              <img src={img6} className="my-project" alt=''/>
              <br />
              <button className="btn checkout">
                <Link to="https://privils.github.io/playStore/">check me out</Link>
              </button>
            </div>
          </div>
          <div className="project-images">
            <h1 className="h1">Movie-Api</h1>
            <div className="painted">
              <img src={img3} className="my-project" alt=''/>
              <br />
              <button className="btn checkout">
                <Link to="https://privils.github.io/movies/">check me out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
      <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
      <div>
        <h1 className="h1-1">react projects</h1>
        <div className="projects">
          <div className="project-images">
            <h1 className="h1">Api weather App</h1>
            <div className="painted">
            <img src={img4} className="my-project" alt=''/><br/>
            <button className="btn checkout"><Link to="https://privils.github.io/weather/">check me out</Link></button>
            </div>
        </div>
        <div className="project-images">
          <h1 className="h1">Rick N Momo</h1>
          <div className="painted">
            <img src={img7} alt="rick n morty project" className='my-project'/>
            <br />
            <button className="btn checkout"><Link to='https://privils.github.io/rickNmomo/'>check me out</Link> </button>
          </div>
        </div>
          <div className="project-images">
            <h1 className="h1">Api Store</h1>
            <div className="painted">
              <img src={img5} className="my-project" alt=''/>
              <br />
              <button className="btn checkout">
                <Link to="https://privils.github.io/new-store/">
                  check me out
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
