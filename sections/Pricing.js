import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data";
const Pricing = () => {
  return (
    <section id="pricing" className="text-center pt-20 pb-10 sm:pb-30">
      <SectionTitle
        title="Choose Your Plan"
        text="Let's choose the package that is best for you and explore it happily and cheerfully."
      />
      <div className="container grid sm:grid-cols-3 gap-6 sm:gap-20 mt-10 px-10 sm:px-4 sm:mt-20 ">
        {pricingData.map((data, i) => (
          <div
            key={i}
            className="relative flex flex-col  items-center border-2 border-gray-300 rounded-lg hover:border-primary duration-300 px-0  py-10 "
          >
            <img
              src="/pricing/Standard.png"
              alt={data.title}
              className="w-20 sm:w-30  my-4 sm:my-8"
            />
            <h4 className="font-medium text-md ">{data.title}</h4>

            <ul className="flex flex-col mt-8  mb-40 gap-4 ">
              {data.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <img src="/icons/check.svg" alt="check" className="w-4 h-4" />
                  <span className="ml-4 paragraph-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <h4 className="absolute bottom-24 font-medium text-lg">
              {data.price}{" "}
              {data.price != "Free" && (
                <span className="font-normal">/ mo</span>
              )}
            </h4>

            <a
              href="#"
              className="capitalize font-medium rounded-full border border-primary py-1.5 px-10 hover:bg-primary hover:text-white duration-300 text-primary absolute bottom-8 "
            >
              select
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
