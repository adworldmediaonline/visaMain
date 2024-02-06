'use client';
import React from 'react';
import apiEndpoint from '@/services/apiEndpoint';
import usePost from '@/hooks/usePost';
import { ImSpinner2 } from 'react-icons/im';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReactDatePicker from 'react-datepicker';
import { CiCalendarDate } from 'react-icons/ci';
import 'react-datepicker/dist/react-datepicker.css';
import BannerPage from '@/components/in/common/BannerPage';
import {
  airportsSeaports,
  eligibleCountriesEvisaIndia,
  step1ValidationSchema,
} from '@/constant/inConstant';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate } from '@/lib/minDate';
const StepOne = () => {
  const postMutation = usePost(
    apiEndpoint.VISA_ADD_STEP1,
    1,
    '/in/visa/step-two',
    true
  );

  return (
    <>
      <BannerPage heading="E-VISA APPLICATION FORM" />

      <p className="pt-8 font-semibold text-center">
        Note: For e-visa services to Afghan Nationals, they must select
        <span className="pl-2 pr-1 text-primary">AFGHANISTAN</span> nationality
      </p>
      <div className="max-w-4xl px-5 py-4 mx-auto md:px-12">
        <Formik
          initialValues={step1ValidationSchema.initialValues}
          validationSchema={step1ValidationSchema.yupSchema}
          validateOnChange={true}
          validateOnMount={true}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            postMutation.mutate(values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ values, isValid, handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className="formMain">
              <div className="form-input-main-div">
                <label className="form-label">Application Type*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    component="select"
                    id="applicationType"
                    name="applicationType"
                    className="p-2 border rounded select-input"
                  >
                    <option disabled value="">
                      Select*
                    </option>
                    <option value="Normal">
                      Normal Processing(4 to 7 Business Days)
                    </option>
                    <option value="Urgent">
                      Urgent Processing(24 to 72 Business Hours)
                    </option>
                    <option value="Rush">Rush</option>
                  </Field>
                  <ErrorMessage name="applicationType">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Select Country*</label>
                <div className="select-input">
                  <Field
                    required
                    component="select"
                    id="nationalityRegion"
                    name="nationalityRegion"
                    className="p-2 border rounded select-input"
                  >
                    <option disabled value="">
                      Country
                    </option>
                    {eligibleCountriesEvisaIndia?.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </Field>

                  <ErrorMessage name="nationalityRegion">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Passport Type*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    component="select"
                    id="passportType"
                    name="passportType"
                    className="p-2 border rounded select-input"
                  >
                    <option disabled value="">
                      Select*
                    </option>
                    <option value="ordinary passport">ORDINARY PASSPORT</option>
                  </Field>
                  <ErrorMessage name="passportType">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Port Of Arrival</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    component="select"
                    id="portOfArrival"
                    name="portOfArrival"
                    className="p-2 space-y-2 border rounded select-input"
                  >
                    <option defaultChecked selected>
                      Select
                    </option>
                    {airportsSeaports.map((airportSeaport, index) => (
                      <option key={index} value={airportSeaport}>
                        {airportSeaport}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="portOfArrival">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Date Of Birth</label>
                <div className="input-error-wrapper">
                  <ReactDatePickerInput
                    className="new-form-input"
                    name="dateOfBirth"
                    selected={values.dateOfBirth}
                    setFieldValue={setFieldValue}
                    maxDate={new Date()}
                  />
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Email ID*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="email"
                    name="emailId"
                    id="emailId"
                    className="form-input"
                    placeholder="Enter Email Id"
                  />
                  <ErrorMessage name="emailId">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Re-Enter Email ID*</label>
                <div className="input-error-wrapper">
                  <Field
                    required
                    type="email"
                    name="reEmailId"
                    id="reEmailId"
                    className="form-input"
                    placeholder="Re-Enter Email Id"
                  />
                  <ErrorMessage name="reEmailId">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-input-main-div">
                <label className="form-label">Contact no*</label>
                <div className="input-error-wrapper form-input">
                  <Field name="contactNo">
                    {({ field, form }) => (
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={field.value}
                        inputclassName="phone-input-class"
                        onChange={value => {
                          form.setFieldValue(field.name, value);

                          if (field.value) {
                            form.setFieldValue({
                              ...form.values,
                              contactNo: value,
                            });
                          }
                        }}
                      />
                    )}
                  </Field>

                  <ErrorMessage
                    name="contactNo"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>

              <div className="form-input-main-div">
                <label className="self-start form-label">Visa Service*</label>

                {/* multi step radio button start visa services code start here  */}
                <div className="space-y-4 text-sm input-error-wrapper">
                  <div>
                    {/* eEmergency x misc */}
                    {values?.nationalityRegion?.toLocaleLowerCase() ===
                    'afghanistan' ? (
                      <div>
                        <div className="flex items-start space-x-2">
                          <Field
                            type="radio"
                            id="visaServiceEmergencyXMisc"
                            name="visaService"
                            className="mt-1"
                            value="eEmergencyXMisc"
                          />
                          <label htmlFor="visaServiceEmergencyXMisc">
                            E Emergency X Misc
                          </label>
                        </div>
                        {values.visaService === 'eEmergencyXMisc' && (
                          <div className="px-8">
                            <div>
                              {/* level1-inner1 start  */}
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="visaServiceEmergencyXMiscVisaValue"
                                  name="eEmergencyXMisc"
                                  className="mt-1"
                                  value="EMERGENCY TRAVEL TO INDIA"
                                />
                                <label htmlFor="visaServiceEmergencyXMiscVisaValue">
                                  EMERGENCY TRAVEL TO INDIA
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}

                    {values?.nationalityRegion?.toLocaleLowerCase() !==
                      'afghanistan' && (
                      <div className="flex items-start space-x-2">
                        <Field
                          type="radio"
                          id="visaServiceEtourist"
                          name="visaService"
                          className="mt-1"
                          value="eTOURIST VISA"
                        />
                        <label htmlFor="visaServiceEtourist">
                          eTOURIST VISA
                        </label>
                      </div>
                    )}

                    {values.visaService === 'eTOURIST VISA' && (
                      <div className="px-8">
                        <div>
                          {/* level1-inner1 start  */}
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="eTouristVisa30Days"
                              name="eTouristVisa"
                              className="mt-1"
                              value={`${
                                values.visaService === 'eTOURIST VISA'
                                  ? 'visa30days'
                                  : ''
                              }`}
                            />
                            <label htmlFor="eTouristVisa30Days">
                              eTourist Visa(for 30 Days)
                            </label>
                          </div>
                          {values.eTouristVisa === 'visa30days' && (
                            <div className="px-4 py-2 space-y-2">
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa30DaysValue1"
                                  name="eTouristVisa30Days"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa30days'
                                      ? 'RECREATION/SIGHT-SEEING'
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa30DaysValue1">
                                  RECREATION/SIGHT-SEEING
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa30DaysValue2"
                                  name="eTouristVisa30Days"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa30days'
                                      ? 'MEETING FRIENDS/RELATIVES'
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa30DaysValue2">
                                  MEETING FRIENDS/RELATIVES
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa30DaysValue3"
                                  name="eTouristVisa30Days"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa30days'
                                      ? 'SHORT TERM YOGA PROGRAMME'
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa30DaysValue3">
                                  SHORT TERM YOGA PROGRAMME
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa30DaysValue4"
                                  name="eTouristVisa30Days"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa30days'
                                      ? `SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa30DaysValue4">
                                  SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa30DaysValue5"
                                  name="eTouristVisa30Days"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa30days'
                                      ? `VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa30DaysValue5">
                                  VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)
                                </label>
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          {/* level1-inner1 start  */}
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="eTouristVisa1Year"
                              name="eTouristVisa"
                              className="mt-1"
                              value="visa1Year"
                            />
                            <label htmlFor="eTouristVisa1Year">
                              eTourist Visa(for 1 Year)
                            </label>
                          </div>
                          {values.eTouristVisa === 'visa1Year' && (
                            <div className="px-4 py-2 space-y-2">
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa1YearValue1"
                                  name="eTouristVisa1Year"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa1Year'
                                      ? `RECREATION/SIGHT-SEEING`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa1YearValue1">
                                  RECREATION/SIGHT-SEEING
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa1YearValue2"
                                  name="eTouristVisa1Year"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa1Year'
                                      ? `MEETING FRIENDS/RELATIVES`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa1YearValue2">
                                  MEETING FRIENDS/RELATIVES
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa1YearValue3"
                                  name="eTouristVisa1Year"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa1Year'
                                      ? `SHORT TERM YOGA PROGRAMME`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa1YearValue3">
                                  SHORT TERM YOGA PROGRAMME
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa1YearValue4"
                                  name="eTouristVisa1Year"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa1Year'
                                      ? `SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa1YearValue4">
                                  SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa1YearValue5"
                                  name="eTouristVisa1Year"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa1Year'
                                      ? `VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa1YearValue5">
                                  VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)
                                </label>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          {/* level1-inner1 start  */}
                          <div className="flex items-start space-x-2">
                            <Field
                              type="radio"
                              id="eTouristVisa5Years"
                              name="eTouristVisa"
                              className="mt-1"
                              value="visa5Years"
                            />
                            <label htmlFor="eTouristVisa5Years">
                              eTourist Visa(for 5 Years)
                            </label>
                          </div>
                          {values.eTouristVisa === 'visa5Years' && (
                            <div className="px-4 py-2 space-y-2">
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa5YearsValue1"
                                  name="eTouristVisa5Years"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa5Years'
                                      ? `RECREATION/SIGHT-SEEING`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa5YearsValue1">
                                  RECREATION/SIGHT-SEEING
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa5YearsValue2"
                                  name="eTouristVisa5Years"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa5Years'
                                      ? `MEETING FRIENDS/RELATIVES`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa5YearsValue2">
                                  MEETING FRIENDS/RELATIVES
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa5YearsValue3"
                                  name="eTouristVisa5Years"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa5Years'
                                      ? `SHORT TERM YOGA PROGRAMME`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa5YearsValue3">
                                  SHORT TERM YOGA PROGRAMME
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa5YearsValue4"
                                  name="eTouristVisa5Years"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa5Years'
                                      ? `SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa5YearsValue4">
                                  SHORT TERM COURSES ON LOCAL LANGUAGES, MUSIC,
                                  DANCE, ARTS & CRAFTS, COOKING, MEDICINE ETC.
                                  WHICH SHOULD NOT BE A FORMAL OR STRUCTURED
                                  COURSE/PROGRAMME (COURSES NOT EXCEEDING 6
                                  MONTHS DURATION AND NOT ISSUED WITH A
                                  QUALIFYING CERTIFICATE/ DIPLOMA ETC)
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eTouristVisa5YearsValue5"
                                  name="eTouristVisa5Years"
                                  className="mt-1"
                                  value={`${
                                    values.eTouristVisa === 'visa5Years'
                                      ? `VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)`
                                      : ''
                                  }`}
                                />
                                <label htmlFor="eTouristVisa5YearsValue5">
                                  VOLUNTARY WORK OF SHORT DURATION (FOR A
                                  MAXIMUM PERIOD OF ONE MONTH, WHICH DO NOT
                                  INVOLVE ANY MONETARY PAYMENT OR CONSIDERATION
                                  OF ANY KIND IN RETURN)
                                </label>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* eMEDICAL VISA  */}
                  {values?.nationalityRegion?.toLocaleLowerCase() !==
                    'afghanistan' && (
                    <>
                      {' '}
                      <div>
                        <div className="flex items-start space-x-2">
                          <Field
                            type="radio"
                            id="visaServiceEmedical"
                            name="visaService"
                            className="mt-1"
                            value="eMEDICAL VISA"
                          />
                          <label htmlFor="visaServiceEmedical">
                            eMEDICAL VISA
                          </label>
                        </div>
                        {values.visaService === 'eMEDICAL VISA' && (
                          <div className="px-8">
                            <div>
                              {/* level1-inner1 start  */}
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eMedicalVisaValue"
                                  name="eMedicalVisa"
                                  className="mt-1"
                                  value="SHORT TERM MEDICAL TREATMENT OF SELF"
                                />
                                <label htmlFor="eMedicalVisaValue">
                                  SHORT TERM MEDICAL TREATMENT OF SELF
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        {/* eBUSINESS VISA */}
                        <div className="flex items-start space-x-2">
                          <Field
                            type="radio"
                            id="visaServiceEbusiness"
                            name="visaService"
                            className="mt-1"
                            value="eBUSINESS VISA"
                          />
                          <label htmlFor="visaServiceEbusiness">
                            eBUSINESS VISA
                          </label>
                        </div>
                        {values.visaService === 'eBUSINESS VISA' && (
                          <div className="px-8 ">
                            <div className="py-2 space-y-2">
                              {/* level1-inner1 start  */}
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="TO SET UP INDUSTRIAL/BUSINESS VENTURE"
                                />
                                <label htmlFor="eBusinessVisaValue">
                                  TO SET UP INDUSTRIAL/BUSINESS VENTURE
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue2"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="SALE/PURCHASE/TRADE"
                                />
                                <label htmlFor="eBusinessVisaValue2">
                                  SALE/PURCHASE/TRADE
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue3"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="ATTEND TECHNICAL/BUSINESS MEETINGS"
                                />
                                <label htmlFor="eBusinessVisaValue3">
                                  ATTEND TECHNICAL/BUSINESS MEETINGS
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue4"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="TO RECRUIT MANPOWER"
                                />
                                <label htmlFor="eBusinessVisaValue4">
                                  TO RECRUIT MANPOWER
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue5"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE FAIRS"
                                />
                                <label htmlFor="eBusinessVisaValue5">
                                  PARTICIPATION IN EXHIBITIONS,BUSINESS/TRADE
                                  FAIRS
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue6"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="EXPERT/SPECIALIST IN CONNECTION WITH AN ONGOING PROJECT"
                                />
                                <label htmlFor="eBusinessVisaValue6">
                                  EXPERT/SPECIALIST IN CONNECTION WITH AN
                                  ONGOING PROJECT
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue7"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="CONDUCTING TOURS"
                                />
                                <label htmlFor="eBusinessVisaValue7">
                                  CONDUCTING TOURS
                                </label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eBusinessVisaValue8"
                                  name="eBusinessVisa"
                                  className="mt-1"
                                  value="TO DELIVER LECTURE/S UNDER GLOBAL INITIATIVE FOR ACADEMIC NETWORKS (GIAN)"
                                />
                                <label htmlFor="eBusinessVisaValue8">
                                  TO DELIVER LECTURE/S UNDER GLOBAL INITIATIVE
                                  FOR ACADEMIC NETWORKS (GIAN)
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        {/* eCONFERENCE VISA */}
                        <div className="flex items-start space-x-2">
                          <Field
                            type="radio"
                            id="visaServiceEconference"
                            name="visaService"
                            className="mt-1"
                            value="eCONFERENCE VISA"
                          />
                          <label htmlFor="visaServiceEconference">
                            eCONFERENCE VISA
                          </label>
                        </div>
                        {values.visaService === 'eCONFERENCE VISA' && (
                          <div className="px-8">
                            <div>
                              {/* level1-inner1 start  */}
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eConferenceVisaValue"
                                  name="eConferenceVisa"
                                  className="mt-1"
                                  value="TO ATTEND A CONFERENCE/SEMINAR/WORKSHOP ORGANIZED BY A MINISTRY OR DEPARTMENT OF THE GOVERNMENT OF INDIA,STATE GOVERNMENTS OR UT ADMINISTRATIONS AND THEIR SUBORDINATE/ ATTACHED ORGANIZATIONS AND PSUS"
                                />
                                <label htmlFor="eConferenceVisaValue">
                                  TO ATTEND A CONFERENCE/SEMINAR/WORKSHOP
                                  ORGANIZED BY A MINISTRY OR DEPARTMENT OF THE
                                  GOVERNMENT OF INDIA,STATE GOVERNMENTS OR UT
                                  ADMINISTRATIONS AND THEIR SUBORDINATE/
                                  ATTACHED ORGANIZATIONS AND PSUS
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        {/* eMEDICAL ATTENDANT VISA */}
                        <div className="flex items-start space-x-2">
                          <Field
                            type="radio"
                            id="visaServiceEmedicalAttendant"
                            name="visaService"
                            className="mt-1"
                            value="eMEDICAL ATTENDANT VISA"
                          />
                          <label htmlFor="visaServiceEmedicalAttendant">
                            eMEDICAL ATTENDANT VISA
                          </label>
                        </div>
                        {values.visaService === 'eMEDICAL ATTENDANT VISA' && (
                          <div className="px-8">
                            <div>
                              {/* level1-inner1 start  */}
                              <div className="flex items-start space-x-2">
                                <Field
                                  type="radio"
                                  id="eMedicalAttendantVisaValue"
                                  name="eMedicalAttendantVisa"
                                  className="mt-1"
                                  value="TO ACCOMPANY PATIENT TRAVELLING TO INDIA ON EMEDICAL VISA"
                                />
                                <label htmlFor="eMedicalAttendantVisaValue">
                                  TO ACCOMPANY PATIENT TRAVELLING TO INDIA ON
                                  EMEDICAL VISA
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
                {/* multi step radio button end visa services  */}
              </div>

              <div className="form-input-main-div">
                <label className="form-label">Expected Date of Arrival</label>
                <div className="input-error-wrapper">
                  <ReactDatePickerInput
                    className="new-form-input"
                    name="expectedDateOfArrival"
                    selected={values.expectedDateOfArrival}
                    setFieldValue={setFieldValue}
                    minDate={minDate(3)}
                  />
                </div>
              </div>

              <div className="text-center">
                {postMutation.isError ? (
                  <div className="text-red-500">
                    An error occurred: {postMutation.error.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={!isValid}
                  className={`formbtn cursor-pointer inline-flex items-center gap-3 ${
                    !isValid ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                >
                  {postMutation.isPending ? (
                    <>
                      <ImSpinner2 className="animate-spin" /> Loading
                    </>
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default StepOne;
