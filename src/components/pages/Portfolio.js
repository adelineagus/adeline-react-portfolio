import React from 'react';
import '../../assets/css/style3.css'
import profilepic from '../../assets/img/profilepic.jpg'
import cityscan from '../../assets/img/cityscan.png'
import collectivecup from '../../assets/img/collectivecup.png'
import dailyplanner from '../../assets/img/dailyplanner.png'
import notetaker from '../../assets/img/notetaker.png'
import techblog from '../../assets/img/techblog.png'
import weatherapp from '../../assets/img/weatherapp.png'

function Portfolio() {
    return (
        <>
            <section id="work-apps">
                <h2>Applications</h2>
                <section id="small-apps">
                    <section class= "apps">
                        <p>City Scanner</p>
                        <div class="link-parent">
                        <div class= "link-position">
                        <a href= "https://sscroggs11.github.io/Project-1/">Deployed</a>
                        </div>
                        <div class= "link-position">
                        <a href= "https://github.com/sscroggs11/Project-1">Github</a>
                        </div>
                        </div>
                        <a href="https://sscroggs11.github.io/Project-1"><img src={cityscan} alt="tech" /></a>
                    </section>
                    <section class= "apps">
                        <p>Collective Cup</p>
                        <div class="link-parent">
                        <div class= "link-position">
                        <a href= "https://collective-cup.herokuapp.com/">Deployed</a>
                        </div>
                        <div class= "link-position">
                        <a href= "https://github.com/jnmayhook/Project-2">Github</a>
                        </div>
                        </div>
                        <a href="https://collective-cup.herokuapp.com/"><img src={collectivecup} alt="tech" /></a>
                    </section>
                    <section class= "apps">
                        <p>Tech-Blog</p>
                        <div class="link-parent">
                        <div class= "link-position">
                        <a href= "https://adeline-techpostblog.herokuapp.com/">Deployed</a>
                        </div>
                        <div class= "link-position">
                        <a href= "https://github.com/adelineagus/tech-post-blog">Github</a>
                        </div>
                        </div>
                        <a href="https://adeline-techpostblog.herokuapp.com/"><img src={techblog} alt="tech" /></a>
                    </section>
                    <section class= "apps">
                        <p>Note-Taker</p>
                        <div class="link-parent">
                        <div class= "link-position">
                        <a href= "https://adeline-notetaker.herokuapp.com/">Deployed</a>
                        </div>
                        <div class= "link-position">
                        <a href= "https://github.com/adelineagus/my-notetaker">Github</a>
                        </div>
                        </div>
                        <a href="https://adeline-notetaker.herokuapp.com/"><img src={notetaker} alt="tech" /></a>
                    </section>
                    <section class= "apps">
                        <p>Weather App</p>
                        <div class="link-parent">
                        <div class= "link-position">
                        <a href= "https://adelineagus.github.io/weather-app/">Deployed</a>
                        </div>
                        <div class= "link-position">
                        <a href= "https://github.com/adelineagus/weather-app">Github</a>
                        </div>
                        </div>
                        <a href="https://adelineagus.github.io/weather-app/"><img src={weatherapp} alt="tech" /></a>
                    </section>
                    <section class= "apps">
                        <p>Daily Planner</p>
                        <div class="link-parent">
                        <div class= "link-position">
                        <a href= "https://adelineagus.github.io/dailyplanner/">Deployed</a>
                        </div>
                        <div class= "link-position">
                        <a href= "https://github.com/adelineagus/dailyplanner">Github</a>
                        </div>
                        </div>
                        <a href="https://adelineagus.github.io/dailyplanner/"><img src={dailyplanner} alt="tech" /></a>
                    </section>
                </section>
            </section>

        </>
    )
}

export default Portfolio;