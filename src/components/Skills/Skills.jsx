import "../../scss/Skills.scss"
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { GrReactjs, GrNode } from "react-icons/gr";
import {
    SiRedux,
    SiPostgresql,
    SiDocker,
    SiAdobelightroomcc,
    SiAdobephotoshop,
    SiFirebase
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaGit } from "react-icons/fa"


function Skills() {

    return (
        <div className="skills">
            <span className="titleSkills">Skills</span>
            <div>
                <div>
                    <span className="subTitleSkills">Full Stack</span>
                </div>
                <div className="contIconsSkills">
                    <div className="divIconsSkills">
                        <IoLogoJavascript className="iconSkills" />
                        <span>JavaScript</span>
                    </div>
                    <div className="divIconsSkills">
                        <GrReactjs className="iconSkills" />
                        <span>React</span>
                    </div>
                    <div className="divIconsSkills">
                        <SiRedux className="iconSkills" />
                        <span>Redux</span>
                    </div>
                    <div className="divIconsSkills">
                        <AiOutlineHtml5 className="iconSkills" />
                        <span>HTML</span>
                    </div>
                    <div className="divIconsSkills">
                        <IoLogoCss3 className="iconSkills" />
                        <span>CSS</span>
                    </div>
                    <div className="divIconsSkills">
                        <GrNode className="iconSkills" />
                        <span>Node.js</span>
                    </div>
                    <div className="divIconsSkills">
                        <img className="imgSkills" src="https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/express.svg?alt=media&token=6f2a0829-3618-48e1-81c3-bf94401c2da9" alt="" />
                        <span>Express</span>
                    </div>
                    <div className="divIconsSkills">
                        <img className="imgSkills" src="https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/sequelize.svg?alt=media&token=d70de46e-6daa-44ce-93ed-ef8b524cb426" alt="" />
                        <span>Sequelize</span>
                    </div>
                    <div className="divIconsSkills">
                        <SiPostgresql className="iconSkills" />
                        <span>PostgreSQL</span>
                    </div>
                    <div className="divIconsSkills">
                        <SiDocker className="iconSkills" />
                        <span>Docker</span>
                    </div>
                    <div className="divIconsSkills">
                        <SiFirebase className="iconSkills" />
                        <span>Firebase</span>
                    </div>
                    <div className="divIconsSkills">
                        <FaGit className="iconSkills" />
                        <span>Git</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span className="subTitleSkills">Graphics</span>
                </div>
                <div className="contIconsSkills">
                    <div className="divIconsSkills">
                        <SiAdobephotoshop className="iconSkills" />
                        <span>Photoshop</span>
                    </div>
                    <div className="divIconsSkills">
                        <SiAdobelightroomcc className="iconSkills" />
                        <span>Lightroom</span>
                    </div>
                    <div className="divIconsSkills">
                        <img className="davinciSkills" src="https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/davinci.svg?alt=media&token=040b7ea9-f33f-495d-a7ca-5b6a4b4c615e" alt="" />
                        <span>D. Resolve</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
