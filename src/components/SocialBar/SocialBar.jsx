import React from 'react';
import './SocialBar.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6';

function SocialBar() {
    const socialLinks = [
        { name: 'Instagram', url: 'https://www.instagram.com', icon: FaInstagram },
        { name: 'Facebook', url: 'https://www.facebook.com', icon: FaFacebookF },
        { name: 'YouTube', url: 'https://www.youtube.com', icon: FaYoutube, className: 'circle' },
        { name: 'X', url: 'https://x.com', icon: FaXTwitter },
      ];
    return (
        // <div className="social-bar">
        //     <FaInstagram className="social-icon" />
        //     <FaFacebookF className="social-icon" />
        //     <FaYoutube className="social-icon circle" />
        //     <FaXTwitter className="social-icon" />
        // </div>
        <div className="social-bar">
      {socialLinks.map(({ name, url, icon: Icon, className = '' }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${name} page`}
        >
          <Icon className={`social-icon ${className}`} />
        </a>
      ))}
    </div>
    );
}

export default SocialBar;
