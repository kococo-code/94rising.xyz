import React, { useEffect } from 'react';
import Layout from 'components/Layout'

const MainPage = () =>{
    /*
    const handleScroll = () =>{
        const aboutElement = document.getElementsByClassName('about')[0];
        if(typeof aboutElement === 'undefined') return;
        const vh = window.innerHeight
        if(window.pageYOffset > vh){
            aboutElement.setAttribute('style','background : #111111')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return () => { window.removeEventListener('scroll',handleScroll)}
    },[]);
    */

    return (
        <section className="mainPage">
            <Layout>
            <section className="whoami">
                    <p>I am SoftWare Enginner</p>
                    <p><span className="highlight-green">@nextLab</span> In Seoul as Frontend Enginner</p>
                    <div className="grad"></div>
            </section>
            <section className="about">
            <h1 className="title">About.</h1>

                <section className="wide">
                    <p>   
                        My name is Jintaek Lim, Front-end Engineer with less than 1 year Experience. I've got a project with Used Car Price Service and Vehicle Vision AI Product @nextLab
                    </p>
                    <p>
                        I was experience with Typescript, React, mobX, Webpack, scss, CSS-in-JS. although using python-django, docker, Postgresql
                    </p>
                
                </section>
            </section>
         
            </Layout>
        </section>
      
    )
}

export default MainPage