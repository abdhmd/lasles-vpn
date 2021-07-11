import SectionTitle from "../components/SectionTitle";
const Help = () => {
  return (
    <section
      id="help"
      className="py-10 sm:py-40"
      style={{ background: "linear-gradient(#FFFFFF, #F8F8F8)" }}
    >
      <div className="container text-center sm:text-left">
        <div
          className=" flex flex-col sm:flex-row items-center rounded-md py-12 sm:px-8"
          style={{ boxShadow: "0px 20px 50px rgba(0,0,0,0.05)" }}
        >
          <SectionTitle
            title="Subscribe Now for Get Special Features!"
            text="Let's subscribe with us and find the fun."
            style="unset"
          />
          <a
            href="#"
            className="mt-6 sm:mt-0 py-4 px-14 bg-primary text-white rounded-md shadow-lg font-bold"
            style={{
              boxShadow: "0PX 10PX 40PX rgba(250,50,50,0.4)",
            }}
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Help;
