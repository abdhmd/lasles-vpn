import SectionTitle from "../components/SectionTitle";
import { featuresFirstData, featuresSecondData } from "../data";

const Features = () => {
  return (
    <section id="features " className="pb-10 sm:pb-40">
      <div className="container flex flex-col">
        <div
          className=" sm:py-12 sm:px-10 rounded-md mt-4 "
          style={{ boxShadow: "0px 20px 50px rgba(0,0,0,0.05)" }}
        >
          <ul className=" grid sm:grid-cols-3   sm:divide-x sm:divide-gray-100">
            {featuresFirstData.map((data) => (
              <li
                key={data.title}
                className="flex flex-col sm:flex-row items-center justify-center py-4 "
              >
                <span className="relative w-10 h-10 flex  justify-center items-center ">
                  <span className="absolute  w-full h-full opacity-10 bg-primary rounded-full"></span>
                  <img src={data.icon} alt={data.title} className="w-4 h-4" />
                </span>
                <span className="mt-4 sm:mt-0 sm:pl-4 text-center sm:text-left">
                  <h4 className="font-bold text-lg">{data.number}+</h4>
                  <p>{data.title}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-40 gap-10 sm:gap-40">
          <div>
            <img src="/features/features-image.png" alt="image" className="w-60 sm:w-auto" />
          </div>
          <div className="flex flex-col  items-center flex-1 text-center sm:text-left overflow-hidden ">
            <SectionTitle
              title="We Provide Many Features You Can Use"
              text="You can explore the features that we provide with fun and have their own functions each feature."
              style="unset"
            />
            <ul className="mt-4">
              {featuresSecondData.map((data) => (
                <li key={data.id} className="flex items-center my-3">
                  <img
                    src="/icons/check-circle.svg"
                    alt={data.text}
                    className="w-4 h-4 mr-3"
                  />
                  <p className="paragraph-sm">{data.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
