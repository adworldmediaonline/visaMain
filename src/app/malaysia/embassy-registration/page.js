'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import SubHeading from '@/components/australia/common/SubHeading';
import Heading from '@/components/australia/common/Heading';
import { getAllCountries } from '@/lib/getAllCountries';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { MdDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

const Page = () => {

  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <Heading formHead="Get your Embassy Registration!" />

        <div>
          <Formik
            // initialValues={.initialValues}
            // validationSchema={.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // postMutation.mutate({
              //   ...values,
              //   travelInsurance: {
              //     ...values.travelInsurance,
              //     insuranceFee: calculateTotalPrice(
              //       values.travelInsurance.startDate,
              //       values.travelInsurance.returnDate
              //     ),
              //   },
              // });
              setSubmitting(false);
              // resetForm();
            }}
          >
            {({ values, isValid, setFieldValue }) => (
              <Form>
                <SubHeading subHead="Embassy Registration" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Email address</label>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="personalDetails.emailAddress"
                    />

                    <ErrorMessage name="personalDetails.emailAddress">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>When do you arrive at your destination?</label>
                  </div>


                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="personalDetails.dateOfBirth"
                      // selected={values.personalDetails.dateOfBirth}
                      setFieldValue={setFieldValue}
                      maxDate={new Date()}
                    />
                  </div>

                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>When do you depart from your destination?</label>
                  </div>


                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="personalDetails.dateOfBirth"
                      // selected={values.personalDetails.dateOfBirth}
                      setFieldValue={setFieldValue}
                      maxDate={new Date()}
                    />
                  </div>

                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Destination country </label>
                  </div>


                  <div className="order-2 col-span-8">
                    <Field
                      required
                      id="travelDetails.purposeOfStay"
                      name="travelDetails.purposeOfStay"
                      component="select"
                      className="new-form-input"
                    >
                      <option value="">Select</option>
                      {getAllCountries()}
                    </Field>

                    <ErrorMessage name="travelDetails.purposeOfStay">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Emergency contact's email</label>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="personalDetails.emailAddress"
                    />

                    <ErrorMessage name="personalDetails.emailAddress">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Emergency contact's full name  </label>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      className="new-form-input"
                      name="passportDetails.passportNumber"
                      id="passportDetails.passportNumber"
                    />
                    <div className="text-gray-400 text-xs">
                      Including their middle name is recommended, but it's not required if they don't have one.
                    </div>

                    <ErrorMessage name="passportDetails.passportNumber">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Emergency contact's country code and phone number</label>
                  </div>



                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      className="new-form-input"
                      name="personalDetails.emailAddress"
                    />
                    <div className="text-gray-400 text-xs">
                      Please ensure the country code is correct for your phone number. If it isn't, select the correct one.
                    </div>
                    <ErrorMessage name="personalDetails.emailAddress">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>




                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport expiration date</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="passportDetails.dateOfIssue"
                      // selected={values.passportDetails.dateOfIssue}
                      setFieldValue={setFieldValue}
                    // minDate={new Date(values.personalDetails.dateOfBirth)}
                    // disabled={values.personalDetails.dateOfBirth === ''}
                    />
                  </div>
                </div>


                <Link href="/malaysia/application">
                  <div className="py-8 text-center">

                    <button
                      className={`cursor-pointer w-fit items-center gap-3  rounded-lg font-semibold text-white bg-primaryMain px-8 py-3 ${!isValid ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                      disabled={!isValid}
                      type="submit"
                    >

                     Next

                    </button>
                  </div>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Page;
