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


function App() {

  return (
    <div className="App bg-gradient-to-b from-blue-100 to-purple-100 font-sans">
      <Hero className="animate-me" />
      <FirstProject/>
      <Project id="2" name="SaladBowl" imageLong={tree} imageMid={treeMid} imageWide={treeWide} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, gravida neque massa bibendum erat laoreet ornare vitae elementum. Diam porta massa in eget sed congue pretium at arcu. Scelerisque etiam tristique pulvinar dui eleifend praesent mi mi. Eu mauris quam vel condimentum egestas habitant malesuada vitae diam."/>
      <Project id="3" left={true} name="SaladBowl" imageLong={tree} imageMid={treeMid} imageWide={treeWide} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, gravida neque massa bibendum erat laoreet ornare vitae elementum. Diam porta massa in eget sed congue pretium at arcu. Scelerisque etiam tristique pulvinar dui eleifend praesent mi mi. Eu mauris quam vel condimentum egestas habitant malesuada vitae diam."/>
      <AboutMe body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, gravida neque massa bibendum erat laoreet ornare vitae elementum. Diam porta massa in eget sed congue pretium at arcu. Scelerisque etiam tristique pulvinar dui eleifend praesent mi mi. Eu mauris quam vel condimentum egestas habitant malesuada vitae diam." />
    </div>
  );
}

export default App;
