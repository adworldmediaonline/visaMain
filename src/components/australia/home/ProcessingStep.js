"use client";
import React, { useRef, useState, useEffect } from "react";
import UnderlineTextCenter from "../common/UnderlineTextCenter";
import TitleText from "../common/TitleText";
import Link from "next/link";

const ProcessingStep = () => {

    const data = [
        {
            id: 1,
            customeHeight: "",
            icon: "/assets/images/australia/icon1.png",
            des: "Make sure to have your passport ready, the whole process is fast and easy - it usually takes less than 10 minutes.",
            step: "Apply Online",
        },
        {
            id: 2,
            customeHeight: "",
            icon: "/assets/images/australia/icon2.png",
            des: "All major payment forms are accepted, including Visa, Mastercard, American Express, JCB, Diners, and Discover.",
            step: "Pay ETA Visa Fee",
        },
        {
            id: 3,
            customeHeight: "",
            icon: "/assets/images/australia/icon3.png",
            des: "Once your ETA visa is approved, it will be sent to your e-mail address typically within a few days after applying.",
            step: "Check your e-mail",
        },
    ];
    return (
        <div className="bg-[#F4F7FF] md:py-16 py-8 space-y-12">
            <div className="container md:text-center text-left space-y-4 ">
                <UnderlineTextCenter title="Processing Steps " />
                <TitleText title="Simple & fast application process" />
            </div>
            <div className="container">
                <div className=" md:grid grid-cols-3 justify-start gap-10 md:space-y-0 space-y-8">
                    {data.map((e, i) => (
                        <div
                            key={i}
                            className={`shadow-lg p-8 rounded-xl bg-white ${e.customeHeight}`}
                        >
                            <div>
                                <img src={e.icon} alt="" className="w-20" />
                            </div>
                            <div className="pt-8">
                                <p className="text-justify text-primary font-semibold text-lg">{e.step}</p>
                                <hr className="h-[3px] w-[30%] bg-gradient-to-t from-primary to-secondary" />
                               

                                <p className="pt-2 text-justify ">{e.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/application">
                    <div className="pt-10 flex justify-center items-center w-full">
                        <button className="bg-primary text-white rounded-lg transition duration-200 hover:bg-[#1e1e1e] hover:text-white px-4 py-2 font-medium text-md md:block hidden">
                        Apply For ETA Visa
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProcessingStep;
