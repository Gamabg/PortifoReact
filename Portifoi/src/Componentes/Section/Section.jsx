function Section() {
    return (
        <section className="parallax-mf footer-parallax bg-image sect-mt4 route" style={{backgroundImage: "url('img/Lap.jpg')"}}>
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                Send me a message
                                            </h5>
                                        </div>
                                        <div>
                                            <form action="" id="cf" method="post" role="form">
                                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                                <div id="errormessage"></div>
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" name="name" className="form-control"
                                                                placeholder="Your Name" data-rule="minlen:4"
                                                                data-msg="Please enter at least 4 characters" />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" name="email"
                                                                placeholder="Your Email" data-rule="email"
                                                                data-msg="Please enter a valid email" />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="subject"
                                                                placeholder="Subject" data-rule="minlen:4"
                                                                data-msg="Please enter at least 8 characters for the subject" />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <textarea className="form-control" name="message" rows="5"
                                                                data-rule="required" placeholder="Message"></textarea>
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" name="submit"
                                                            className="button button-a button-big button-rounded">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">
                                                Get in Touch
                                            </h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead">
                                                For any inquiries, do not hesitate to contact me!
                                            </p>
                                            <ul className="list-ico">
                                                <li><span className="ion-ios-location"></span>François Coty</li>
                                                <li><span className="ion-ios-telephone"></span>(11) 96606-6593</li>
                                                <li><span className="ion-email"></span> bruno.g.masseiras@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div className="socials">
                                            <ul>
                                                <li><a href='#'><span className="ico-circle"><i
                                                                className="ion-social-linkedin"></i></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">© All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Section;
