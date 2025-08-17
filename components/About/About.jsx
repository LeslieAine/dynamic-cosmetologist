import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import { aboutData } from './AboutData';

const About = ({ jobTitle, mainTitle, firstName, skills, mainBackgrdImage, color }) => {
    const router = useRouter(); 
    const initialCounters = aboutData.skills.reduce((obj, skill) => {
        obj[skill.id] = 0;
        return obj;
    }, {});

    const [counters, setCounters] = useState({
        ...initialCounters,
        yearsOfExperience: 0,
        hoursOfWorking: 0,
        projectsDone: 0,
    });

    const targetCounters = {
        ...aboutData.skills.reduce((obj, skill) => {
            obj[skill.id] = skill.percent;
            return obj;
        }, {}),
        yearsOfExperience: aboutData.mainData.yearsOfExperience,
        hoursOfWorking: aboutData.mainData.hoursOfWorking,
        projectsDone: aboutData.mainData.projectsDone,
    };

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2400;
            const interval = 50;

            Object.keys(targetCounters).forEach((key) => {
                const increment = (targetCounters[key] / duration) * interval;

                let current = 0;
                const intervalId = setInterval(() => {
                    current += increment;
                    setCounters((prevCounters) => ({
                        ...prevCounters,
                        [key]: Math.min(Math.ceil(current), targetCounters[key]),
                    }));

                    if (current >= targetCounters[key]) {
                        clearInterval(intervalId);
                    }
                }, interval);
            });
        };

        animateCounters();
    }, []);

    useEffect(() => {
        const currentPage = window.location.href; 
        localStorage.setItem('homePage', currentPage); 
    }, []);

    return (
        <div className="section-box" id="about" style={{ border: `3px solid ${color}`, borderRadius: '0.8em' }}>

            <div className="row g-4 g-xl-5">
                <div className="col-12 col-xl-4">
                    {/* Hero Avatar */}
                    <div className="hero-avatar">
                        <img src={mainBackgrdImage} className='avatar-lg' alt="hero-avatar" placeholder="blur" />
                        <div className="hero-avatar-text">
                            <Typewriter
                                options={{
                                    strings: [`Hi There!, I\'m ${firstName}`],
                                    cursor: '_',
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 15
                                }}
                            />
                        </div>
                    </div>
                    {/* end Hero Avatar */}
                </div>
                <div className="col-12 col-xl-8">
                    <h2 className="title-heading mb-4" data-backdrop-text={aboutData.mainData.title}>{aboutData.mainData.title2}</h2>
                    <h1>{jobTitle}</h1>
                    <ul className="list-inline-pills mt-3">
                        {skills.map((skill, index) => (
                            <li key={index} style={{border: `2px dashed ${color}`}}>
                                <i className={`${skill.fontawesomeIcon} pe-2`}></i> {skill.name}
                                {/* <div className="d-inline-block font-family-mono font-small">(<span className="counter">{counters[skill.id]}</span>%)</div> */}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-1">{mainTitle}</p>
                </div>
            </div>{/* end row */}
            <div className="row g-4 mt-1">
                <div className="col-12 col-xl-4">
                    <div className="d-flex align-items-center">
                        <div className="d-inline-block">
                            <h1 className="font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{counters.yearsOfExperience}</span></h1>
                        </div>
                        <div className="d-inline-block ps-2">
                            <h4 className="line-height-100 fw-normal mb-0">+</h4>
                            <p className="mono-heading text-black">Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="d-flex align-items-center">
                        <div className="d-inline-block">
                            <h1 className="font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{counters.hoursOfWorking}</span></h1>
                        </div>
                        <div className="d-inline-block ps-2">
                            <h4 className="line-height-100 fw-normal mb-0">k</h4>
                            <p className="mono-heading text-black">Hours of Working</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="d-flex align-items-center">
                        <div className="d-inline-block">
                            <h1 className="font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{counters.projectsDone}</span></h1>
                        </div>
                        <div className="d-inline-block ps-2">
                            <h4 className="line-height-100 fw-normal mb-0">+</h4>
                            <p className="mono-heading text-black">Clients</p>
                        </div>
                    </div>
                </div>
            </div>{/* end row */}
        </div>
    )
}

export default About