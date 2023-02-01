import "./mainpage.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


function MainPage() {
  // return (
  //   <div className="px-4 py-5 my-5 text-center">
  //     <h1 className="display-5 fw-bold">CarCar</h1>
  //     <div className="col-lg-6 mx-auto">
  //       <p className="lead mb-4">
  //         The premiere solution for automobile dealership
  //         management!
  //       </p>
  //     </div>
  //   </div>
  // );
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/1670957.jpg')",
          height: 750,
          backgroundPosition: "30% 70%",
          backgroundSize: "cover"
          // backgroundRepeat: "no-repeat"
        }}
      >
        {/* <div
        className='mask'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}> */}
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              <h1 className='mb-3'><img src="./cartune_logo.png" alt="CarTune Logo"/></h1>
              <h4 className='mb-3'><img src="./solid_slogan.png" alt="CarTune Slogan" width="400px"/></h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <br></br>
          <p class="fs-2 fw-bold text-center">Welcome to CarTune</p>
          <p class="text-center">Tune in to your next favorite car where we service and sell premium automobiles.</p>
          <br></br>
        </div>
        <div className="container-2">
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol>
              <MDBCard>
              <MDBCarousel showControls fade>
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={1}
                  src='https://www.cyberleadinc.com/wp-content/uploads/2019/01/Auto-Salesman-Training.jpeg'
                  alt='...'
                />
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={2}
                  src='https://www.thebalancemoney.com/thmb/IPHh3p7BKzF2xQqRmdESQTs2Mzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/car-saleswoman-showing-to-male-customer-car-performance-on-tablet-1284963732-dd46e48a4c31401984bb33457aaea313.jpg'
                  alt='...'
                />
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={3}
                  src='https://images.unsplash.com/photo-1560250084-db7634c63f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80'
                  alt='...'
                />
              </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Sales</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </MDBCardText>
                  {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                  <button className="btn btn-primary">Create</button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                  <MDBCarousel showControls fade>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={1}
                      src='https://images.unsplash.com/photo-1632823471565-1ecf94f8799a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={2}
                      src='https://images.unsplash.com/photo-1652987086612-d948b775d358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={3}
                      src='https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      alt='...'
                    />
                  </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Services</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </MDBCardText>
                  <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                  <MDBCarousel showControls fade>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={1}
                      src='https://mdbootstrap.com/img/new/slides/041.jpg'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={2}
                      src='https://mdbootstrap.com/img/new/slides/042.jpg'
                      alt='...'
                    />
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={3}
                      src='https://mdbootstrap.com/img/new/slides/043.jpg'
                      alt='...'
                    />
                  </MDBCarousel>
                <MDBCardBody>
                  <MDBCardTitle>Services</MDBCardTitle>
                  <MDBCardText>
                    With supporting text below as a natural lead-in to additional content.
                  </MDBCardText>
                  <MDBBtn href='#'>Go somewhere</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
        <br></br>
        <section className="container">
        {/* <!-- title --> */}
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* <!-- review --> */}
        <article className="review">
          <div className="img-container">
            <img src="https://www.yourtango.com/sites/default/files/styles/header_slider/public/image_blog/7-year-cycle.jpg?itok=AxoJqMrp" id="person-img" alt="" />
          </div>
          <h4 id="author">Robin Frost</h4>
          <p id="job">Reporter</p>
          <p id="info">
            "The CarTune team went above and beyond in getting me a great
            deal on my dream car. The professional staff and quality care for
            me and my car has made me a lifelong customer. I highly
            reccomend this establishment for all your car's needs!"
          </p>
          {/* <!-- prev next buttons--> */}
          <div className="button-container">
            <button className="prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          {/* <!-- random button --> */}
          <button className="random-btn">Sign Up</button>
        </article>
      </section>
      <br></br>
      <br></br>
      <br></br>
      {/* </div> */}
    </header>

  );
}

export default MainPage;
