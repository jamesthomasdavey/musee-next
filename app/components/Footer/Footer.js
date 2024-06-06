"use client"
import Link from 'next/link';

const Footer = () => {
  const navigateFromFooter = () => {
    setTimeout(() => {
      // document.querySelector('h1').focus();
    }, 100)
  }

  return (
    <footer>
      <address>
        <div>Pier 45</div>
        <div>Fisherman&apos;s Wharf</div>
        <div>San Francisco, CA 94113</div>
      </address>
      <div>
        <div>Open Everyday</div>
        <div>10 AM - 8 PM</div>
        <div>
          <Link
            href="contact"
            onClick={navigateFromFooter}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )

}

export default Footer