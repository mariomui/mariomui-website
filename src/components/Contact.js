import React from 'react'
import AWS from 'aws-sdk'


const SES = new AWS.SES()
class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    sendData = (formData, callback) => {
        const emailParams = {
            Source: 'yi.kan.mui@gmail.com', // SES SENDING EMAIL
            ReplyToAddresses: [formData.email],
            Destination: {
                ToAddresses: ['yi.kan.mui@gmail.com'], // SES RECEIVING EMAIL
            },
            Message: {
                Body: {
                    Text: {
                        Charset: 'UTF-8',
                        Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`,
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'New message from your_site.com',
                },
            },
        }

        SES.sendEmail(emailParams, callback);
    }



    handleSendForm = (e) => {
        e.preventDefault()
        const { name, email, message } = this.state;
        let form = {
            name, email, message
        }
        this.sendData(form, (err, receipt) => {
            if (err) {
                console.log(err);
            } else {
                console.log(receipt)
            }
        })
    }
    handleFormInput = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {

        return (
            <section id="contact">
                <div className="inner">
                    <section>
                        <form data-netlify="true" netlify-honeypot="bot-field" method="post" onSubmit={this.handleSendForm}>
                            <div className="field half first">
                                <label htmlFor="name">Name</label>
                                <input type="text" onChange={this.handleFormInput} name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={this.handleFormInput} name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea onChange={this.handleFormInput} name="message" id="message" rows="6"></textarea>
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
