import React from "react";

function Contact() {
  return (
    <footer className="bg-gray-900 text-white p-5 text-center">
      <h2 className="text-2xl font-semibold mb-3">Contact Me</h2>
      <p>
        Email:{" "}
        <a href="latathakurathi@gmail.com" className="text-blue-400">
          latathakurathi@gmail.com
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/lata-kumari-thakurathi-21a774309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          className="text-blue-400">
          linkedin.com/in/your-profile
        </a>
      </p>
    </footer>
  );
}

export default Contact;
