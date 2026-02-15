import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const brandColor = "#8D6E63";
  const currentYear = new Date().getFullYear();

  // contact info
  const contactInfo = [
    { icon: <FaPhone />, text: "+880 1700-000000" },
    { icon: <FaEnvelope />, text: "support@warmpaws.com" },
    { icon: <FaMapMarkerAlt />, text: "Hathazari, Chattogram, Bangladesh" },
  ];

  // social links
  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/",
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/",
      name: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/",
      name: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/",
      name: "GitHub",
    },
  ];

  // policy links
  const policyLinks = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Cookies Policy", url: "/cookies" },
  ];

  return (
    <footer className="bg-base-200  pt-10 border-t border-gray-300">
      <div className="container mx-auto px-5">
        {/* top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* brand info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img
                src="https://img.icons8.com/color/96/cat-footprint.png"
                width="40"
                height="40"
                alt="WarmPaws logo"
              />
              <h2 className="text-xl font-bold" style={{ color: brandColor }}>
                WarmPaws
              </h2>
            </Link>
            <p className="text-gray-600">
              Caring for your pets with warmth and love. We connect pet owners
              to trusted services around you.
            </p>
          </div>

          {/* contact info */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: brandColor }}
            >
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-700 ">
              <Link to="/about-us" className="flex hover:text-[#8D6E63]">
                About Us
              </Link>
              <Link to="/services" className="flex hover:text-[#8D6E63]">
                Services
              </Link>
              <Link to="/contact-us" className="flex hover:text-[#8D6E63]">
                Contact Us
              </Link>
            </ul>
          </div>
          {/* contact info */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: brandColor }}
            >
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-700">
              {contactInfo.map((info, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: brandColor }}>{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* social links */}
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: brandColor }}
            >
              Follow Us
            </h3>
            <div className="flex gap-4 text-2xl">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-transform transform hover:scale-110"
                  style={{ color: brandColor }}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="border-gray-300 mb-4" />

        {/* bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-5 text-sm text-gray-600">
          <p>
            © {currentYear} <span style={{ color: brandColor }}>WarmPaws</span>.
            All rights reserved.
          </p>

          <div className="flex gap-5 mt-3 md:mt-0">
            {policyLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="hover:underline hover:text-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;