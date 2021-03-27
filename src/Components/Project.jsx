import React, { useEffect, useState, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from "react-icons/md";

const Project = (props) => {
    const [plxOffset, setplxOffset] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [shouldScroll, _setShouldScroll] = useState(false);
    const [scrollListenerIsSet, setscrollListenerIsSet] = useState(false);
    const [imageAspectRatio, setImageAspectRatio] = useState('long');
    const imageEl = useRef()
    const imageContainer = useRef()
    const shouldScrollRef = useRef()

    const screenSizeHandler = () => {
        if(window.innerWidth > 1000) {
            setImageAspectRatio('wide')
        } else if(window.innerWidth > 600) {
            setImageAspectRatio('mid')
        } else {
            setImageAspectRatio('long')
        }
        setImageHeight(imageEl.current.clientHeight)
        setContainerHeight(imageContainer.current.clientHeight)
    }

    const setShouldScroll = (bool) => {
        shouldScrollRef.current = bool
        _setShouldScroll(bool)
    }

    useEffect(()=>{
        screenSizeHandler()
        scrollHandler()
        
        let options = {
            rootMargin: '200px',
            threshold: [0, 0]
          }
      
        const intersectionHandler = (entry) => {
            if(entry[0].isIntersecting === true) {
                setShouldScroll(true)
                setscrollListenerIsSet(true)
                imageContainer.current.classList.add('animate-fadeIn')
                
            } else if(entry[0].isIntersecting === false) {
                setShouldScroll(false)
            }
        }
          let observer = new IntersectionObserver(intersectionHandler, options); 
          observer.observe(imageEl.current)
    }, [imageEl, imageContainer])


    const scrollHandler = () => {
        if(shouldScrollRef.current) {
            setplxOffset(((window.pageYOffset + window.innerHeight) - imageContainer.current.offsetTop) / 6)
        } 
    }

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if(i < 30) {
                i++
                screenSizeHandler()  
            }
            else {
                clearInterval(interval)
            }
        }, 70);
        setTimeout(() => {
            screenSizeHandler()
        }, 3600);
        setTimeout(() => {
            screenSizeHandler()
        }, 5000);
        setTimeout(() => {
            screenSizeHandler()
        }, 7000);
        window.addEventListener('resize', screenSizeHandler)
        window.addEventListener('orientationchange', screenSizeHandler);
    }, []);

    useEffect(() => {
        if(scrollListenerIsSet) {
            window.addEventListener('scroll', scrollHandler)
        } 
    }, [scrollListenerIsSet]);

    return (
        <div className={`${props.left ? "pr-8 sm:pr-12 md:pr-16 lg:pr-56 xl:pr-100 2xl:pr-136" : "pl-8 sm:pl-12 md:pl-16 lg:pl-56 xl:pl-100 2xl:pl-136"} mb-52 `}>
            {/* <img className={`${props.left ? "right-side-border" : "left-side-border"} object-cover h-80 sm:h-96 md:h-104 xl:h-128 w-full `} src={props.image} alt=""/> */}
            <div ref={imageContainer} className={`${props.left ? "right-side-border" : "left-side-border"} image${props.id} transition-fix overflow-hidden h-80 sm:h-96 md:h-104 xl:h-116 2xl:h-124 w-full `} >
                <img ref={imageEl} onLoad={screenSizeHandler, scrollHandler} className={` w-full relative image-child${props.id}`} style={{transform: `translate(0, ${plxOffset}px)`, top: `-${(imageHeight - containerHeight) + (containerHeight / 6)}px`}} src={imageAspectRatio === 'long' ? props.imageLong : imageAspectRatio === 'mid' ? props.imageMid : props.imageWide} alt=""/>
            </div>
                <div className={`${props.left ? "right-side-border mr-8 sm:mr-12 md:ml-12 lg:ml-16 md:rounded-3xl" : "left-side-border ml-8 sm:ml-12 md:mr-12 lg:mr-16 md:ml-auto md:rounded-3xl "} " md:max-w-xl bg-white bg-opacity-70 bd-blur p-8 md:p-12 -mt-8 "`} >
                        <h3 className="text-3xl md:text-4xl mb-8 font-bold">{props.name}</h3>
                        <p className="pb-8">{props.body}</p>
                        <div className={` mb-2 flex flex-row items-center ${props.link ? "" : "hidden"}`}>
                            <MdWeb size="1.7rem" />
                            <a target="_blank" rel="noreferrer noopener" className="ml-3 underline" href={props.link}>{props.siteLinkCopy}</a>
                        </div>
                        <div className={`flex flex-row items-center ${props.github ? "" : "hidden"}`}>
                            <FaGithub size="1.7rem" />
                            <a target="_blank" rel="noreferrer noopener"  className="underline ml-3" href={props.github}>{props.gitLinkCopy}</a>
                        </div>
                </div>
        </div>
    );
}

export default Project;
