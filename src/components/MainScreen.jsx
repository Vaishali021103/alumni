import React from "react";
import image1 from "../assest/img1.webp";

const MainScreen = () => {
  return (
    <div className="w-full text-white fixed top-28 left-[480px]">
      <div>
        <h1 className="text-3xl mb-10">TCET Alumni</h1>
        <div className="flex">
          <div className="flex flex-col text-left mr-5">
            <img className="h-36" src={image1} alt="/" />
            <h3 className="font-bold text-xl mt-3">Rohan Tripathi</h3>
            <p>
              Pursuing PhD at Uni <br></br>of Calfornia..
            </p>
            <p>Batch 2022 Comps</p>
          </div>
          <div className="flex flex-col text-left mr-5">
            <img className="h-36" src={image1} alt="/" />
            <h3 className="font-bold text-xl mt-3">Rohan Tripathi</h3>
            <p>
              Pursuing PhD at Uni <br></br>of Calfornia..
            </p>
            <p>Batch 2022 Comps</p>
          </div>
          <div className="flex flex-col text-left mr-5">
            <img className="h-36" src={image1} alt="/" />
            <h3 className="font-bold text-xl mt-3">Rohan Tripathi</h3>
            <p>
              Pursuing PhD at Uni <br></br>of Calfornia..
            </p>
            <p>Batch 2022 Comps</p>
          </div>
          <div className="flex flex-col text-left mr-5">
            <img className="h-36" src={image1} alt="/" />
            <h3 className="font-bold text-xl mt-3">Rohan Tripathi</h3>
            <p>
              Pursuing PhD at Uni <br></br>of Calfornia..
            </p>
            <p>Batch 2022 Comps</p>
          </div>
        </div>

    <h1 className="text-3xl mt-10 mb-10">Community</h1>
    <div>
        <div className="flex">
        <img className='rounded-full h-12 mr-10' src={image1} alt="" />
        <p>How do you stay updated with the latest trends and developments in computer engineering?</p>
        </div>
        <div className="flex mt-10">
        <img className='h-12 rounded-full mr-10' src={image1} alt="" />
        <p>How do you stay updated with the latest trends and developments in computer engineering?</p>
        </div>
    </div>        
      </div>
    </div>
  );
};

export default MainScreen;
