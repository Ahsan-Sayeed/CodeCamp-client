import React from "react";
import Container from "react-bootstrap/esm/Container";

const FAQ = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center">
        About CodeCamp - Frequently Asked Questions
      </h1>
      <hr />
      <div className="py-3 px-3">
        <h2>What is CodeCamp?</h2>
        <p>
          CodeCamp is a community of millions of people around the world who are
          learning to code together. You can learn to code with free online
          courses, programming projects, and interview preparation for developer
          jobs.
        </p>
      </div>
      <div className="py-3 px-3">
        <h2>How can you help me learn to code?</h2>
        <p>
          You'll learn to code by completing coding challenges and building
          projects. You'll also earn verified certifications along the way.
        </p>
      </div>

      <div className="py-3 px-3">
        <h2>Is CodeCamp really free?</h2>
        <p>
          NO. Every aspect of CodeCamp isn't completely free. For advance
          tutorial you've to pay required fee.
        </p>
      </div>
      <div className="py-3 px-3">
        <h2>Can CodeCamp help me get a job as a software developer?</h2>
        <p>
          Yes. Every year, thousands of people who join the CodeCamp community
          get their first software developer job. If you're curious, you can
          browse our alumni network on LinkedIn here.
        </p>
      </div>
      <div className="py-3 px-3">
        <h2>Can I invest in CodeCamp?</h2>
        <p>
          We are a public charity, so technically you already own CodeCamp.
          Nobody can own shares of a public charity, and it cannot be bought or
          sold. So you'll continue to own a part of CodeCamp whether you like it
          or not. 😉 This said, we would welcome your donations. The only way
          you can directly influence CodeCamp, though, is to roll up your
          sleeves and contribute to our project.
        </p>
      </div>
      <div className="py-3 px-3">
        <h2>Does CodeCamp have a mobile app?</h2>
        <p>
          We are building a fully-featured Android app. In the meantime, you can
          learn on the go by watching CodeCamp's YouTube channel. And if you
          want a mobile app designed specifically for learning to code, we
          recommend Grasshopper. It's free and designed by a CodeCamp
          contributor and her team. You can download it on iOS or Android.
        </p>
      </div>
    </Container>
  );
};

export default FAQ;
