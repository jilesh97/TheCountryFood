import React from 'react'

function Footer () {
    return (
        <footer id="footer">
          <div className="container">
            <div className="main-footer">
              <div className="row">

                <div className="col-sm-6">
                  <h5>Quick Links</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="footer-links padd">
                        <li><a href="/home">Home</a>
                        </li>
                        <li><a href="/menu">Menu Card</a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <ul className="footer-links">
                        <li><a href="/about">about us</a>
                        </li>
                        <li><a href="/contactus">contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="container">
              <p>Copyright 2019 © Thecountryfood. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}

export default Footer