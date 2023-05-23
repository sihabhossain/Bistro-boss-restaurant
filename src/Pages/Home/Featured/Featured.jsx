import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check It Out"
        heading="FEATURED ITEM"
      ></SectionTitle>

      <div className="md:flex justify-center items-center pb-20 pt-12  px-36  bg-slate-400 bg-opacity-40">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2020</p>
          <p className="uppercase ">Where can i get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            tempore eos illum numquam, voluptatem ullam natus eius accusantium
            quas ducimus, nostrum quis minima a quidem iure quae reprehenderit
            nemo excepturi? Blanditiis nesciunt nostrum quasi unde id. Eaque
            blanditiis reprehenderit nobis, doloribus officia aliquid explicabo,
            delectus dolor, nisi voluptates odit sequi.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
