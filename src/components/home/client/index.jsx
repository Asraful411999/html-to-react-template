import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel';

const Client = ()=>{
  const extra = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
  }
  return(
    <div>
    <section className="client_section ">
        <div className="container">
            <div className="heading_container heading_center">
              <h2>
                What Our Clients Say
              </h2>
            </div>
            <div className="carousel-wrap layout_padding2-top ">
              <OwlCarousel className="owl-carousel" {...extra}>
                <div className="item">
                  <div className="box">
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-1.jpg" alt="client-1" />
                      </div>
                      <div className="client_detail">
                        <div className="client_info">
                          <h6>
                            Jorch morik
                          </h6>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="client_text">
                      <p>
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-2.jpg" alt="client-2" />
                      </div>
                      <div className="client_detail">
                        <div className="client_info">
                          <h6>
                            Jorch morik
                          </h6>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="client_text">
                      <p>
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-1.jpg" alt="client-1" />
                      </div>
                      <div className="client_detail">
                        <div className="client_info">
                          <h6>
                            Jorch morik
                          </h6>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="client_text">
                      <p>
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box">
                    <div className="client_id">
                      <div className="img-box">
                        <img src="images/client-2.jpg" alt="client-2" />
                      </div>
                      <div className="client_detail">
                        <div className="client_info">
                          <h6>
                            Jorch morik
                          </h6>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="client_text">
                      <p>
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Client;
