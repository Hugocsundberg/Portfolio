import React from 'react';
import AboutMe from './Components/AboutMe';
import FirstProject from './Components/FirstProject';
import Hero from './Components/Hero';
import MoveShape from './Components/MoveShape';
import Project from './Components/Project';
import leafs from './Components/leaf.jpeg'
import tree from './Components/tree.png'
import treeWide from './Components/treeWide.png'
import treeMid from './Components/treeMid.png'

//FilmHelg
import filmHelgLong from './Components/ProjectImages/filmhelg_long.jpg'
import filmHelgWide from './Components/ProjectImages/filmhelg_wide.jpg'
import filmHelgMid from './Components/ProjectImages/filmhelg_mid.jpg'
// //this
import thisLong from './Components/ProjectImages/this_long.jpeg'
import thisWide from './Components/ProjectImages/this_wide.jpeg'
import thisMid from './Components/ProjectImages/this_mid.jpeg'


function App() {

  return (
    <div className="App bg-gradient-to-b from-blue-100 to-purple-100 font-sans">
      <Hero className="animate-me" />
      <FirstProject/>
      <Project link="https://filmhelg.netlify.app/" github="https://github.com/Hugocsundberg/FilmHelg_Tailwind" id="2" name="Filmhelg" imageLong={filmHelgLong} imageMid={filmHelgMid} imageWide={filmHelgWide} body="School project together with class 'informationsproduktion' (IP). Assignment was to create an imaginary event-page for an existing company. (Filmstaden in our case) The project uses Tailwind for styling and browserify, postCSS and a costum html-minifier for bundling and minification. The site is live on netlify: https://filmhelg.netlify.app"/>
      <Project link="" github="https://github.com/Hugocsundberg/portfolio_react_tailwind" id="3" left={true} name=".this" imageLong={thisLong} imageMid={thisMid} imageWide={thisWide} body="This portfolio is built with react and styled using Tailwindcss. Text animation on the top section is made with anime.js. The parallax effect is built using react hooks, 'scroll' eventlisteners and intersection observer API."/>
      <AboutMe github="https://github.com/Hugocsundberg" body="Hi, I'm 25 years old and is studying fullstack web development at Yrgo. I'm a technology nerd and have previous experience of production management in web development. After a couple years of being in the IT and webb sphere i can't see myself working in another field. Beyond programming I enjoy spending time at the gym or playing disc golf. I have a big interest for design and UX and believe that a good design and UX is mandatory for good functionality to deliver value." />
    </div>
  );
}

export default App;
