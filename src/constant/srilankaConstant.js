import * as Yup from 'yup';

export const touristIndividualsSchema = {
  yupSchema: Yup.object().shape({
    typeOfPassport: Yup.string().required(' Type Of Passport is required'),
    visaType: Yup.string().required(' visaType is required'),
    visaValidPeriodIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    titleIndividualTourist: Yup.string().required(' Title is required'),
    familyNameIndividualTourist: Yup.string().required(
      ' familyName is required'
    ),
    givenNameIndividualTourist: Yup.string().required(' GivenName is required'),

    genderIndividualTourist: Yup.string().required(' Gender is required'),
    martialStatus: Yup.string().required(' Martial status is required'),
    nationalityIndividualTourist: Yup.string().required(
      ' Nationality is required'
    ),
    dateOfBirthIndividualTourist: Yup.date().required(
      ' Date Of Birth is required'
    ),

    countryOfBirthIndividualTourist: Yup.string().required(
      ' Country of birth is required'
    ),
    placeOfBirth: Yup.string().required(' place of birth is required'),

    occupationIndividualTourist: Yup.string().required(
      'Occupation is required'
    ),
    passportNumberIndividualTourist: Yup.string().required(
      'Passport Number  is required'
    ),
    passportPlaceOfIssue: Yup.string().required(
      'Passport of issue  is required'
    ),
    issueDateIndividualTourist: Yup.date().required('Issue Date  is required'),
    expiryDateIndividualTourist: Yup.date().required(
      'Expiry Date  is required'
    ),
    invitationLetter: Yup.array().when('visaType', {
      is: 'business visa',
      then: schema =>
        schema
          .min(1, 'invitation letter is required')
          .of(Yup.mixed())
          .required('invitation letter is required'),
      otherwise: schema => schema,
    }),
    passportFrontImage: Yup.array()
      .min(1, 'Passport front image is required')
      .of(Yup.mixed())
      .required('Passport front image is required'),
    passportSizePhoto: Yup.array()
      .min(1, 'Passport size photo front image is required')
      .of(Yup.mixed())
      .required('Passport size photo image is required'),

    additionalDocuments: Yup.array()
      .min(1, 'Passport size photo front image is required')
      .of(Yup.mixed())
      .required('Passport size photo image is required'),

    attendantArrivalDateIndividualTourist: Yup.date().required(
      'This Field is required'
    ),
    purposeOfVisitIndividualTourist: Yup.string().required(
      'This Field is required'
    ),

    portOfDepartureIndividualTourist: Yup.string().required(
      'This Field is required'
    ),

    addressLineOneIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    cityIndividualTourist: Yup.string().required('This Field is required'),
    stateIndividualTourist: Yup.string().required('This Field is required'),
    zipCodeIndividualTourist: Yup.string().required('This Field is required'),
    countryIndividualTourist: Yup.string().required('This Field is required'),
    addressInSrilankaIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    emailIndividualTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    alternateEmailIndividualTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    telephoneIndividualTourist: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Phone is required'),
    mobileIndividualTourist: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
      .required('Mobile is required'),

    validResidenceIndividualTourist: Yup.string().notRequired(),
    validEtaOrExtensionIndividualTourist: Yup.string().notRequired(),
    multipleEntryVisaIndividualTourist: Yup.string().notRequired(),
  }),
  initialValues: {
    typeOfPassport: '',
    visaType: '',
    visaValidPeriodIndividualTourist: '',
    titleIndividualTourist: '',
    familyNameIndividualTourist: '',
    givenNameIndividualTourist: '',
    genderIndividualTourist: '',
    martialStatus: '',
    nationalityIndividualTourist: '',
    dateOfBirthIndividualTourist: '',
    countryOfBirthIndividualTourist: '',
    placeOfBirth: '',

    occupationIndividualTourist: '',
    passportNumberIndividualTourist: '',
    passportPlaceOfIssue: '',
    issueDateIndividualTourist: '',
    expiryDateIndividualTourist: '',
    passportFrontImage: [],
    invitationLetter: [],
    passportSizePhoto: [],
    additionalDocuments: [],
    attendantArrivalDateIndividualTourist: '',
    purposeOfVisitIndividualTourist: '',

    portOfDepartureIndividualTourist: '',
    addressLineOneIndividualTourist: '',
    addressLineTwoIndividualTourist: '',
    cityIndividualTourist: '',
    stateIndividualTourist: '',
    zipCodeIndividualTourist: '',
    countryIndividualTourist: '',
    addressInSrilankaIndividualTourist: '',
    emailIndividualTourist: '',
    alternateEmailIndividualTourist: '',
    telephoneIndividualTourist: '',
    mobileIndividualTourist: '',
    validResidenceIndividualTourist: '',
    validEtaOrExtensionIndividualTourist: '',
    multipleEntryVisaIndividualTourist: '',
  },
};

// data
export const applyIndividualRadioData = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceIndividualTourist',
    inputName: 'validResidenceIndividualTourist',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionIndividualTourist',
    inputName: 'validEtaOrExtensionIndividualTourist',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaIndividualTourist',
    inputName: 'multipleEntryVisaIndividualTourist',
  },
];

export const applyInGroupsData = {
  radioData: [
    {
      id: 1,
      question: 'Do you have a valid residence visa to Sri Lanka? *',
      name: 'validResidenceGroupTourist',
      inputName: 'validResidenceGroupTourist',
    },
    {
      id: 2,
      question:
        'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
      name: 'validEtaOrExtensionGroupTourist',
      inputName: 'validEtaOrExtensionGroupTourist',
    },
    {
      id: 3,
      question: ' Do you have a multiple entry visa to Sri Lanka?*',
      name: 'multipleEntryVisaGroupTourist',
      inputName: 'multipleEntryVisaGroupTourist',
    },
  ],

  tableHead: [
    'Given Name',
    'Passport No.',
    'Nationality',
    'Date of Birth',
    'Passport Issued Date',
    'Gender',
    '',
  ],
  tableRows: [
    {
      name: 'John Michael',
      number: '123456789',
      nationality: 'ALBANIA',
      dateOfBirth: '05-10-1997',
      gender: 'FEMALE',
      passportIssuedDate: '23/04/18',
    },
    {
      name: 'Alexa Liras',
      number: '123456789',
      nationality: 'ALBANIA',
      dateOfBirth: '05-10-1997',
      gender: 'FEMALE',
      passportIssuedDate: '23/04/18',
    },
  ],
};

// third party
export const applyInThirdPartyMemberData = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceThirdPartyTourist',
    inputName: 'validResidenceThirdPartyTourist',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionThirdPartyTourist',
    inputName: 'validEtaOrExtensionThirdPartyTourist',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaThirdPartyTourist',
    inputName: 'multipleEntryVisaThirdPartyTourist',
  },
];

// business apply individual
export const businessIndividualRadio = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceBusinessTourist',
    inputName: 'validResidenceBusinessTourist',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionBusinessTourist',
    inputName: 'validEtaOrExtensionBusinessTourist',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaBusinessTourist',
    inputName: 'multipleEntryVisaBusinessTourist',
  },
];

// business groups
export const businessGroupsRadio = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceBusinessGroupMember',
    inputName: 'validResidenceBusinessGroupMember',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionBusinessGroupMember',
    inputName: 'validEtaOrExtensionBusinessGroupMember',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaBusinessGroupMember',
    inputName: 'multipleEntryVisaBusinessGroupMember',
  },
];
