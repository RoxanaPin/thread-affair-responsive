export default function Footer() {
  return (
    <footer className="footer ">
      <section className="footer-primary">
        <div className="footer-primary-inner container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://x.ro" title="Information">
                  INFORMATION
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Contact us">
                  CONTACT US
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Track my order">
                  TRACK MY ORDER{' '}
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Shipping">
                  SHIPPING
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Free returns*">
                  FREE RETURNS*
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My Account">
                  MY ACCOUNT
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="SERVICES">
                  SERVICES
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="SHIP TO STORE">
                  SHIP TO STORE
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="GIFT CARD">
                  GIFT CARD
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="ONLINE ONLY">
                  ONLINE ONLY
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="TIPS & TRICKS">
                  TIPS & TRICKS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="HOME">
                  HOME
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="LOYALTY PROGRAMS">
                  LOYALTY PROGRAMS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="SIGN UP TO THE SIMONS">
                  SIGN UP TO THE SIMONS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="MY ACCOUNT">
                  MY ACCOUNT
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="CONDITIONS">
                  CONDITIONS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="FAQ">
                  FAQ
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="CAREERS">
                  CAREERS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="ABOUT US">
                  ABOUT US
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="OUR STORY">
                  OUR STORY
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="ART & CULTURE">
                  ART & CULTURE
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="OUR PRIVATE LABELS">
                  OUR PRIVATE LABELS
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="STORES">
                  STORES
                </a>
              </li>
            </ul>
          </nav>

          <section className="footer-contact">
            <h1>
              <span>THREAD AFFAIR</span> MILANO
            </h1>

            <p>
              Largo Augusto 3, Milano, 20122, Milano, IT
              {/* display block pe ancore, no br */}
              <a href="tel:+0039 02 760 003 66" title="Call us">
                Tel: 0039 02 760 003 66
              </a>
              {/* use a:nth-of-type(1) */}
              <a href="mailto:office@thread-affair.com" title="Email us">
                office@thread-affair.com
              </a>
            </p>
          </section>

          <section className="footer-support">
            <ul>
              <li>
                <i class="fa-solid fa-voicemail"></i>
                <a href="https://x.ro" title="Support">
                  SUPPORT
                </a>
              </li>

              <li>
                <i class="fa-solid fa-comment-dots"></i>
                <a href="https://x.ro" title="Chat">
                  CHAT
                </a>
              </li>

              <li>
                <i class="fa-solid fa-at"></i>
                <a href="https://x.ro" title="Email">
                  EMAIL
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="footer-secondary text-center mt-4">
        <p>©2019 THREAD AFFAIR. All Rights Reserved.</p>

        <p>
          Designed by
          <img
            title=""
            data-test=""
            className="ms-2"
            src="/images/pixellab_logo.jpg"
            alt="Pixellab"
          ></img>
        </p>
      </section>
    </footer>
  );
}
