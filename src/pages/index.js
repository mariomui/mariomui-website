import React from 'react'
// import { Link } from 'gatsby'
// import Helmet from 'react-helmet'
import Helm from '../components/Helm'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import pic01 from '../assets/images/pic04.jpg'
import pic02 from '../assets/images/hackGroup.jpg'
import pic03 from '../assets/images/teamClariSign.jpg'
import pic04 from '../assets/images/personalCasual.jpg'
import pic05 from '../assets/images/personalCasual.jpg'
import pic06 from '../assets/images/pic03.jpg'
import FrontEndIconList from '../components/FrontEndIconList'
import BackEndIconList from '../components/BackEndIconList'
import DeployIconList from '../components/DeployIconList'

let r = {
    pic01, pic02, pic03, pic04, pic05, pic06
}
class HomeIndex extends React.Component {
    randomNum = (max, min) => {
        return 'pic0' + (Math.floor(Math.random() * (max - 0)) + min);
    }
    render() {


        return (
            <Layout>
                <Helm ></Helm>

                <Banner />

                <div id="main">
                    <section id="one" className="demo-darken-shared">
                        <article style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${r[this.randomNum(6, 1)]}) center no-repeat`,
                            backgroundSize: 'cover'
                        }}>
                            <header className="major">
                                <h3>"Tell me why of the Day!"</h3>
                                <p>"You can't use axios inside of Service Workers"</p>
                            </header>
                        </article>
                    </section>

                    <section id="aboutMe" className="demo-darken-shared">
                        <div className="inner">
                            <article style={{
                                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${r[this.randomNum(6, 1)]}) center no-repeat`,
                                backgroundSize: 'cover'
                            }}>

                                <header className="major">
                                    <h2>About Me</h2>
                                </header>
                                <div className="button next">Slide Down</div>
                                <FrontEndIconList className="slider" /><BackEndIconList className="slider" /><DeployIconList />
                                <ul className="actions">
                                </ul>
                            </article>
                        </div>
                    </section>
                    <section id="three">
                        <div className="inner">
                            <header className="major">
                                <h2>Projects</h2>
                            </header>
                            {/* When i have time, a graphQL way to do blogposts woudl be nice. */}
                            1. Reddit Webscraper
                            2. We BNB hospitality frontend (proxing microservices)
                            3. BNB Backend horizontally scaling using nginx.
                            4. Clarisign App (2nd Place Overall Dev Week 2019 out 150 teams)
                            5  LOCO (Blockchain Microlending App 2nd place 2018)
                            <ul className="actions">
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout >
        )
    }
}

export default HomeIndex