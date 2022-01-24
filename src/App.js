import React from "react";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Speed Feed
import speedFeedLong from "./Components/ProjectImages/speed_feed_long.jpg";
import speedFeedWide from "./Components/ProjectImages/speed_feed_wide.jpg";
import speedFeedMid from "./Components/ProjectImages/speed_feed_mid.jpg";

//Marinasatelje
import marinasateljeLong from "./Components/ProjectImages/marinasatelje_long.png";
import marinasateljeWide from "./Components/ProjectImages/marinasatelje_wide.png";
import marinasateljeMid from "./Components/ProjectImages/marinasatelje_mid.png";
//Feather
import featherLong from "./Components/ProjectImages/feather_long.jpg";
import featherWide from "./Components/ProjectImages/feather_wide.jpg";
import featherMid from "./Components/ProjectImages/feather_mid.jpg";
// //this
import thisLong from "./Components/ProjectImages/this_long.jpeg";
import thisWide from "./Components/ProjectImages/this_wide.jpeg";
import thisMid from "./Components/ProjectImages/this_mid.jpeg";

function App() {
  return (
    <div className="w-full h-full overflow-x-hidden App bg-gradient-to-b from-blue-100 to-purple-100 font-sans">
      <Router>
        <Switch>
          <Route path="/sv">
            <Hero bodyProj="Projekt" bodyAbout="Om mig" />
            <div className="bg-gradient-to-b gradient-top">
              <h2
                id="projectSection"
                className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold"
              >
                Projekt.
              </h2>
              <Project
                siteLinkCopy="Kolla in sidan"
                gitLinkCopy="Eller besök github-repot"
                link="https://marinas-atelje-demo.vercel.app/"
                github="https://github.com/Hugocsundberg/Next_Blogg_e-handel"
                id="1"
                name="Marinas ateljé"
                imageLong={marinasateljeLong}
                imageMid={marinasateljeMid}
                imageWide={marinasateljeWide}
                body="Marinas Ateljé är mitt examensarbete som jag byggde till min mormor som målar och säljer tavlor som hobbyverksamhet. Projektet är en blogg och ehandel byggd i NextJS med Typescript, sanity CSM och Klarna som betalningssystem. Sidan har stöd för reservering av tavlor, lazy loading av inlägg och observerar ett RXJS-objekt för att uppdatera tavlor direkt när de blir reserverade av en annan klient. Sidan används skarpt i nuläget utan klarna aktiverat p.g.a. att bolag först behöver skapas. Länken leder till en branch av sidan med Klarna aktiverat i 'Test drive'. "
              />
              <Project
                siteLinkCopy="Kolla in sidan"
                gitLinkCopy="Eller besök github-repot"
                link="https://speed-feed.herokuapp.com/"
                github="https://github.com/Hugocsundberg/Speed-Feed_Social_Network"
                id="2"
                imageLong={speedFeedLong}
                imageMid={speedFeedMid}
                imageWide={speedFeedWide}
                name="Speed Feed"
                left={true}
                body="Speed Feed är ett socialt nätverk designat och skapat av mig med native PHP, JS och CSS. Projektet är hostat på Heroku med en Postgres databas."
              />
            </div>
            <Project
              siteLinkCopy="Kolla in sidan"
              gitLinkCopy="Eller besök github-repot"
              link="https://featherweather.netlify.app/"
              github="https://github.com/Hugocsundberg/Feather_Weather"
              id="3"
              left={false}
              name="Feather Weather"
              imageLong={featherLong}
              imageMid={featherMid}
              imageWide={featherWide}
              body="Feather är en väderapp byggd med react och stylad med styled components. Appen använder sig av Openweathermaps API och är byggd för att kunna användas som en PWA och installeras på enheten."
            />
            <Project
              siteLinkCopy=""
              gitLinkCopy="Besök github-repot"
              link=""
              github="https://github.com/Hugocsundberg/portfolio_react_tailwind"
              id="4"
              left={true}
              name=".this"
              imageLong={thisLong}
              imageMid={thisMid}
              imageWide={thisWide}
              body="Den här portfolion är byggd i react och stylad med hjälp av Tailwindcss. Textanimationen i topp-sektionen är gjord i anime.js. Parallax effekten är byggd med react hooks, 'scroll' eventlisteners och intersection observer API"
            />
            <AboutMe
              headline="Om mig"
              github="https://github.com/Hugocsundberg"
              bodyGithub="Kolla in min github för fler projekt"
              linkedin="https://www.linkedin.com/in/hugosundberg/"
              bodyLinkedin="Min LinkedIn profil"
              cv="https://hugosundbergcv.netlify.app/"
              bodyCv="CV"
              body="Hej, Jag är 25 år och studerar webbutveckling på Yrgo. Jag har tidigare studerat och arbetat som produktionsledare på ett webbutvecklings-bolag i Göteborg. Efter några år av att befinna mig inom IT- och webbsfären så kan jag inte se mig arbeta inom någon annan bransch. När jag inte programmerar så gillar jag att träna och spela disc-golf. Jag har ett stort intresse för design och UX och anser att bra design och UX är ett måste för att bra funktionalitet ska kunna leverera värde."
            />
          </Route>
          <Route exact path={"/en" | "/"}>
            <Hero bodyProj="Projects" bodyAbout="About me" />
            <div className="bg-gradient-to-b gradient-top">
              <h2
                id="projectSection"
                className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold"
              >
                Projects.
              </h2>
              <Project
                siteLinkCopy="Visit the site"
                gitLinkCopy="Or check out the github repository"
                link="https://marinas-atelje-demo.vercel.app/"
                github="https://github.com/Hugocsundberg/Next_Blogg_e-handel"
                id="1"
                name="Marinas ateljé"
                imageLong={marinasateljeLong}
                imageMid={marinasateljeMid}
                imageWide={marinasateljeWide}
                body="Marina's Ateljé is my graduation thesis that I built for my grandmother who paints and sells paintings as a hobby. The project is a blog and e-commerce built in NextJS with Typescript, sanity CSM and Klarna as payment system. The site supports reservation of paintings, lazy loading of posts and observes an RXJS object to update paintings immediately when they are reserved by another client. The page is used live at the moment without Klarna activated due to that a company needs to be created first. The link leads to a branch of the page with Klarna activated in 'Test drive'."
              />
              <Project
                siteLinkCopy="Visit the site"
                gitLinkCopy="Or check out the github repository"
                link="https://speed-feed.herokuapp.com/"
                github="https://github.com/Hugocsundberg/Speed-Feed_Social_Network"
                id="2"
                imageLong={speedFeedLong}
                imageMid={speedFeedMid}
                imageWide={speedFeedWide}
                name="Speed Feed"
                left={true}
                body="Speed Feed is a social network designed and created by myself with native PHP, JS and CSS. The project is hosted on Heroku with a Postgres database."
              />
            </div>
            <Project
              siteLinkCopy="Visit the site"
              gitLinkCopy="Or check out the github repository"
              link="https://featherweather.netlify.app/"
              github="https://github.com/Hugocsundberg/Feather_Weather"
              id="3"
              left={false}
              name="Feather Weather"
              imageLong={featherLong}
              imageMid={featherMid}
              imageWide={featherWide}
              body="Feather is a weather app built with react and styled with style components. The app uses Openweathermap’s API and is built to be used as a PWA and installed on the device."
            />
            <Project
              siteLinkCopy=""
              gitLinkCopy="Check out the github repository"
              link=""
              github="https://github.com/Hugocsundberg/portfolio_react_tailwind"
              id="4"
              left={true}
              name=".this"
              imageLong={thisLong}
              imageMid={thisMid}
              imageWide={thisWide}
              body="This portfolio is built with react and styled using Tailwindcss. Text animation on the top section is made with anime.js. The parallax effect is built using react hooks, 'scroll' eventlisteners and intersection observer API."
            />
            <AboutMe
              headline="About me"
              github="https://github.com/Hugocsundberg"
              bodyGithub="Check out my github for more projects"
              linkedin="https://www.linkedin.com/in/hugosundberg/"
              bodyLinkedin="My LinkedIn profile"
              cv="https://hugosundbergcv.netlify.app/?lang=en"
              bodyCv="Resume"
              body="Hi, I'm 25 years old and is currently studying fullstack web development at Yrgo. I have previously studied and worked as production leader at a web development firm in Gothenburg. After a couple years of being in the IT and web sphere i can't see myself working in another field. Beyond programming I enjoy spending time at the gym or playing disc golf. I have a big interest for design and UX and believe that a good design and UX is mandatory for good functionality to deliver value."
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
