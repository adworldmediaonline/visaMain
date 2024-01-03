
import React from "react";
import UnderlineTextCenter from "../australia/common/UnderlineTextCenter";
import TitleText from "../australia/common/TitleText";
const Faq = () => {

    const data = [
        {
            id: 1,
            title: "How long does it take for ETA Australia to be approved?",
            des: "Typically, our applicants can receive their approved ETA Visa in a few days. Check your data thoroughly before submission to speed up this process.",
        },
        {
            id: 2,
            title: "How can I get a Visa for work, education, pe -rmanent residence, or any other purpose?",
            des: "You will require a consultation session with a registered Aust -ralia Migration Officer who will discuss with you all the requ -irements as specified by the Department of Home Affairs - you can choose your purpose of travel and book a consultat -ion session on the app form.",
        },
        {
            id: 3,
            title:
                "Why can't I find my nationality on the list?",
            des: "If you can't find your nationality on the list, the reason may be that your nationality is not eligible for ETA Australia. Please contact our support team.",
        },
    ];

    return (
        <div className="bg-[#f3f5f7]">
        <div className="py-16">
            <div className="container">
                <div className="space-y-4">
                    <div className="w-fit md:mx-auto">
                        <UnderlineTextCenter title="FAQs" />
                    </div>
                    <div className="max-w-4xl mx-auto md:text-center">
                        <TitleText title="Frequently Asked Question" />
                    </div>
                </div>


                <div className="">
                    <div className="container md:pl-10 pl-0 pt-20">
                        <div

                        >
                            {" "}
                            <div className="space-y-8 -mt-8">
                                <div className="flex flex-col space-y-3">

                                    {data.map((item, index) => {
                                        return (
                                            <div
                                                className=" rounded-sm  py-2 cursor-pointer" key={index}
                                            >
                                                <p className="text-lg font-semibold">{item.title}</p>
                                                <p className="pb-2">{item.des}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>


            </div>

        </div>
        </div>
    );
};

export default Faq;
