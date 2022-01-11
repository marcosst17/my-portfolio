import "./introduce.scss";
import javascript from "../../Iconos/javascript.png"
import typescript from "../../Iconos/typescript.png"
import nodejs from "../../Iconos/nodejs.png"
import psql from "../../Iconos/psql.png"
import react from "../../Iconos/react.png"
import redux from "../../Iconos/redux.png"
import git from "../../Iconos/git.png"
import html from "../../Iconos/html.png"
import css from "../../Iconos/css.png"
import sass from "../../Iconos/sass.png"

export function Introduce () {
    return (
        <div>
            <div>
                <h1>Let me introduce myself</h1>
                <p>Hi there! My Name is Marcos and I'm from Argentina, I live in a small town in Entre Rios.</p>
                <p>I'm a Junior Full-Stack Developer, though I tend to prefer Frontend mostly.</p>
                <p>I'm a very enthusiastic Web Developer, I love to learn new things all the time, it's a passion for me.</p>
                <p>I also love to play video games a lot!</p>
            </div>
            <div className="tech-stack">
                <h1>My Tech Stack</h1>
                <div>
                    <img src={javascript} alt="JavaScript logo" />
                </div>
                <div>
                    <img src={typescript} alt="typescript logo" />
                </div>
                <div>
                    <img src={react} alt="react logo" />
                </div>
                <div>
                    <img src={redux} alt="redux logo" />
                </div>
                <div>
                    <img src={nodejs} alt="nodejs logo" />
                </div>
                <div>
                    <img src={psql} alt="psql logo" />
                </div>
                <div>
                    <img src={git} alt="git logo" />
                </div>
                <div>
                    <img src={html} alt="html logo" />
                </div>
                <div>
                    <img src={css} alt="css logo" />
                </div>
                <div>
                    <img src={sass} alt="sass logo" />
                </div>
            </div>
        </div>
    )
}