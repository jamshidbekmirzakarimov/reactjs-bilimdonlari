import React from "react";
import PartnerTop from "./PartnerTop/PartnerTop";
import PartnerCard from "./PartnerCard/PartnerCard";
import './Partners.css'

const Partners = () => {
  return (
    <>
      <PartnerTop />
      <div className="partner-flex">
      <PartnerCard />
      <PartnerCard />
      <PartnerCard />
      <PartnerCard />
      </div>
    </>
  );
};

export default Partners;
