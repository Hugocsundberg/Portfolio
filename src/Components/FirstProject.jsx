import React from 'react';
import Project from './Project';
import speedFeedLong from './ProjectImages/speed_feed_long.jpg'
import speedFeedWide from './ProjectImages/speed_feed_wide.jpg'
import speedFeedMid from './ProjectImages/speed_feed_mid.jpg'

const FirstProject = () => {
    return (
        <div className="bg-gradient-to-b gradient-top">
            <h2 id="projectSection" className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold">Projects.</h2>
            <Project link="https://speed-feed.herokuapp.com/" github="https://github.com/Hugocsundberg/Speed-Feed_Social_Network" id="1" imageLong={speedFeedLong} imageMid={speedFeedMid} imageWide={speedFeedWide} name="Speed Feed" left={true} body="Speed Feed is a social network designed and created by myself with native PHP, JS and CSS.The project is hosted on Heroku with a Postgres database." />
        </div>
    );
}

export default FirstProject;
