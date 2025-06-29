import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className=" text-left mt-40 ">
      <h2 className="text-4xl font-bold text-center underline decoration-blue-500 decoration-4 mb-8">
        About Me
      </h2>

      <div className="bg-base-300 p-10 rounded-xl">
        <p className="mb-6 text-lg leading-relaxed">
          Hi, I'm <strong>Mohaimenul Islam</strong>. My journey into programming
          began with curiosity and a stubborn desire to understand how things
          really work under the hood. It started during my high school days when
          I stumbled across HTML and CSS while trying to customize a blog theme.
          I had no idea back then that those small tweaks would snowball into a
          deep passion for front-end development and web technology.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Today,: I’m a <strong>frontend web developer</strong>
          skills in{" "}
          <span className="text-blue-600 font-semibold">
            React.js, TailwindCSS, JavaScript
          </span>
          , with a growing knowledge of backend tools like
          <span className="text-blue-600 font-semibold">
            Node.js and MongoDB
          </span>
          . I enjoy coding.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">
           What I Love Building
        </h3>
        <ul className="list-disc ml-6 mb-6 text-lg leading-relaxed">
          <li>Turning design ideas into real, pixel-perfect interfaces.</li>
          <li>Solving tricky UI/UX challenges in creative ways.</li>

          <li>
             Playing video games—especially immersive story-driven ones.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4"> My Mindset</h3>
        <p className="text-lg leading-relaxed">
          I’m someone who believes in <strong>continuous growth</strong>,{" "}
          <strong>patience</strong>, and <strong>staying curious</strong>. I
          treat every project—big or small—as an opportunity to learn, improve,
          and push my limits. I love connecting with like-minded creators, and
          I’m always up for collaboration or sharing what I know.
        </p>

        <p className="mt-6 text-lg leading-relaxed">
          If you’re looking for a developer who’s <strong>passionate</strong>,{" "}
          <strong>resourceful</strong>, and loves turning ideas into beautiful
          code—well, hi again 👋 Let's build something awesome.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
