import Container from "@/components/container";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "YPP Training & Meetings",
  description: "Search for YPP Training and Meetings in your community",
};
const AboutPage: React.FC = () => {
  return (
    
      <div className="relative bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-6 lg:px-8 gap-12 pt-16 pb-24">
  {/* Left column: Image (always first)  */}
  <div className="w-full">
    <div className="lg:sticky lg:top-32">
      <Image
        src="/csminiconference.jpg"
        alt="Training Image"
        width={2000}
        height={2000}
        className="w-full rounded-3xl object-cover shadow-xl"
      />
    </div>
  </div>

  {/* Right column: Text and iframe */}
  <div className="w-full">
    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
      <div className="">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeLLK1YilnWVDDdb8MbXTdFhfKox-lWtlfdHeB5wRR62adNKw/viewform?embedded=true"
          width="100%"
          height="700"
          className="w-full"
        >
          Loading…
        </iframe>
      </div>
  
  
  
 
              
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default AboutPage;
