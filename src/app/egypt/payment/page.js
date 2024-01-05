'use client';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import React from 'react';

const Page = () => {

  return (
    <div className="container  md:py-8 py-20 md;px-0 px-3 ">
      <Heading formHead=" ETA Visa to Cambodia Application" />

      <div className=' flex justify-between items-center bg-[#0068E5] py-4 px-4 rounded-t-lg my-10'>
        <h2 className=' text-white font-semibold text-lg  '>Order Summary</h2>
        <button className='bg-white text-primary px-10 py-2 rounded-lg'>
          Edit
        </button>
      </div>
      <div className="space-y-2 divide-y-[1px] pt-5">
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Full Name
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            name
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Number of Visa
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            name
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Type of Visa
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            number
          </p>
        </div>

      </div>

      <SubHeading subHead="PAYMENT" />
      <div className="space-y-2 divide-y-[1px] pt-5">
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Visa Service Fees
            <br />
            Normal fee ($69)
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Promotion discount
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Total Visa Service Fees
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Processing Time
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Egypt Government & Admin Fee(Required)
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Total Service Fees
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Covid-19 Insurance
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
        <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
          <h2 className="py-1 text-sm font-semibold text-secondary">
            Total
          </h2>
          <p className="font-bold leading-relaxed tracking-wide text-justify ">
            amount
          </p>
        </div>
      </div>

      <SubHeading subHead="SELECT PAYMENT METHOD" />
      <div className="space-y-2 divide-y-[1px] pt-5"></div>

      <div>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default Page;
