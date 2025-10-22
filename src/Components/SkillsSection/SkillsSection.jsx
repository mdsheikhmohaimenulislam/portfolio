import htmlLogo from "/html.png";
import cssLogo from "/css.png";
import javascriptLogo from "/javascript.png";
import reactjsLogo from "/reactjs.png";
import tailwindcssLogo from "/tailwindcss.png";
import bootstrapLogo from "/bootstrap.png";
import Tilt from "react-parallax-tilt";

import githubLogo from "/github.png";
import vscodeLogo from "/vscode.png";
import figmaLogo from "/figma.png";
import netlifyLogo from "/netlify.png";

import nodejsLogo from "/nodejs.png";
import expressjsLogo from "/express.png";
import postmanLogo from "/postman.png";
import vercelLogo from "/vercel.png";
import mongodbLogo from "/mongodb.png";
import firebaseLogo from "/firebase.png";

const SkillsSection = () => {
  return (
<div id="skills" className="text-center mt-40">
      <h1 className="text-3xl font-bold underline decoration-blue-500 decoration-4 mb-10">
        SKILLS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="bg-base-300 p-5 ">
            <h1 className="mb-5 font-bold text-xl">Frontend</h1>
            <div className="gap-5 grid grid-cols-4 rounded-xl">
              <div>
                <img className="w-16" src={htmlLogo} alt="" />
                <p>HTML5</p>
              </div>
              <div>
                <img className="w-16" src={cssLogo} alt="" />
                <p>CSS3</p>
              </div>
              <div>
                <img className="w-16" src={javascriptLogo} alt="" />
                <p>JavaScript</p>
              </div>
              <div>
                <img className="w-16" src={reactjsLogo} alt="" />
                <p>React</p>
              </div>
              <div>
                <img className="w-16" src={tailwindcssLogo} alt="" />
                <p>Tailwind CSS</p>
              </div>
              <div>
                <img className="w-16" src={bootstrapLogo} alt="" />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </Tilt>
        {/* 2 */}
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="bg-base-300 p-5 ">
            <h1 className="mb-5 font-bold text-xl">Backend</h1>
            <div className="gap-5 grid grid-cols-4 rounded-xl">
              <div>
                <img className="w-16" src={nodejsLogo} alt="" />
                <p>Node JS</p>
              </div>
              <div>
                <img className="w-16" src={expressjsLogo} alt="" />
                <p>Express JS</p>
              </div>
              <div>
                <img className="w-16" src={postmanLogo} alt="" />
                <p>Postman</p>
              </div>

              <div>
                <img className="w-16" src={mongodbLogo} alt="" />
                <p>MongoDB</p>
              </div>
              <div>
                <img className="w-16" src={firebaseLogo} alt="" />
                <p>Firebase</p>
              </div>
              <div>
                <img className="w-16" src={vercelLogo} alt="" />
                <p>Vercel</p>
              </div>
            </div>
          </div>
        </Tilt>
        {/* 3 card */}
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="bg-base-300 p-5 ">
            <h1 className="mb-5 font-bold text-xl">Tools</h1>
            <div className="gap-5 grid grid-cols-4 rounded-xl">
              <div>
                <img className="w-16" src={githubLogo} alt="" />
                <p>GitHub</p>
              </div>
              <div>
                <img className="w-16" src={vscodeLogo} alt="" />
                <p>VS Code</p>
              </div>
              <div>
                <img className="w-16" src={figmaLogo} alt="" />
                <p>Figma</p>
              </div>
              <div>
                <img className="w-16" src={netlifyLogo} alt="" />
                <p>Netlify</p>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default SkillsSection;
