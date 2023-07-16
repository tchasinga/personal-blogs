import { Ring } from "@uiball/loaders";
const Loadingsystemduringapicall = () => {
    <Ring size={40} lineWidth={5} speed={2} color="black" />
  return (
    <div className="LoadingpageContainer">
      <svg className="ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
};

export default Loadingsystemduringapicall;
