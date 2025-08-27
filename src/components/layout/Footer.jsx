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
            <div className="col-50">menus</div>
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