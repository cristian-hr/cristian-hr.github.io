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
                    <IoLogoJavascript className="iconSkills" />
                    <GrReactjs className="iconSkills" />
                    <SiRedux className="iconSkills" />
                    <AiOutlineHtml5 className="iconSkills" />
                    <IoLogoCss3 className="iconSkills" />
                    <GrNode className="iconSkills" />
                    <img className="imgSkills" src="https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/express.svg?alt=media&token=6f2a0829-3618-48e1-81c3-bf94401c2da9" alt="" />
                    <img className="imgSkills" src="https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/sequelize.svg?alt=media&token=d70de46e-6daa-44ce-93ed-ef8b524cb426" alt="" />
                    <SiPostgresql className="iconSkills" />
                    <SiDocker className="iconSkills" />
                    <SiFirebase className="iconSkills" />
                    <FaGit className="iconSkills" />
                </div>
            </div>
            <div>
                <div>
                    <span className="subTitleSkills">Design</span>
                </div>
                <div className="contIconsSkills">
                    <SiAdobephotoshop className="iconSkills" />
                    <SiAdobelightroomcc className="iconSkills" />
                    <img className="davinciSkills" src="https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/davinci.svg?alt=media&token=a70bb568-4c48-42b4-8d5c-20747531d01f" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills

// Sequelize
// Express.js
// firebase
// git

//github
//linkedin
