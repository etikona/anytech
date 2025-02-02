import React from "react";
import Image from "next/image";
const share = "/assets/icons/share.png";
const bulb = "/assets/icons/bulb.png";
const chip = "/assets/icons/chip.png";
const Values = () => {
  return (
    <div>
      <p className="text-center text-blue-500 uppercase font-semibold tracking-widest mb-2">
        OUR VALUES
      </p>
      <h2 className="text-center text-4xl md:text-5xl text-blue-950 font-extrabold mb-8">
        Built in our core
      </h2>
      <section className=" flex flex-col gap-9 md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 ">
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={share}
            alt="share"
            width={20}
            height={15}
            className="bg-blue-100 p-2 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">Driven</h3>
          <p className="text-lg text-blue-900 ">
            Motivated by a desire for change, we empower our customers by
            tenaciously striving for breakthroughs in financial services.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={bulb}
            alt="share"
            width={20}
            height={15}
            className="bg-sky-200 p-2 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">Agile</h3>
          <p className="text-lg text-blue-900 ">
            Our agility helps us stay one step ahead, where we embrace change
            and swiftly adapt in order to deliver cutting-edge solutions.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={chip}
            alt="share"
            width={20}
            height={15}
            className="bg-pink-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">Global</h3>
          <p className="text-lg text-blue-900 ">
            We think beyond borders, with a commitment to creating financial
            technological solutions that empower banks and financial
            institutions across the world.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-8 bg-gray-50 rounded-lg">
          <Image
            src={chip}
            alt="share"
            width={20}
            height={15}
            className="bg-pink-100 p-2.5 w-9 h-9 rounded-full "
          />
          <h3 className="text-2xl text-blue-950 font-bold">Open</h3>
          <p className="text-lg text-blue-900 ">
            In a world of possibilities, our openness leads us to discover new
            ideas, fostering creativity and inspiring transformative solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Values;
