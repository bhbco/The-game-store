import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {
    return (

        <div class="container mt-5">
            <div class="row">
                <div class="col-9 p-5">
                    {/* create carousel */}
                    <Carousel id="carouselExampleAutoplaying" interval={3000} pause="hover" className=" mx-auto mt-3" style={{ borderRadius: "10px", width: "70%" }}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpapers.com/images/hd/person-writing-an-email-c4wdu2f5p13e7d7j.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>

                                <p>We love hearing from you! Drop us a line today.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://rahulogy.com/wp-content/uploads/2022/07/B2B-email-marketing-1536x864.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>

                                <p>We are here to make your game experience better.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://img.freepik.com/premium-photo/email-marketing-newsletter-concept_488220-17964.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>

                                <p>Support team is available 24/7.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

                <div class="col-3 pt-5">
                    {/* form  */}
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white">First Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1"></input>
                        </div>

                        <div class="mb-3">

                            <label for="exampleInputEmail1" class="form-label text-white">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                        </div>
                        <label for="floatingTextarea" class="form-label text-white">Describe your issue</label>
                        <div class="form-floating mb-3">

                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default Contact;
