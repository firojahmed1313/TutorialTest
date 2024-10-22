const Joi = require('joi');

const PeopleSchema = Joi.object({
  class: Joi.number().required(),
 
  totalFemale: Joi.number().required(),
  totalMale: Joi.number().required(),
  total: Joi.number().required(),
});

const targetGroupInformationSchema = Joi.object({
  serialNo: Joi.number().required(),
  name: Joi.string().required(),

  casteAddress: Joi.string().required(),
  recommendedBy: Joi.string().required(),
  familyBackground: Joi.string().required(),
});

const ongoingBeneficiarySchema=Joi.object({
  name:Joi.string().required(),
  cast_address:  Joi.string().required(),
  year_of_study: Joi.string().required(),
  performance: Joi.number().required()
})

const targetGroupStudiesSchema = Joi.object({
  serialNo: Joi.number().required(),
  name: Joi.string().required(),
  college_fee:Joi.number().required(),
  hostel_fee:Joi.number().required(),
  studyProposed: Joi.string().required(),
  totalExpense: Joi.number().required(),
  contribution: Joi.number().required(),
  scholarshipEligibility: Joi.number().required(),
  expectedAmount: Joi.number().required(),
});

const EducationGroupValidate = Joi.object({
  NameOfSociety: Joi.string().required(),
  DateOfSubmission: Joi.string().required(),
  TitleOfProject: Joi.string().required(),
  address: Joi.string().required(),
  OverallProjectPeriod: Joi.number().required(),
  OverallProjectBudget: Joi.number().required(),
  beneficiariesSupported: Joi.number().required(),
  outcomeImpact: Joi.string().required(),
  goal: Joi.string().required(),
  objectives: Joi.array().items(
    Joi.string().required(),
  ),
  peopleDetails: Joi.array().items(PeopleSchema),
  ongoingBeneficiary:Joi.array().items(ongoingBeneficiarySchema),
  targetGroupInformation: Joi.array().items(targetGroupInformationSchema),
  targetGroupStudies: Joi.array().items(targetGroupStudiesSchema),
  otherActivities: Joi.string().required(),
  monitoringMethods: Joi.string().required(),
  evaluationProcess: Joi.string().required(),
  conclusion: Joi.string().required(),
  currentPhase:Joi.string().required(),
  benificary_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  project_coordinator_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  project_in_charge_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  project_coordinator_agree_swz:Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  provincial_superior_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  comment_box_provincial_superior: Joi.string().allow(null),
  comment_box_project_coordinator: Joi.string().allow(null),
  comment_box_project_coordinator_swz:Joi.string().allow(null)
});

module.exports = EducationGroupValidate;
