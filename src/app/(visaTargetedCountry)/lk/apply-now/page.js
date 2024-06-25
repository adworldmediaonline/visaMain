'use client';
import { LuImagePlus } from 'react-icons/lu';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import apiEndpoint from '@/services/apiEndpoint';
import { ImSpinner2 } from 'react-icons/im';
import ReactDatePicker from 'react-datepicker';
import { CiCalendarDate } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import Formmainsection from '@/components/srilanka/common/Formmainsection';
import StepProcess from '@/components/srilanka/common/StepProcess';
import Formheading from '@/components/srilanka/common/Formheading';
import {
  applyIndividualRadioData,
  touristIndividualsSchema,
} from '@/constant/srilankaConstant';
import usePost from '@/hooks/usePost';
import { addDays } from '@/lib/addDays';
import SingleFileUpload from '@/components/srilanka/SingleFileUpload';
import Formsubhead from '@/components/srilanka/common/Formsubhead';
import ReactDatePickerInput from '@/components/common/ReactDatePickerInput';
import { minDate, minDateWithDate } from '@/lib/minDate';
import { Country } from 'country-state-city';
import { getAllCountries } from '@/lib/getAllCountries';

export const touristVisaTypes = [
  '30 Days Single entry Visa',
  'Standard Visitor Visa (6 months) each stay restricted up to 60 days',
  '1 Year Multiple Entry Tourist Visa each stay restricted upto 90 days',
  '2 Years Multiple Entry Visitor Visa - Tourist each stay restricted upto 180 days',
  '5 Years Multiple entry visitor visa - Tourist each stay restricted upto 180 days',
  '10 Years Mutiple Entry Visitor Visa-Tourist each stay restricted upto 180 days',
];

export const businessVisaTypes = [
  'Standard Visitor Visa - Business (6 months) each stay restricted up to 60 days',
  '1 Year Multiple Entry Business Visa each stay restricted upto 90 days',
  '2 Years Multiple Entry Visitor Visa - Business each stay restricted upto 180 days',
  '5 Years Multiple entry visitor visa - Business each stay restricted upto 180 days',
  '10 Years Mutiple Entry Visitor Visa - Business each stay restricted upto 180 days',
];
export default function ApplyNowPage() {
  const postMutation = usePost(
    apiEndpoint.SL_VISA_TOURIST_INDIVIDUAL,
    1,
    '/lk/apply-now/review',
    true,
    'touristIndividual'
  );

  return (
    <div>
      <Formmainsection />

      <div className="container  md:py-8 py-20 md;px-0 px-3 ">
        <StepProcess
          color1=" bg-[#0068E5]"
          color2="bg-[#E3E3E3]"
          color3="bg-[#E3E3E3] "
          color4="bg-[#E3E3E3]"
        />

        <Formheading
          formHead="Sri Lanka Tourist Visa "
          formPara="Your Trip Details"
        />

        <div>
          <Formik
            initialValues={touristIndividualsSchema.initialValues}
            validationSchema={touristIndividualsSchema.yupSchema}
            validateOnChange={true}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const formData = new FormData();

              Object.entries(values).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                  formData.append(key, JSON.stringify(value));
                } else if (value instanceof File) {
                  // Handle File objects
                  formData.append(key, value);
                } else {
                  // For other non-array and non-File values
                  formData.append(key, value);
                }
              });

              postMutation.mutate(formData);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ values, setValues, isValid, handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Visa Type </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">visa type is required</div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="visaType"
                      name="visaType"
                      // placeholder="Title"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="tourist visa">Tourist Visa</option>
                      <option value="business visa">BUSINESS VISA</option>
                    </Field>

                    <ErrorMessage name="visaType">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>No. of Days Visa Required*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select your visa validity period.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="visaValidPeriodIndividualTourist"
                      name="visaValidPeriodIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      {values.visaType === 'tourist visa' && (
                        <>
                          {touristVisaTypes.map((type, i) => (
                            <option key={i} value={type}>
                              {type}
                            </option>
                          ))}
                        </>
                      )}
                      {values.visaType === 'business visa' && (
                        <>
                          {businessVisaTypes.map((type, i) => (
                            <option key={i} value={type}>
                              {type}
                            </option>
                          ))}
                        </>
                      )}
                    </Field>

                    <ErrorMessage name="visaValidPeriodIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Surname/Family Name* </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Enter your last name (surname) as it appears on your
                      passport
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="familyNameIndividualTourist"
                      name="familyNameIndividualTourist"
                      // placeholder="Surname"
                      className="new-form-input "
                    />

                    <ErrorMessage name="familyNameIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Other/Given Names*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Enter your given name as it appears on your passport
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="givenNameIndividualTourist"
                      name="givenNameIndividualTourist"
                      // placeholder="Given Name"
                      className="new-form-input "
                    />

                    <ErrorMessage name="givenNameIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Title*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select your preferred title based on your gender, marital
                      status or professional designation.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="titleIndividualTourist"
                      name="titleIndividualTourist"
                      // placeholder="Title"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="Dr">DR</option>
                      <option value="Master">MASTER</option>
                      <option value="Miss">MISS</option>
                      <option value="Mr">MR</option>
                      <option value="Mrs">MRS</option>
                      <option value="Ms">MS</option>
                      <option value="Rev">REV</option>
                    </Field>

                    <ErrorMessage name="titleIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Date of Birth*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select your date of birth as it appears in your passport
                      in the calendar provided below.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="dateOfBirthIndividualTourist"
                      selected={values.dateOfBirthIndividualTourist}
                      setFieldValue={setFieldValue}
                      maxDate={new Date()}
                    />
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Gender*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please select your gender: Male or Female.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="genderIndividualTourist"
                      name="genderIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>

                    <ErrorMessage name="genderIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Nationality*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Your country of nationality is the country in which you
                      have or can obtain a passport.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="nationalityIndividualTourist"
                      name="nationalityIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">select</option>
                      {getAllCountries()}
                    </Field>

                    <ErrorMessage name="nationalityIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Country of Birth*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select the country where you were born.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="countryOfBirthIndividualTourist"
                      name="countryOfBirthIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">select</option>
                      {getAllCountries()}
                    </Field>

                    <ErrorMessage name="countryOfBirthIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Occupation*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please provide your current occupation.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="occupationIndividualTourist"
                      name="occupationIndividualTourist"
                      // placeholder="Occupation"
                      className="new-form-input "
                    />

                    <ErrorMessage name="occupationIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport Number*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please specify Applicant&apos;s Passport Number
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="passportNumberIndividualTourist"
                      name="passportNumberIndividualTourist"
                      // placeholder="Passport Number"
                      className="new-form-input "
                    />

                    <ErrorMessage name="passportNumberIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport place of issue*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Passport place of issue
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="passportPlaceOfIssue"
                      name="passportPlaceOfIssue"
                      // placeholder="Passport Number"
                      className="new-form-input "
                    />

                    <ErrorMessage name="passportPlaceOfIssue">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Issue Date*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please specify the Issue Date of your current passport.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="issueDateIndividualTourist"
                      selected={values.issueDateIndividualTourist}
                      setFieldValue={setFieldValue}
                      minDate={new Date(values.dateOfBirthIndividualTourist)}
                      disabled={values.dateOfBirthIndividualTourist === ''}
                    />
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Expiry date*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please specify the Expiry date of your current passport.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="expiryDateIndividualTourist"
                      selected={values.expiryDateIndividualTourist}
                      setFieldValue={setFieldValue}
                      minDate={minDateWithDate(
                        1,
                        values.issueDateIndividualTourist
                      )}
                    />
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport Front page (Bio data page) date*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please upload passport front page (which cover photo, date
                      of birth, passport number).
                    </div>
                  </div>

                  {/* upload file start  */}
                  <div className="order-2 col-span-8">
                    <div className="flex items-center w-full h-full gap-8 p-2 mb-5 overflow-hidden border rounded-md">
                      <div className="bg-gray-200 rounded-lg">
                        <SingleFileUpload
                          id="passportImageIndividualTourist"
                          name="passportImageIndividualTourist"
                          setFieldValue={setFieldValue}
                          value={values.passportImageIndividualTourist}
                          errorMessage={
                            <ErrorMessage
                              name="profilePicture"
                              component="div"
                            />
                          }
                          accept="image/png, image/jpeg"
                        />

                        <label
                          htmlFor="passportImageIndividualTourist"
                          className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <LuImagePlus size={40} className="text-gray-500" />
                        </label>
                      </div>
                      {values.passportImageIndividualTourist ? (
                        <div className="flex items-center w-full">
                          <Image
                            src={URL.createObjectURL(
                              values.passportImageIndividualTourist
                            )}
                            alt={`Uploaded Image`}
                            width={100}
                            height={100}
                          />
                        </div>
                      ) : (
                        <div className="text-sm">
                          <p>Choose the Photo To Upload</p>
                          <p>No file chosen yet</p>
                        </div>
                      )}
                    </div>

                    <ErrorMessage name="passportImageIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  {/* upload file end  */}
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Passport size photo*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please upload passport size photo).
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <div className="flex items-center w-full h-full gap-8 p-2 mb-5 overflow-hidden border rounded-md">
                      <div className="bg-gray-200 rounded-lg">
                        <SingleFileUpload
                          id="profilePicture"
                          name="profilePicture"
                          setFieldValue={setFieldValue}
                          value={values.profilePicture}
                          errorMessage={
                            <ErrorMessage
                              name="profilePicture"
                              component="div"
                            />
                          }
                          accept="image/png, image/jpeg"
                        />

                        <label
                          htmlFor="profilePicture"
                          className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <LuImagePlus size={40} className="text-gray-500" />
                        </label>
                      </div>
                      {values.profilePicture ? (
                        <div className="flex items-center w-full">
                          <Image
                            src={URL.createObjectURL(values.profilePicture)}
                            alt={`Uploaded Image`}
                            width={100}
                            height={100}
                          />
                        </div>
                      ) : (
                        <div className="text-sm">
                          <p>Choose the Photo To Upload</p>
                          <p>No file chosen yet</p>
                        </div>
                      )}
                    </div>

                    <ErrorMessage name="profilePicture">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Additional Documents*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please upload documents).
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <div className="flex items-center w-full h-full gap-8 p-2 mb-5 overflow-hidden border rounded-md">
                      <div className="bg-gray-200 rounded-lg">
                        <SingleFileUpload
                          id="additionalDocuments"
                          name="additionalDocuments"
                          setFieldValue={setFieldValue}
                          value={values.additionalDocuments}
                          errorMessage={
                            <ErrorMessage
                              name="additionalDocuments"
                              component="div"
                            />
                          }
                          accept="image/png, image/jpeg"
                        />

                        <label
                          htmlFor="additionalDocuments"
                          className="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                          <LuImagePlus size={40} className="text-gray-500" />
                        </label>
                      </div>
                      {values.additionalDocuments ? (
                        <div className="flex items-center w-full">
                          <Image
                            src={URL.createObjectURL(
                              values.additionalDocuments
                            )}
                            alt={`Uploaded Image`}
                            width={100}
                            height={100}
                          />
                        </div>
                      ) : (
                        <div className="text-sm">
                          <p>Choose the Photo To Upload</p>
                          <p>No file chosen yet</p>
                        </div>
                      )}
                    </div>

                    <ErrorMessage name="additionalDocuments">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/* CHILD INFORMATION ADDED START */}
                <div>
                  <div className="pt-5 pb-10">
                    <div className=" flex w-full justify-between bg-[#0068E5] px-3 py-4">
                      <h2 className="text-lg font-semibold text-white ">
                        Child information in parent&apos;s passport{' '}
                      </h2>
                      <div>
                        <div className="flex items-center gap-2">
                          <Field
                            type="checkbox"
                            name="isChildInformationEnable"
                            className="w-6 h-6"
                          />
                          <h2 className="text-white"> Enable </h2>
                        </div>
                      </div>
                    </div>

                    {values.isChildInformationEnable && (
                      <>
                        {' '}
                        <p className="py-5 text-lg font-semibold">
                          {' '}
                          Children under 16 years of age possessing separate
                          passport(s) should submit individual application(s){' '}
                        </p>
                        <FieldArray
                          name="childInformation"
                          render={arrayHelpers => (
                            <div>
                              <table className="w-full">
                                <thead>
                                  <tr>
                                    <th>
                                      <div className="label-section">
                                        <label>Surname/Family Name *</label>
                                      </div>
                                    </th>
                                    <th>
                                      {' '}
                                      <div className="label-section">
                                        <label>Other/Given Names *</label>
                                      </div>
                                    </th>
                                    <th>
                                      {' '}
                                      <div className="label-section">
                                        <label>Date of Birth*</label>
                                      </div>
                                    </th>
                                    <th>
                                      {' '}
                                      <div className="label-section">
                                        <label>Gender*</label>
                                      </div>
                                    </th>
                                    <th>
                                      {' '}
                                      <div className="label-section">
                                        <label>Relationship *</label>
                                      </div>
                                    </th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {values.childInformation?.map(
                                    (child, index) => (
                                      <tr key={index}>
                                        <td className="px-3 py-2">
                                          <div className="order-2 col-span-8">
                                            <Field
                                              className="new-form-input "
                                              name={`childInformation[${index}].surnameFamilyName`}
                                            />
                                          </div>
                                        </td>

                                        <td>
                                          <div className="order-2 col-span-8">
                                            <Field
                                              className="new-form-input "
                                              name={`childInformation.${index}.otherGivenNames`}
                                            />
                                          </div>
                                        </td>

                                        <td className="px-3 py-2">
                                          <div className="order-2 col-span-8">
                                            <ReactDatePickerInput
                                              className="new-form-input"
                                              name={`childInformation.${index}.dateOfBirth`}
                                              selected={
                                                values.childInformation[index]
                                                  .dateOfBirth
                                              }
                                              setFieldValue={setFieldValue}
                                              maxDate={new Date()}
                                            />
                                          </div>
                                        </td>

                                        <td>
                                          <div className="order-2 col-span-8">
                                            <Field
                                              component="select"
                                              className="new-form-input "
                                              name={`childInformation.${index}.gender`}
                                            >
                                              {' '}
                                              <option value="">Select</option>
                                              <option value="male">Male</option>
                                              <option value="female">
                                                Female
                                              </option>
                                            </Field>
                                          </div>
                                        </td>

                                        <td className="px-3 py-2">
                                          <div className="order-2 col-span-8">
                                            <Field
                                              component="select"
                                              className="new-form-input "
                                              name={`childInformation.${index}.relationship`}
                                            >
                                              {' '}
                                              <option value="">Select</option>
                                              <option value="male">
                                                child
                                              </option>
                                            </Field>
                                          </div>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            }
                                          >
                                            <MdDeleteOutline
                                              className="text-primary"
                                              size={30}
                                            />
                                          </button>
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>

                              <div className="py-8 text-center">
                                <button
                                  type="button"
                                  className="formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] text-white px-8 py-2"
                                  onClick={() =>
                                    arrayHelpers.push({
                                      surnameFamilyName: '',
                                      otherGivenNames: '',
                                      dateOfBirth: '',
                                      gender: '',
                                      relationship: '',
                                    })
                                  }
                                >
                                  Add More
                                </button>
                              </div>
                            </div>
                          )}
                        />
                      </>
                    )}

                    {/* field array end */}
                  </div>
                </div>
                {/* CHILD INFORMATION ADDED END */}
                <Formsubhead subHead="Note that now it is October 23, 2023, 11:58 am in Sri Lanka" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Attended Arrival Date*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please select the date you intend to enter Sri Lanka. An
                      ETA is valid for up to 03 month from date of issue.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <ReactDatePickerInput
                      className="new-form-input"
                      name="attendantArrivalDateIndividualTourist"
                      selected={values.attendantArrivalDateIndividualTourist}
                      setFieldValue={setFieldValue}
                      minDate={minDate(1)}
                    />
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Purpose of visit*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Select you purpose of traveling to Sri Lanka.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="purposeOfVisitIndividualTourist"
                      name="purposeOfVisitIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="M.I.C.E Tourism (Meetings, Incentives, Conferences & Exhibitions/Events)">
                        M.I.C.E Tourism (Meetings, Incentives, Conferences &
                        Exhibitions/Events)
                      </option>
                      <option value="Medical treatment including Ayurvedic (herbal)">
                        Medical treatment including Ayurvedic (herbal)
                      </option>
                      <option value="Participate in Art, Music, and Dance Events">
                        Participate in Art, Music, and Dance Events
                      </option>
                      <option value="Participate in Pilgrimages">
                        Participate in Pilgrimages
                      </option>
                      <option value="Participate in Sport Events">
                        Participate in Sport Events
                      </option>
                      <option value="Participate in Weddings">
                        Participate in Weddings
                      </option>
                      <option value="Sightseeing or Holidaying">
                        Sightseeing or Holidaying
                      </option>
                      <option value="Visiting friends and relatives">
                        Visiting friends and relatives
                      </option>
                    </Field>

                    <ErrorMessage name="purposeOfVisitIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Port of entry in Sri Lanka</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="portOfDepartureIndividualTourist"
                      name="portOfDepartureIndividualTourist"
                      // placeholder="Title"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      <option value="Bandaranaike International Airport">
                        Bandaranaike International Airport
                      </option>
                      <option value="Jaffna International Airport">
                        Jaffna International Airport
                      </option>
                      <option value="Mattala Rajapaksa International Airport">
                        Mattala Rajapaksa International Airport
                      </option>
                    </Field>

                    <ErrorMessage name="portOfDepartureIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <Formsubhead subHead="Contact Details" />

                <div className="main-form-section">
                  <div className="label-section">
                    <label>Address Line 1* </label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please type your current apartment or house / building
                      number in your address.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="addressLineOneIndividualTourist"
                      name="addressLineOneIndividualTourist"
                      className="new-form-input "
                    />

                    <ErrorMessage name="addressLineOneIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Address Line 2*</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="addressLineTwoIndividualTourist"
                      name="addressLineTwoIndividualTourist"
                      className="new-form-input "
                    />

                    <ErrorMessage name="addressLineTwoIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>City*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please type the name of the city in which you live into
                      the text box.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="cityIndividualTourist"
                      name="cityIndividualTourist"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="cityIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>State*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please type the name of the state in which you live into
                      the text box.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="stateIndividualTourist"
                      name="stateIndividualTourist"
                      // placeholder="Ariline/Vessel"
                      className="new-form-input "
                    />

                    <ErrorMessage name="stateIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Zip/Postal Code*</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="zipCodeIndividualTourist"
                      name="zipCodeIndividualTourist"
                      // placeholder="Ariline/Vessel"
                      className="new-form-input "
                    />

                    <ErrorMessage name="zipCodeIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Country*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please select the name of the country in which you live
                      in.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      required
                      component="select"
                      id="countryIndividualTourist"
                      name="countryIndividualTourist"
                      className="new-form-input "
                    >
                      <option value="">Select</option>
                      {Country?.getAllCountries()?.map((country, index) => (
                        <option key={index} value={country?.name}>
                          {country?.name}
                        </option>
                      ))}
                    </Field>

                    <ErrorMessage name="countryIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Address In Sri Lanka*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please enter the address of Sri Lanka which you are going
                      to stay.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      as="textarea"
                      name="addressInSrilankaIndividualTourist"
                      rows="4"
                      className="new-form-input "
                    />

                    <ErrorMessage name="addressInSrilankaIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Email Address*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      VISA Approval/Acknowledgment will be sent to this email
                      address also.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="emailIndividualTourist"
                      name="emailIndividualTourist"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="emailIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Alternate Email Address*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      VISA Approval/Acknowledgment will be sent to this
                      alternate email address also.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="alternateEmailIndividualTourist"
                      name="alternateEmailIndividualTourist"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="alternateEmailIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Telephone No.*</label>
                  </div>

                  <div className="mark-section group">
                    <BsQuestionCircleFill className=" side-icon" size={20} />
                    <div className="tooltip-content">
                      Please type your current telephone number into the text
                      box.
                    </div>
                  </div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="telephoneIndividualTourist"
                      name="telephoneIndividualTourist"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="telephoneIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="main-form-section">
                  <div className="label-section">
                    <label>Mobile No.*</label>
                  </div>

                  <div className="mark-section group"></div>

                  <div className="order-2 col-span-8">
                    <Field
                      type="text"
                      id="mobileIndividualTourist"
                      name="mobileIndividualTourist"
                      // placeholder="Port of Departure"
                      className="new-form-input "
                    />
                    <ErrorMessage name="mobileIndividualTourist">
                      {errorMsg => (
                        <div style={{ color: 'red' }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <Formsubhead subHead="Declaration Details" />

                <div>
                  {applyIndividualRadioData.map((e, i) => (
                    <div key={i}>
                      <div className="grid gap-8 py-8 md:grid-cols-12">
                        <div className="col-span-8">
                          <label>
                            <span className="pr-2">{e.id}.</span>
                            {e.question}
                          </label>
                        </div>

                        <div className="flex col-span-4 space-x-4">
                          <div className="px-2 space-x-2">
                            <Field
                              type="radio"
                              id={`${e.name}`}
                              name={`${e.name}`}
                              value="yes"
                            />
                            <label htmlFor={`question${e.name}Yes`}>Yes</label>
                          </div>
                          <div className="px-2 space-x-2">
                            <Field type="radio" name={`${e.name}`} value="no" />
                            <label htmlFor={`${e.name}`}>No</label>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  ))}
                </div>

                <div className="py-8 text-center">
                  {postMutation.isError ? (
                    <div className="text-red-500">
                      An error occurred: {postMutation.error.message}
                    </div>
                  ) : null}
                  <button
                    className={`formbtn cursor-pointer inline-flex items-center gap-3 bg-[#0068E5] px-12 py-3 rounded-full ${
                      !isValid ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={!isValid}
                    type="submit"
                  >
                    {postMutation.isPending ? (
                      <>
                        <ImSpinner2 className="animate-spin" /> Loading
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
