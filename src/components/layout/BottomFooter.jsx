import React from 'react'

const BottomFooter = () => {
  return (
    <div className='bottom-footer'>
      <div className="flex-container-between align-center">
        <div className="sign-up">
          <button className="btn">SIGN-UP NOW!</button>
        </div>
        <div className="socials">
          <span>FOLLOW US</span>
          <a href="#">
            <img src="./img/footer-facebook.png" alt="" />
            </a>
          <a href="#">
            <img src="./img/footer-twitter.png" alt="" />
            </a>
          <a href="#">
            <img src="./img/footer-youtube.png" alt="" />
            </a>
          <a href="#">
            <img src="./img/footer-pinterest.png" alt="" />
            </a>
          <a href="#">
            <img src="./img/footer-periscope.png" alt="" />
            </a>
          </div>
      </div>
    </div>
  )
}

export default BottomFooter