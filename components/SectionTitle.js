const SectionTitle = ({ title, text , style }) => {
  return (
    <div className=" w-4/5 m-auto" style={{margin: `${style}`}}>
      <h3 className="text-3xl font-medium mb-5 ">{title}</h3>
      <p className="leading-8 ">{text}</p>
    </div>
  );
};

export default SectionTitle;
