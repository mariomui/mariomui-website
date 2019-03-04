import React from 'react'
const { AWS_API2, AWS_API } = require('../../config')
const awsVerbs = require('../../controllers')
const axios = require('axios');

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            toggleSend: false,
        }
    }

    handleFormInput = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    clear = () => {
        const findType = (thing) => {
            if (Array.isArray(thing)) {
                return 'array';
            }
            if (Object.is(thing)) {
                return 'object';
            }
            return typeof thing
        }

        const hash = {
            string: '',
            number: 0,
            array: []
        }
        for (let key in this.state) {
            this.state[key] = hash[findType(this.state[key])]
        }
        this.setState({
            toggleSend: !this.state.toggleSend
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        // let formData = JSON.stringify(this.state);
        // awsVerbs.post(AWS_API2, formData, (err, data) => {
        //     console.log(data);
        // })
        const { name, email, message } = this.state
        const payload = { name, email, message }
        awsVerbs.postData(AWS_API2, payload)
            .then((response) => {
                return response.json()
            })
            .then(data => {
                this.clear();
                console.log(data);

            })// JSON-string from `response.json()` call
            .catch(error => console.error(error));

    }

    render() {

        return (
            <section id="contact">
                <div className="inner">
                    <section>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="field half first">
                                <label htmlFor="name">Name</label>
                                <input type="text" onChange={this.handleFormInput} value={this.state.name} name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={this.handleFormInput} value={this.state.email} name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea onChange={this.handleFormInput} value={this.state.message} name="message" id="message" rows="6"></textarea>
                            </div>

                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="special" /></li>
                                <li><input type="reset" value="Clear" /></li>
                            </ul>
                        </form>
                    </section>
                    <section className="split">
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href="mariomui@yahoo.com">m a r i o m u i [at] y a h o o [dot] com</a>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-phone"></span>
                                <h3>Phone</h3>
                                <span>(650) 597-2162 </span>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-home"></span>
                                San Francisco
                    </div>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}


export default Contact
