import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='top-footer'>
        <div className="container">
          <div className="row">
            <div className="col-20">
              <a href="#">
                <img src="./img/buy-comics-digital-comics.png" alt="" />
                <span>digital comics</span>
              </a>
            </div>
            <div className="col-20">
              <a href="#">
                <img src="./img/buy-comics-merchandise.png" alt="" />
                <span>merchandise</span>
              </a>
            </div>
            <div className="col-20">
              <a href="#">
                <img src="./img/buy-comics-subscriptions.png" alt="" />
                <span>subscription</span>
              </a>
            </div>
            <div className="col-20">
              <a href="#">
                <img src="./img/buy-comics-shop-locator.png" alt="" />
                <span>shop locator</span>
              </a>
            </div>
            <div className="col-20">
              <a href="#">
                <img src="./img/buy-dc-power-visa.svg" alt="" />
                <span>dc power visa</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <div className='mid-footer'>
        <div className="container-sm">
          <div className="row">
            <div className="col-50"><div className="container">
              <div className="row">
                <div className="col-33">
                  <div className="foot-links">
                   <h3>DC COMICS</h3>
                   <ul>
                    
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>
                   
                  </ul>
                  </div>
                  <div className="foot-links pb-80">
                    <h3>SHOP</h3>
                    <ul>
                    
                      <li><a href="#"></a>Shop DC</li>
                      <li><a href="#"></a>Shop Dc Collectibles</li>
                    </ul>
                  </div>
                </div>
                <div className="col-33">
                  <div className="foot-links pb-80">
                    <h3>DC</h3>
                    <ul>
                    
                      <li><a href="#"></a>Terms of Use</li>
                      <li><a href="#"></a>Privacy Policy (new) </li>
                      <li><a href="#"></a>Ad Choices</li>
                      <li><a href="#"></a>Advertising</li>
                      <li><a href="#"></a>Jobs</li>
                      <li><a href="#"></a>Subscriptions</li>
                      <li><a href="#"></a>Talent Workshops</li>
                      <li><a href="#"></a>CPSC Certificates</li>
                      <li><a href="#"></a>Ratings</li>
                      <li><a href="#"></a>Shop Help</li>
                      <li><a href="#"></a>Contact Us</li>
                    </ul>
                  </div>
                </div>
                <div className="col-33">
                  <div className="foot-links pb-80">
                    <h3>SITES</h3>
                    <ul>
                    
                      <li><a href="#">DC</a></li>
                      <li><a href="#">MAD Magazine</a></li>
                      <li><a href="#">DC Kids</a></li>
                      <li><a href="#">DC Universe</a></li>
                      <li><a href="#">DC Power Visa</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div></div>
            <div className="col-50">
              <img src="./img/dc-logo-bg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer'></div>
    </footer>
  )
}

export default Footer