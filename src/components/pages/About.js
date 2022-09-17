import React from 'react';
import '../../assets/css/style3.css'
import profilepic from '../../assets/img/profilepic.jpg'

function About() {
    return (
        <>

            <section id="about-me">
                <aside>
                    <img src= {profilepic} alt="profile picture" />
                </aside>
                <section class="column">
                    <h2>About Me</h2>
                    <p>
                        I graduated in 2019 with Bachelor's Degree in BioResource Science Engineering from the University of Washington. BioResource Science & Engineering has similar fundamentals with Chemical Engineering field, but provide more emphasis on biofuel and pulp & paper production.
                        After graduation, I am hired on as a manufacturing/mechanical engineer (unrelated to my degree) in a test device manufacturing company in greater Seattle area.
                        My work responsibilites include but not limited to troubleshooting production issues, initiate drawing updates, and optimizing processes in production setting.
                        However, due to recent supply chain issues, i have been tasked to take on more of an electrical engineer's responsibilites such as - qualifying cable harnesses, wires, and connectors.
                    </p>
                    <p>
                        During my last quarter in the UW, I took coding class and realized that I have interest in the tech industry. After 2 years working full time as a manufacturing/electrical engineer, it's time for me to learn new skills by joining UW coding bootcamp with the goal of being an all-rounder engineer and see whether this new field can be a new career path for me.
                    </p>
                </section>
            </section>

        </>
    )
}
export default About;