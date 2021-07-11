import { data } from "autoprefixer";
import SectionTitle from "../components/SectionTitle";
import { testimonialsData } from "../data";
const Testimonials = () => {
  return (
    <section id="testimonials" className="text-center">
      <SectionTitle
        title="Trusted by Thousands of Happy Customer"
        text="These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
      />

      <div className="container overflow-hidden mt-20 grid sm:grid-cols-3 gap-6 sm:gap-20 ">
        {testimonialsData.map((data, i) => (
          <div
            key={i}
            className="flex flex-col p-6 rounded-md border-2 border-gray-200 hover:border-primary duration-300 hover:shadow-md "
          >
            <div className="flex items-center justify-between">
              <div className="flex ">
                <img src={data.photo} alt={data.user} />
                <span className="text-left ml-4">
                  <h4 className="font-medium">{data.user}</h4>
                  <p className="text-sm opacity-70">{data.address}</p>
                </span>
              </div>
              <div className="flex items-center">
                {data.rating}
                <img
                  src="/icons/star.svg"
                  alt="star"
                  className="ml-4 w-4 h-4"
                />
              </div>
            </div>
            <p className="text-left mt-4">{data.remark}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
