import SectionTitle from "../components/SectionTitle";
const Huge = () => {
  return (
    <section className="py-10 sm:py-40 text-center">
      <SectionTitle 
      title="Huge Global Network of Fast VPN"
      text="See LaslesVPN everywhere to make it easier for you when you move locations."
      />
      <div className="container px-8 sm:px-0 flex flex-col mt-10  sm:mt-40 gap-6 sm:gap-20 ">
          <img src="/huge/map.png" alt="map" />
          <img src="/huge/Sponsored.png" alt="map" />
      </div>
    </section>
  );
};

export default Huge;
