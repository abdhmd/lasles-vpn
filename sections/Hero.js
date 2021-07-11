import Nav from "../components/Nav"
const Hero = () => {
  return (
    <section id="home" className=" h-screen flex   flex-col">
        {/* <Nav/> */}
      <div className=" container mt-6 sm:mt-20  flex justify-between  items-center flex-col-reverse  sm:flex-row text-center sm:text-left ">
        <div>
          <h1 className="font-medium  mb-4 leading-tight text-3xl sm:text-5xl">
            Want anything to be <br /> easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h1>
          <p className="leading-8 mb-10">
            Provide a network for all your needs with ease and fun using
            <span className="font-medium"> LaslesVPN</span> <br /> discover
            interesting features from us.
          </p>
          <a href="#" className="py-4 px-14 bg-primary text-white rounded-md shadow-lg font-medium text-sm sm:text-nomal" style={{

            boxShadow : "0PX 10PX 40PX rgba(250,50,50,0.4)"
          }}>
            Get Started
          </a>
        </div>
        <div>
          <img src="/hero/hero-image.png" alt="image" className="w-60 mb-10 sm:w-auto sm:mb-0"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
