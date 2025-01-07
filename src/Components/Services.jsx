import React from 'react'
import '../index.css'

const Services = () => {
  return (
  <>
   <div className="container my-5 bc-im">
      <h1 className="text-center">Our Services</h1>
      {/* Front-End Web Development */}
      <div className="service-section">
        <h2 className='service-header'>1. Front-End Web Development</h2>
        <p className='Heading'><strong>What is Front-End Web Development?</strong></p>
        <p>
          Front-End Web Development focuses on creating the visual elements of a website or web application that users interact with. It includes the layout, design, structure, and functionality.
        </p>
        <h5 className='sub'>What We Offer:</h5>
        <ul>
          <li>Custom Website Design</li>
          <li>Responsive Web Design</li>
          <li>Interactive Elements using JavaScript</li>
          <li>SEO-Friendly Development</li>
        </ul>
        <h5 className='sub'>What We Use:</h5>
        <ul>
          <li>Languages: HTML5, CSS3, JavaScript (React, Bootstrap)</li>
          <li>Tools: Figma, VSCode, Chrome DevTools</li>
          <li>Frameworks: React.js</li>
        </ul>
        <h5 className='sub'>What is Needed:</h5>
        <ul>
          <li>Branding elements (logo, colors, etc.)</li>
          <li>Content (text, images, videos)</li>
          <li>Clear understanding of site’s purpose</li>
        </ul>
      </div>


      <div className="service-section">
        <h2>2. Hosting Services</h2>
        <p><strong>What is Website Hosting?</strong></p>
        <p>
          Website hosting involves renting space on a server where your website’s files are stored and made accessible to users worldwide.
        </p>
        <h5 className='sub'>What We Offer:</h5>
        <ul>
          <li>Shared Hosting</li>
          <li>Managed Hosting</li>
          <li>Domain Registration</li>
          <li>SSL Certificates for security</li>
        </ul>
        <h5 className='sub'>What We Use:</h5>
        <ul>
          <li>HostAfrica (for hosting plans)</li>
          <li>cPanel for managing website files</li>
        </ul>
      </div>

      {/* Website Management */}
      <div className="service-section">
        <h2>3. Website Management</h2>
        <p><strong>What is Website Management?</strong></p>
        <p>
          Website management involves maintaining and updating your website to ensure it stays relevant, secure, and optimized for performance.
        </p>
        <h5 className='sub'>What We Offer:</h5>
        <ul>
          <li>Content Updates</li>
          <li>Security Monitoring</li>
          <li>Performance Optimization</li>
          <li>Ongoing SEO Maintenance</li>
        </ul>
        <h5 className='sub'>What We Use:</h5>
        <ul>
          <li>WordPress (for WordPress-based websites)</li>
          <li>Google Analytics for performance tracking</li>
        </ul>
        <h5 className='sub'>What is Needed:</h5>
        <ul>
          <li>Access to the website's CMS or hosting control panel</li>
          <li>Specific maintenance requests from the client</li>
        </ul>
      </div>

      {/* How We Work */}
      <div className="how-we-work mt-5">
        <h3 className="text-center mb-4">How We Work</h3>
        <ol>
          <li>Consultation: Free consultation to understand your needs.</li>
          <li>Proposal: Detailed proposal outlining scope, pricing, and timelines.</li>
          <li>Execution: We begin the work and keep you updated.</li>
          <li>Ongoing Support: Continuous support and maintenance after launch.</li>
        </ol>
      </div>
    </div>
  </>
  )
}

export default Services
