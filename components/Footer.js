import { footerData, socialMedia } from "../data";
const Footer = () => {
  return (
    <footer className="pb-10 sm:pb-40" style={{ background: "#F8F8F8" }}>
      <div className="container flex flex-col sm:flex-row  items-center sm:items-start justify-between">
        <div className="flex flex-col items-center sm:items-left ">
          <img src="/logo.png" alt="logo" />
          <p className="paragraph mt-4">
            <span className="font-medium">LaslesVPN </span>is a private virtual
            network that <br /> has unique features and has high security.
          </p>
          <ul className="flex items-center gap-4 my-6">
            {socialMedia.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-white shadow-lg  "
                >
                  <img src={data.icon} alt={data.name} className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>

          <p className="paragraph-sm">&copy;2021LaslesVPN</p>
        </div>
        <div className="grid grid-cols-3  gap-2 sm:gap-10 mt-6 text-center">
          {footerData.map((data) => (
            <div key={data.title} className="">
              <h4 className="text-md font-medium mb-6 sm:mb-10">{data.title} </h4>
              <ul className="flex flex-col gap-2 sm:gap-4"  >
                {data.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="opacity-70">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
