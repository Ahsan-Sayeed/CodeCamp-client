import React from "react";
import Container from "react-bootstrap/esm/Container";

const Blog = () => {
  return (
    <Container>
      <div className="py-5 px-3">
        <h3>what is cors?</h3>
        <span>
          CORS (Cross-Origin Resource Sharing) is a system, consisting of
          transmitting HTTP headers, that determines whether browsers block
          frontend JavaScript code from accessing responses for cross-origin
          requests. The same-origin security policy forbids cross-origin access
          to resources. But CORS gives web servers the ability to say they want
          to opt into allowing cross-origin access to their resources.
        </span>
      </div>
      <div className="py-5 px-3">
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <span>
          Firebase provides detailed documentation and cross-platform SDKs to
          help you build and ship apps on Android, iOS, the web, C++, and Unity.
          Firebase helps you develop high-quality apps, grow your user base, and
          earn more money. Each feature works independently, and they work even
          better together.
        </span>
        <br />
        <br />
        <span>
          Usually, authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints.
          <br />
          <br />
          <b> 5 Common Authentication </b>
          <ul>
            <li>
              Types Password-based authentication. Passwords are the most common
              methods of authentication.
            </li>
            <li>Multi-factor authentication.</li>
            <li>Certificate-based authentication.</li>
            <li>Biometric authentication.</li>
            <li>Token-based authentication.</li>
          </ul>
        </span>
      </div>
      <div className="py-5 px-3">
        <h3>How does the private route work?</h3>
        <span>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </span>
      </div>
      <div className="py-5 px-3">
        <h3> What is Node? How does Node work?</h3>
        <span>
          Node. js is an open-source, cross-platform JavaScript runtime
          environment and library for running web applications outside the
          client's browser. Ryan Dahl developed it in 2009, and its latest
          iteration, version 15.14, was released in April 2021.
        </span>
        <br />
        <br />
        <span>
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </span>
        <div className="d-flex row w-50 border my-4 mx-auto">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png"
            alt=""
          />
          <br />
          <cite className="text-center">Working of Node.js</cite>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
