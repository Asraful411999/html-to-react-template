import React from "react";
const Contact = ()=>{
    return(
        <div>      
            <section class="contact_section layout_padding">
                <div class="container">
                <div class="heading_container">
                    <h2>
                    Contact Us
                    </h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" class="message-box" placeholder="Message" />
                            </div>
                            <div class="d-flex ">
                            <button>
                                SEND
                            </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="map_container">
                            <div class="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: '0' }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;