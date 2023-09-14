import Image from "next/image";
import React from "react";
import FeedSection from "../feedSection/FeedSection";

const FeedOfDreams = () => {
  return (
    <div
      className="w-full h-full px-[10px] py-[18px] lg:px-[24px] lg:py-[18px] "
      style={{
        borderRadius: "38px",
        background: "rgba(0, 0, 0, 0.80)",
        boxShadow: "-10px 10px 3.6582px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* sections start */}
      <div className="w-full h-full overflow-y-auto px-[10px]">
        <FeedSection></FeedSection>
        <FeedSection></FeedSection>
        <FeedSection></FeedSection>
        <FeedSection></FeedSection>
        <FeedSection></FeedSection>
      </div>
    </div>
  );
};

export default FeedOfDreams;
