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
      
      <Router>
        <Switch>
          <Route path="/sv">
          <Hero bodyProj="Projekt" bodyAbout="Om mig" />
            <div className="bg-gradient-to-b gradient-top">
              <h2 id="projectSection" className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold">Projekt.</h2>
              <Project siteLinkCopy="Kolla in sidan" gitLinkCopy="Eller besök github-repot" link="https://speed-feed.herokuapp.com/" github="https://github.com/Hugocsundberg/Speed-Feed_Social_Network" id="1" imageLong={speedFeedLong} imageMid={speedFeedMid} imageWide={speedFeedWide} name="Speed Feed" left={true} body="Speed Feed är ett socialt nätverk designat och skapat av mig, med native PHP, JS och CSS. Projektet är hostat på Heroku med en Postgres databas." />
            </div>
            <Project siteLinkCopy="Kolla in sidan" gitLinkCopy="Eller besök github-repot" link="https://filmhelg.netlify.app/" github="https://github.com/Hugocsundberg/FilmHelg_Tailwind" id="2" name="Filmhelg" imageLong={filmHelgLong} imageMid={filmHelgMid} imageWide={filmHelgWide} body="Filmhelg var ett skolprojekt tillsammans med klassen IP20 (informationsproduktion) där uppgiften var att skapa en inbjudan till ett event. Inbjudan skulle vara ett fysiskt utskick med en personifierad QR-kod ledandes till en webbsida. Sidan välkommnar den indjudna gästen med namn via en queryparameter. (?name=foo, anges inget namn defaultas namnet till Josefin.) I projektet används Tailwindcss för styling och Browserify, Postcss och en egengjord html-minifierare för minifiering och bundling."/>
            <Project siteLinkCopy="" gitLinkCopy="Besök github-repot" link="" github="https://github.com/Hugocsundberg/portfolio_react_tailwind" id="3" left={true} name=".this" imageLong={thisLong} imageMid={thisMid} imageWide={thisWide} body="Den här portfolion är byggd i react och stylad med hjälp av Tailwindcss. Textanimationen i topp-sektionen är gjord i anime.js. Parallax effekten är byggd med react hooks, 'scroll' eventlisteners och intersection observer API"/>
            <AboutMe headline="Om mig" github="https://github.com/Hugocsundberg" bodyGithub="Kolla in min github för fler projekt" linkedin="https://www.linkedin.com/in/hugosundberg/" bodyLinkedin="Min LinkedIn profil" cv="https://hugosundbergcv.netlify.app/" bodyCv="CV" body="Hej, Jag är 25 år och studerar webbutveckling på Yrgo. Jag har tidigare studerat och arbetat som produktionsledare på ett webbutvecklings-bolag i Göteborg. Efter några år av att befinna mig inom IT- och webbsfären så kan jag inte se mig arbeta inom någon annan bransch. När jag inte programmerar så gillar jag att träna och spela disc-golf. Jag har ett stort intresse för design och UX och anser att bra design och UX är ett måste för att bra funktionalitet ska kunna leverera värde." />
          </Route>
          <Route exact path={"/en" | "/"}>
          <Hero bodyProj="Projects" bodyAbout="About me" />
            <div className="bg-gradient-to-b gradient-top">
              <h2 id="projectSection" className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold">Projects.</h2>
              <Project siteLinkCopy="Visit the site" gitLinkCopy="Or check out the github repository" link="https://speed-feed.herokuapp.com/" github="https://github.com/Hugocsundberg/Speed-Feed_Social_Network" id="1" imageLong={speedFeedLong} imageMid={speedFeedMid} imageWide={speedFeedWide} name="Speed Feed" left={true} body="Speed Feed is a social network designed and created by myself with native PHP, JS and CSS. The project is hosted on Heroku with a Postgres database." />
            </div>
            <Project siteLinkCopy="Visit the site" gitLinkCopy="Or check out the github repository" link="https://filmhelg.netlify.app/" github="https://github.com/Hugocsundberg/FilmHelg_Tailwind" id="2" name="Filmhelg" imageLong={filmHelgLong} imageMid={filmHelgMid} imageWide={filmHelgWide} body="Filmhelg was a project together with class IP20 (informationsproduktion) where the task was to create an event invite. The invite were supposed to be a physical mailing with a personalized QR-code leading to a website. The website welcomes the guest by name based on a query-parameter. (?name=foo, will default to Josefin if no name is specified.) The project uses Tailwind for styling and Browserify, Postcss and a costum html-minifier for bundling and minification."/>
            <Project siteLinkCopy="" gitLinkCopy="Check out the github repository" link="" github="https://github.com/Hugocsundberg/portfolio_react_tailwind" id="3" left={true} name=".this" imageLong={thisLong} imageMid={thisMid} imageWide={thisWide} body="This portfolio is built with react and styled using Tailwindcss. Text animation on the top section is made with anime.js. The parallax effect is built using react hooks, 'scroll' eventlisteners and intersection observer API."/>
            <AboutMe headline="About me" github="https://github.com/Hugocsundberg" bodyGithub="Check out my github for more projects" linkedin="https://www.linkedin.com/in/hugosundberg/" bodyLinkedin="My LinkedIn profile" cv="https://hugosundbergcv.netlify.app/" bodyCv="Resume" body="Hi, I'm 25 years old and is currently studying fullstack web development at Yrgo. I have previously studied and worked as production leader at a web development firm in Gothenburg. After a couple years of being in the IT and web sphere i can't see myself working in another field. Beyond programming I enjoy spending time at the gym or playing disc golf. I have a big interest for design and UX and believe that a good design and UX is mandatory for good functionality to deliver value." />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
