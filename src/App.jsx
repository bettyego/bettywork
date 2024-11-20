import './App.css';

function App() {
  return (
    <>
      <div>
        <nav>
          <div className="container nav">
            <div className="brand">
              <a href="/">
                <img
                  src="https://papercloud.s3.eu-west-3.amazonaws.com/logo.svg"
                  alt="PaperCloud Logo"
                />
              </a>
            </div>
            <ul className="menu-items">
              <li>
                <a href="https://blog.usepapercloud.com">Blog</a>
              </li>
              <li>
                <a href="/#pricing">Pricing</a>
              </li>
              <li>
                <a href="https://web.usepapercloud.com/login">Login</a>
              </li>
              <li>
                <a href="https://web.usepapercloud.com/register" className="fancy" id="try">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mobile-nav">
          <div className="container ham-nav">
            <div className="brand">
              <a href="/">
                <img
                  src="https://papercloud.s3.eu-west-3.amazonaws.com/logo.svg"
                  width="160"
                  alt="Mobile Logo"
                />
              </a>
            </div>
            <div className="hamburger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>

          <ul className="menu-items" id="menu">
            <li>
              <a href="https://blog.usepapercloud.com">Blog</a>
            </li>
            <li>
              <a href="/#pricing">Pricing</a>
            </li>
            <li>
              <a href="https://web.usepapercloud.com/login">Login</a>
            </li>
            <li>
              <a href="https://web.usepapercloud.com/register" className="fancy">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <section className="one">
          <div className="hero container">
            <div className="intro text-holder">
              <p className="heading">
                Your Personal <br />
                <span>Business</span> Manager
              </p>

              <div className="intro-text">
                <span className="one-liner">
                  That saves you hours of tedious paper work.
                </span>

                <p>
                  Whether you're a Creator, a Freelancer, or a Business <br />
                  owner, PaperCloud makes it super easy to close deals 2x <br />
                  faster, either from your phone, iPad, or computer.
                </p>
                <br />
                With a simple and straightforward user interface, you <br />
                can create beautiful invoices in seconds, organize your <br />
                customers' data in one place, and automatically track <br />
                your income, inventory, expenses, and profits on the go.
              </div>

              <div className="trial-holder">
                <div>
                  <a
                    href="https://apps.apple.com/ng/app/papercloud-by-luna-base/id1531558520"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="iOS"
                  >
                    <img
                      src="https://papercloud.s3.eu-west-3.amazonaws.com/appstore.svg"
                      alt="Download on App Store"
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.usepapercloud.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="android"
                  >
                    <img
                      src="https://papercloud.s3.eu-west-3.amazonaws.com/playstore.svg"
                      alt="Download on Play Store"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="intro banner-holder">
              <img
                src="https://papercloud.s3.eu-west-3.amazonaws.com/paperCloud.gif"
                alt="PaperCloud Banner"
                width="280"
              />
            </div>
          </div>
        </section>
        {/* Other sections go here */}
        <section className="second">
        <div className="container things">
          <p className="title">
            Stay on top of <span className="papercloud">things</span>
          </p>
          <p className="caption">
            With your business data and content living in different apps and
            sheets of paper, it’s harder than ever to stay on top of things.{' '}
            <span className="papercloud">PaperCloud</span> makes it easy to have
            all your customer data, notes, invoices, inventory, previous balance,
            payments/order history, and business expenses in one app — making it
            readily available to you at any given point in time.
          </p>
          <div className="cards">
            {/* Cards */}
            {[
              {
                title: 'Invoices',
                caption:
                  'Create professional-looking invoices in seconds. Customize your invoice with your company logo and color, set a tax rate, or give discounts, and track payments — when you’re done, you can download or send your invoice as a PDF, email, WhatsApp, or DM.',
                className: 'invoice-pro',
              },
              {
                title: 'Expenses',
                caption:
                  'Track all personal or business expenses with ease. Categorize expenses with more than 50 categories. View the total of all your expenses and cash profits for a month at a glance.',
                className: 'expense-pro',
              },
              {
                title: 'Client Folder',
                caption:
                  'Client Folder is a collection of all your customer’s data neatly organized in one place. This includes phone numbers, emails, addresses, order history, invoices, notes, payment records, and outstanding balances.',
                className: 'client-pro',
              },
              {
                title: 'Notes',
                caption:
                  'With Notes, save specific information about your customer, whether it’s their measurements, shipping address, order details, or anything you need to remember.',
                className: 'note-pro',
              },
              {
                title: 'Contacts',
                caption:
                  '<span className="papercloud">PaperCloud</span> allows you to separate business contacts from personal ones and group them by leads (clients not closed as customers) or customers (clients who have paid for your services).',
                className: 'contacts',
              },
              {
                title: 'Inventory Tracking',
                caption:
                  'Bring your inventory or offered services into PaperCloud. As you sell, PaperCloud automatically tracks stock levels, saving you the stress of manual work.',
                className: 'inventory-pro',
              },
            ].map((card, index) => (
              <div className={`card ${card.className}`} key={index}>
                <div className="inner">
                  <p className="card-title">{card.title}</p>
                  <p className="card-caption">{card.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-holder">
            <a
              href="https://web.usepapercloud.com/register"
              className="cta-trial"
              id="try"
            >
              Use <span className="papercloud">PaperCloud</span> FREE for{' '}
              <span className="papercloud">14 days</span>
            </a>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="third">
        <div className="universal-container">
          <div className="fingertips">
            <img
              src="https://papercloud.s3.eu-west-3.amazonaws.com/Search.gif"
              alt=""
              width="230"
            />
            <div>
              <p className="title">
                Everything at your <br />
                <span className="papercloud">Fingertips</span>
              </p>
            </div>
            <div>
              <p>
                With <span className="papercloud">Universal Search</span>, you
                can search across all your records — Notes, Invoices, Contacts,
                and Expenses from a unified search bar using keywords or phrases.
                The universal search makes it easy to find anything you’re
                looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="fourth">
        <div className="container testimonial">
          <p className="title">
            Don’t take our word for it{' '}
            <span className="papercloud">— take theirs</span>
          </p>
          <div className="testimonial-cards">
            {[
              {
                caption:
                  "I just downloaded it... It's a must-have for all SMEs. It's the user-friendly interface for me. Well done @usepapercloud 👏👏👏",
                customerName: 'FiDi',
                description: 'Menswear Designer',
                link: 'https://www.instagram.com/officialfidi/',
                platform: 'Instagram',
              },
              {
                caption:
                  'Good to discover this when Wave plans to stop services in certain locations. Well done.',
                customerName: 'Tenny Gee',
                description: 'Lawyer',
                link: 'https://twitter.com/iamtennygee',
                platform: 'Twitter',
              },
              // More testimonials here
            ].map((testimonial, index) => (
              <div className="test-card" key={index}>
                <div className="card-inner">
                  <p className="card-caption">{testimonial.caption}</p>
                  <div className="customer">
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={`https://papercloud.s3.eu-west-3.amazonaws.com/${testimonial.platform.toLowerCase()}.svg`}
                        alt={`${testimonial.platform} icon`}
                      />
                      <p className="customer-name">
                        {testimonial.customerName}{' '}
                        <span>({testimonial.description})</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add the remaining sections */}
      


  <section className="fifth">
    <div className="container offline">
      <p className="title">
        Accessible Anywhere — even if you’re <span className="papercloud">Offline</span>
      </p>
      <p className="caption">
        You can access all your business information, customer details, notes,
        invoices, and expense reports, from any of your favourite devices — even
        if you’re offline.
      </p>
      <div className="devices">
        <img src="https://papercloud.s3.eu-west-3.amazonaws.com/iPad.png" alt="iPad" width="264" className="ipad" />
        <img src="https://papercloud.s3.eu-west-3.amazonaws.com/Laptop.png" alt="Laptop" width="563.6" className="macbook" />
        <img src="https://papercloud.s3.eu-west-3.amazonaws.com/iPhone.png" alt="iPhone" width="136" className="iphone" />
      </div>
      <div className="cta-holder">
        <a href="https://web.usepapercloud.com/register" className="cta-trial" id="try">
          Use <span className="papercloud">PaperCloud</span> FREE for
          <span className="papercloud">14 days</span>
        </a>
        <p>…See how easy it makes running your business.</p>
      </div>
      <p className="no-strings">
        Start your 14 days free trial. No credit card required. No strings attached.
      </p>
    </div>
  </section>


  <section className="sixth">
    <div className="container pricing">
      <p className="title">
        <span className="papercloud">PaperCloud</span> Pricing
      </p>
      <p className="caption">
        <span className="papercloud">PaperCloud</span> has a simple pricing with
        no hidden costs. You can switch between plans at any time. Cancel any
        time to end your subscription, and you won’t be charged again.
      </p>
      <div className="pricing-cards">
        <div className="plan">
          <div className="plan-inner">
            <p className="duration">1 Month</p>
            <p className="amnount" id="oneMonth">₦2,550</p>
            <p className="per">Monthly</p>
          </div>
        </div>
        <div className="plan recommended">
          <div className="plan-inner">
            <p className="duration">Lifetime</p>
            <p className="amnount" id="lifeTime">₦80,000</p>
            <p className="per">One-time Payment</p>
          </div>
        </div>
        <div className="plan">
          <div className="plan-inner">
            <p className="duration">12 Months</p>
            <p className="amnount" id="twelveMonths">₦25,600</p>
            <p className="per">Yearly</p>
          </div>
        </div>
      </div>
      <div className="cta-holder">
        <a href="https://web.usepapercloud.com/register" className="cta-trial" id="try">
          Use <span className="papercloud">PaperCloud</span> FREE for
          <span className="papercloud">14 days</span>
        </a>
      </div>
      <p className="no-strings">
        Start your 14 days free trial. No credit card required. No strings attached.
      </p>
    </div>
  </section>



  <footer>
    <div className="container footer">
      <div className="made-by">
        <p className="footer-title">Made by</p>
        <div className="base-holder">
          <img
            src="https://papercloud.s3.eu-west-3.amazonaws.com/lunabase.svg"
            alt=""
          />
          <p className="caption">
            <span className="papercloud">LUNA BASE</span> –– Is a software
            development <br /> company. That specialize in building SaaS apps from
            start to finish for customers across Nigeria, Africa, and Europe.
          </p>
        </div>
      </div>
      <div className="feature-list">
        <p className="footer-title">Social Link</p>
        <ul>
          <li><a href="https://facebook.com/usepapercloud" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/usepapercloud" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/usepapercloud" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      <div className="links">
        <p className="footer-title">Useful Links</p>
        <ul>
          <li><a href="/help">Help center</a></li>
          <li><a href="https://blog.usepapercloud.com">Blog</a></li>
          <li><a href="/testimonials">Customer stories</a></li>
          <li><a href="/policy">Our policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/affiliate" className="supported">Affiliate Program</a></li>
        </ul>
      </div>
    </div>
  </footer>




      </div>
    </>
  );
}

export default App;
