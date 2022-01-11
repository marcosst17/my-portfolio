import { LandingSVG } from "./LandingSVG";
import "./landing.scss"

export function Landing () {
    return (
        <div>
            <div className="landing-header">
                <div className="landing-sub-header">
                    <div className="landing-name">
                        <div>
                            <h1>Marcos Stricker</h1>
                            <h2>Full-Stack Web Developer!</h2>
                        </div>
                    </div>
                    <LandingSVG/>
                </div>
            </div>
        </div>
    )
}
