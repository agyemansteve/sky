import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [mobile, setMobile] = useState();
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  useEffect(() => {
    setMobile(window.innerWidth <= 768);
  }, []);

  const styled = {
    fontSize: "",
    border: "none",
    background: "rgb(149 122 122 / 0%)",
    width: mobile ? "50vw" : "45vw",
    color: "#000",
    borderBottom: "1px solid #000",
    padding: ".5rem 1rem",
    marginBottom: "1rem",
    outline: "none",
  };

  if (submitted) {
    return (
      <div
        style={{
          transform: `translate(-50%, -50%)`,
          width: "21vw",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "2rem",
            // padding: "2rem",
            textShadow: "24px 20px #e3e2e2",
            // fontFamily: "'Satisfy', cursive",
            // padding: "10rem",
          }}
        >
          Thank you
        </h2>
        {/* <h2>Thank you!</h2> */}
        <div style={{ color: "white" }}>I'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          marginBottom: "2rem",
          // padding: "2rem",
          textShadow: "14px 20px #e3e2e2",
          // fontFamily: "'Satisfy', cursive",
          // padding: "10rem",
        }}
      >
        {" "}
        Contact{"  "}
      </h1>
      <form
        style={{
          flexDirection: "column",
          //   transform: `translate(-50%, -50%)`,
        }}
        name="contact"
        // action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        // target="_blank"
        netlify
        // dataNetlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input
            style={styled}
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div>
          <input
            style={styled}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div>
          <textarea
            style={styled}
            placeholder="Your message"
            name="message"
            required
          />
        </div>
        <div>
          <button className="links b-3" type="submit">
            {" "}
            Send message{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
