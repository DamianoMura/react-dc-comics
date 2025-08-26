import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='top-footer'>
        <ul>
          <li>
            <a href="#">
              <img src="./img/buy-comics-digital-comics.png" alt="" />
              <span>digital comics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./img/buy-comics-merchandise.png" alt="" />
              <span>merchandise</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./img/buy-comics-subscriptions.png" alt="" />
              <span>subscription</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./img/buy-comics-shop-locator.png" alt="" />
              <span>shop locator</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./img/buy-dc-power-visa.svg" alt="" />
              <span>dc power visa</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='mid-footer'></div>
      <div className='bottom-footer'></div>
    </footer>
  )
}

export default Footer