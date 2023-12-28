'use client';
import SubHeading from '@/components/thailand/common/SubHeading';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { thailandSchema } from '../_thailandFormSchema/thailandFormSchema';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner8 } from 'react-icons/im';

export default function Page() {
  const postMutation = usePost(
    apiEndpoint.THAILAND_VISA_APPLICATION,
    1,
    '/thailand/step-two',
    true,
    'thailandVisaApplication'
  );

  return (
    <div>
      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <h3 className="text-lg ">Home &gt; Get your Embassy Registration!</h3>

        <div className="pt-10 pb-4 mx-auto">
          <h3 className="text-4xl font-bold ">
            Get your Embassy Registration!
          </h3>
        </div>

        <div>
          <Formik
            initialValues={thailandSchema.initialValues}
            validationSchema={thailandSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              postMutation.mutate(values);
              setSubmitting(false);
              // resetForm();
            }}
          >
            {({ values, isValid, setFieldValue }) => (
              <Form>
                <SubHeading subHead="Embassy Registration" />
                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">Email address </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="emailAddress"
                      name="emailAddress"
                      className="new-form-input "
                    />

                    <ErrorMessage name="emailAddress">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      When do you arrive at your destination?{' '}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="whenArriveDestination"
                      selected={values.whenArriveDestination}
                      setFieldValue={setFieldValue}
                      placeholderText="Select a date"
                    />
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      When do you depart from your destination?{' '}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="whenDepartDestination"
                      selected={values.whenDepartDestination}
                      setFieldValue={setFieldValue}
                      placeholderText="Select a date"
                    />
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">Destination country</label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      required
                      component="select"
                      id="destinationCountry"
                      name="destinationCountry"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="Thailand">Thailand</option>
                    </Field>

                    <ErrorMessage name="destinationCountry">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">Emergency contact&apos;s email</label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="emergencyContactEmail"
                      name="emergencyContactEmail"
                      className="new-form-input "
                    />

                    <ErrorMessage name="emergencyContactEmail">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      Emergency contact&apos;s full name{' '}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="emergencyContactFullName"
                      name="emergencyContactFullName"
                      className="new-form-input "
                    />

                    <ErrorMessage name="emergencyContactFullName">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label className="">
                      Emergency contact&apos;s country code and phone number{' '}
                    </label>
                  </div>
                  <div className="order-2 col-span-9">
                    <Field
                      type="text"
                      id="emergencyContactCountryCodeAndPhoneNumber"
                      name="emergencyContactCountryCodeAndPhoneNumber"
                      className="new-form-input "
                    />

                    <ErrorMessage name="emergencyContactCountryCodeAndPhoneNumber">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="py-8 text-center">
                  {postMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {postMutation.error.message}
                    </div>
                  ) : null}
                  <button
                    className={`cursor-pointer w-fit items-center gap-3 border-2 rounded-lg font-semibold border-primaryMain text-primaryMain px-8 py-3 ${
                      !isValid ? 'cursor-not-allowed opacity-40' : ''
                    }`}
                    disabled={!isValid}
                    type="submit"
                  >
                    {postMutation.isPending ? (
                      <>
                        Loading...{' '}
                        <ImSpinner8 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      'Next'
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
