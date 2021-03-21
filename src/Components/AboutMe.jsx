import React from 'react';
import profile from './profile.jpg'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const AboutMe = (props) => {
    return (
        <div className="pb-16">
            <h2 id="aboutMe" className=" mb-8 ml-8 sm:ml-12 text-5xl md:text-6xl font-bold">{props.headline}</h2>
            <img className="rounded-3xl ml-8 sm:ml-12 w-64" src={profile} alt=""/>
            <div className="md:max-w-xl ml-16 mr-8 -mt-8 sm:ml-24 sm:mr-12 rounded-3xl bg-white bg-opacity-70 bd-blur p-8 md:p-12 ">
                <h3 className="text-3xl md:text-4xl mb-4 font-bold">Hugo Sundberg</h3>
                <p className="pb-8">{props.body}</p>
                <div className={`flex flex-row items-center mb-4 ${props.github ? "" : "hidden"}`}>
                    <FaGithub size="1.7rem" />
                    <a target="_blank" rel="noreferrer noopener" className={`underline ml-4 mt-1`} href={props.github}>{props.bodyGithub}</a>
                </div>
                <div className={`flex flex-row items-center mb-4 ${props.github ? "" : "hidden"}`}>
                    <FaLinkedin size="1.7rem" />
                    <a target="_blank" rel="noreferrer noopener" className={`underline ml-4 mt-1`} href={props.linkedin}>{props.bodyLinkedin}</a>
                </div>
                <div className={`flex flex-row items-center mb-4 ${props.github ? "" : "hidden"}`}>
                    <FaFileAlt size="1.7rem" />
                    <a target="_blank" rel="noreferrer noopener" className={`underline ml-4 mt-1`} href={props.cv}>{props.bodyCv}</a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
