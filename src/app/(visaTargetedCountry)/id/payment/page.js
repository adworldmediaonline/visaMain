'use client';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import React from 'react';
import Link from 'next/link';
import { useFormContext } from '@/context/formContext';
import { useRouter } from 'next/navigation';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';

const Page = () => {
  const { state } = useFormContext();
  const router = useRouter();
  const getQuery = useQueryGet(
    apiEndpoint.INDONESIA_VISA_APPLICATION,
    state.formId,
    'indonesiaVisaApplication'
  );

  // const makePaymentMutation = usePostPayment(
  //   apiEndpoint.INDONESIA_VISA_APPLICATION_PAYMENT,
  //   'Payment completed successfully',
  //   // '/australia/application/payment/success',
  //   false,
  //   'indonesiaVisaApplication'
  // );

  if (getQuery.isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        {/* <ImSpinner2 className="w-4 h-4 text-black animate-spin" /> */}
        loading
      </div>
    );
  }

  if (getQuery.error) {
    return router.push('/id/application');
  }

  if (getQuery.isSuccess) {
    const { data: indonesiaApplicationData } = getQuery.data;

    // const makePayment = async () => {
    //   makePaymentMutation.mutate({
    //     evisaFee: 59,
    //     formId: indonesiaApplicationData._id,
    //   });
    // };

    return (
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead=" ETA Visa to Indonesia Application" />

        <div className=" flex justify-between items-center bg-[#0068E5] py-4 px-4 rounded-t-lg my-10">
          <h2 className="text-lg font-semibold text-white ">Order Summary</h2>
          <Link
            href={`/id/application/${indonesiaApplicationData?._id}`}
            className="px-10 py-2 bg-white rounded-lg text-primary"
          >
            Edit
          </Link>
        </div>
        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Email Address
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {indonesiaApplicationData?.contactDetails?.emailAddress}
            </p>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Passport Number
            </h2>
            <p className="font-bold leading-relaxed tracking-wide text-justify ">
              {indonesiaApplicationData?.passportDetails?.passportNumber}
            </p>
          </div>
        </div>

        <SubHeading subHead="PAYMENT" />
        <div className="space-y-2 divide-y-[1px] pt-5">
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              1 Indonesia e-Visa (99 USD)
            </h2>
          </div>
          <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
            <h2 className="py-1 text-sm font-semibold text-secondary">
              Total amount
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
};

export default Page;
