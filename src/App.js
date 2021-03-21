import React from 'react';
import AboutMe from './Components/AboutMe';
import Hero from './Components/Hero';
import Project from './Components/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Speed Feed
import speedFeedLong from './Components/ProjectImages/speed_feed_long.jpg'
import speedFeedWide from './Components/ProjectImages/speed_feed_wide.jpg'
import speedFeedMid from './Components/ProjectImages/speed_feed_mid.jpg'

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
      <Router>
        <Switch>
          <Route path="/en">
            <div className="bg-gradient-to-b gradient-top">
              <h2 id="projectSection" className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold">Projects.</h2>
              <Project link="https://speed-feed.herokuapp.com/" github="https://github.com/Hugocsundberg/Speed-Feed_Social_Network" id="1" imageLong={speedFeedLong} imageMid={speedFeedMid} imageWide={speedFeedWide} name="Speed Feed" left={true} body="Speed Feed is a social network designed and created by myself with native PHP, JS and CSS.The project is hosted on Heroku with a Postgres database." />
            </div>
            <Project link="https://filmhelg.netlify.app/" github="https://github.com/Hugocsundberg/FilmHelg_Tailwind" id="2" name="Filmhelg" imageLong={filmHelgLong} imageMid={filmHelgMid} imageWide={filmHelgWide} body="School project together with class 'informationsproduktion' (IP). Assignment was to create an imaginary event-page for an existing company. (Filmstaden in our case) The project uses Tailwind for styling and browserify, postCSS and a costum html-minifier for bundling and minification. The site is live on netlify: https://filmhelg.netlify.app"/>
            <Project link="" github="https://github.com/Hugocsundberg/portfolio_react_tailwind" id="3" left={true} name=".this" imageLong={thisLong} imageMid={thisMid} imageWide={thisWide} body="This portfolio is built with react and styled using Tailwindcss. Text animation on the top section is made with anime.js. The parallax effect is built using react hooks, 'scroll' eventlisteners and intersection observer API."/>
            <AboutMe github="https://github.com/Hugocsundberg" body="Hi, I'm 25 years old and is studying fullstack web development at Yrgo. I'm a technology nerd and have previous experience of production management in web development. After a couple years of being in the IT and webb sphere i can't see myself working in another field. Beyond programming I enjoy spending time at the gym or playing disc golf. I have a big interest for design and UX and believe that a good design and UX is mandatory for good functionality to deliver value." />
          </Route>
          <Route path="/sv">
            <div className="bg-gradient-to-b gradient-top">
              <h2 id="projectSection" className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold">Projekt.</h2>
              <Project link="https://speed-feed.herokuapp.com/" github="https://github.com/Hugocsundberg/Speed-Feed_Social_Network" id="1" imageLong={speedFeedLong} imageMid={speedFeedMid} imageWide={speedFeedWide} name="Speed Feed" left={true} body="Speed Feed is a social network designed and created by myself with native PHP, JS and CSS.The project is hosted on Heroku with a Postgres database." />
            </div>
            <Project link="https://filmhelg.netlify.app/" github="https://github.com/Hugocsundberg/FilmHelg_Tailwind" id="2" name="Filmhelg" imageLong={filmHelgLong} imageMid={filmHelgMid} imageWide={filmHelgWide} body="School project together with class 'informationsproduktion' (IP). Assignment was to create an imaginary event-page for an existing company. (Filmstaden in our case) The project uses Tailwind for styling and browserify, postCSS and a costum html-minifier for bundling and minification. The site is live on netlify: https://filmhelg.netlify.app"/>
            <Project link="" github="https://github.com/Hugocsundberg/portfolio_react_tailwind" id="3" left={true} name=".this" imageLong={thisLong} imageMid={thisMid} imageWide={thisWide} body="This portfolio is built with react and styled using Tailwindcss. Text animation on the top section is made with anime.js. The parallax effect is built using react hooks, 'scroll' eventlisteners and intersection observer API."/>
            <AboutMe github="https://github.com/Hugocsundberg" body="Hi, I'm 25 years old and is studying fullstack web development at Yrgo. I'm a technology nerd and have previous experience of production management in web development. After a couple years of being in the IT and webb sphere i can't see myself working in another field. Beyond programming I enjoy spending time at the gym or playing disc golf. I have a big interest for design and UX and believe that a good design and UX is mandatory for good functionality to deliver value." />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
