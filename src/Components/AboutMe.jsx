import React from 'react';
import profile from './profile.jpg'
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from "react-icons/md";

const AboutMe = (props) => {
    return (
        <div className="pb-16">
            <h2 id="aboutMe" className=" mb-8 ml-8 sm:ml-12 text-5xl md:text-6xl font-bold">About Me.</h2>
            <img className="rounded-3xl ml-8 sm:ml-12 w-64" src={profile} alt=""/>
            <div className="md:max-w-xl ml-16 mr-8 -mt-8 sm:ml-24 sm:mr-12 rounded-3xl bg-white bg-opacity-70 bd-blur p-8 md:p-12 ">
                <h3 className="text-3xl md:text-4xl mb-4 font-bold">Hugo Sundberg</h3>
                <p className="pb-8">{props.body}</p>
                <div className={`flex flex-row items-center ${props.github ? "" : "hidden"}`}>
                    <FaGithub size="1.7rem" />
                    <a className={`underline ml-4 mt-1`} href={props.github}>Check out my github for more projects.</a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
