const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  class: { type: String, required: true },
  totalFemale: { type: Number, required: true },
  totalMale: { type: Number, required: true },
  total: { type: Number, required: true },
});

const targetGroupInformationSchema = new Schema({
  serialNo: { type: Number, required: true },
  name: { type: String, required: true },
  caste: { type: String, required: true },
  address: { type: String, required: true },
  year_of_study:{type:String,required:true},
  // recommendedBy: { type: String, required: true },
  familyBackground: { type: String, required: true },
});

const ongoingBeneficiarySchema=new Schema({
  name: { type: String, required: true },
  caste:  { type: String, required: true },
  address:  { type: String, required: true },
  year_of_study:  { type: String, required: true },
  performance: { type: Number, required: true }
})

const targetGroupStudiesSchema = new Schema({
  serialNo: { type: Number, required: true },
  name: { type: String, required: true },
  studyProposed: { type: String, required: true },
  totalExpense: { type: Number, required: true },
  college_fee:{type:Number, require:true},
  hostel_fee: {type:Number,require:true},
  contribution: { type: Number, required: true },
  scholarshipEligibility: { type: Number, required: true },
  expectedAmount: { type: Number, required: true },
});

const EducationGroupSchema = new Schema({
  project_code: { type: String, required: true, unique: true },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Applicant",
    required: true,
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reviewer",
    required: true,
  },
  NameOfSociety: { type: String, required: true },
  DateOfSubmission: { type: String, required: true },
  TitleOfProject: { type: String, required: true },
  address: {
    type: String,
    required: true,
  },
  OverallProjectPeriod: { type: Number, required: true },
  OverallProjectBudget: { type: Number, required: true },
  beneficiariesSupported: { type: Number, required: true },
  outcomeImpact: { type: String, required: true },
  goal: { type: String, required: true },
  objectives: [{ type: String, required: true }],
  peopleDetails: [PeopleSchema],
  targetGroupInformation: [targetGroupInformationSchema],
  targetGroupStudies: [targetGroupStudiesSchema],
  otherActivities: { type: String, required: true },
  monitoringMethods: { type: String, required: true },
  evaluationProcess: { type: String, required: true },
  conclusion: { type: String, required: true },
  currentPhase:{ type: String, required: true },
  insOrNot:{type:String, required:true},
  childOrYouth:{type:String,required:true},
  ongoingBeneficiary:[ongoingBeneficiarySchema],

  project_in_charge_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  project_coordinator_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  project_coordinator_agree_swz: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  provincial_superior_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  comment_box_provincial_superior: {
    type: String,
    default: null,
  },
  comment_box_project_coordinator: {
    type: String,
    default: null,
  },
  comment_box_project_coordinator_swz: {
    type: String,
    default: null,
  },
  amount_approved: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("EG", EducationGroupSchema);
