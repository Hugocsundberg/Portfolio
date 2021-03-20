import React from 'react';
import Project from './Project';
import leafs from './leaf.jpeg'
import tree from './tree.png'
import treeWide from './treeWide.png'
import treeMid from './treeMid.png'
import speedFeedLong from './ProjectImages/speed_feed_long.jpg'
import speedFeedWide from './ProjectImages/speed_feed_wide.jpg'
import speedFeedMid from './ProjectImages/speed_feed_mid.jpg'

const FirstProject = () => {
    return (
        <div className="bg-gradient-to-b gradient-top">
            <h2 id="projectSection" className=" mb-8 ml-8 md:md-12 md:ml-12 text-5xl md:text-6xl font-bold">Projects.</h2>
            <Project id="1" link="" github="" imageLong={speedFeedLong} imageMid={speedFeedMid} imageWide={speedFeedWide} name="WORKHARD" left={true} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, gravida neque massa bibendum erat laoreet ornare vitae elementum. Diam porta massa in eget sed congue pretium at arcu. Scelerisque etiam tristique pulvinar dui eleifend praesent mi mi. Eu mauris quam vel condimentum egestas habitant malesuada vitae diam." />
        </div>
    );
}

export default FirstProject;
