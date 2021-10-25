import React from "react";
import image from "../../assets/me-photo.jpg";

export default function Home() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mt-5 align-items-center">
        <div className="col-md-7">
          <h1 className="text-primary mb-5">Hi, I’m Zainab. Nice to meet you.</h1>
          <p className="fw-bold">
            Since beginning my journey as a freelance front end developer nearly 3 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
        <div className="col-md-5">
          <figure>
            <img src={image} alt="" className="w-100 rounded" />
          </figure>
        </div>
      </div>
    </div>
  );
}
