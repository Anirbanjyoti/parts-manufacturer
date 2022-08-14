import React from "react";
// import bgBlue from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{
        background: `url('https://i.ibb.co/JvBXFf1/auto-mechanic-s-tools-white-background-flat-lay-space-text-auto-mechanic-s-tools-white-wooden-backgr.jpg')`,
        // background:"#988406",
        // background:"#EBEBEB",
        backgroundSize: "cover",
        padding:"100px 0"
      }}
    >
      <div className="text-center bg-no-repeat">
        <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
        <p className="text-white text-secondary text-2xl">Stay Connected with Us</p>
      </div>
      <div className="w-60 md:w-80 lg:w-96 m-auto text-center mt-2">
        <form>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered input-info w-full my-5 h-14"
          />
          <br></br>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-info w-full h-14"
          />
          <br></br>
          <textarea
            className="textarea textarea-success w-full h-40 my-5"
            placeholder="Your Message"
          ></textarea>
          <br></br>
          <button className="btn btn-primary bg-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
