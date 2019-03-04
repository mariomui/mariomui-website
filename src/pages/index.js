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
                {/* <Helmet
                    title="Mario Mui's Website"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet> */}
                <Helm ></Helm>

                <Banner />

                <div id="main">
                    <section id="one" className="demo-darken-shared">
                        <article style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${r[this.randomNum(6, 1)]}) center no-repeat`,
                            backgroundSize: 'cover'
                        }}>
                            <header className="major">
                                <h3>Aliquam</h3>
                                <p>Ipsum dolor sit amet</p>
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
                                <p>something</p>
                                <FrontEndIconList />
                                <ul className="actions">
                                </ul>
                            </article>
                        </div>
                    </section>
                    <section id="three">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
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