const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectiveSchema = new Schema({
  objective: { type: String, required: true },
  results: [{ type: String, required: true }],
  activities: [
    {
      activity: { type: String, required: true },
      verification: { type: String, required: true },
    },
  ],
});
const personalBudgetSchema = new Schema({
  particulars: { type: String, required: true },
  staff:{type:Number, required:true},
  rate:{type:Number, required:true},
  year_1:{type:Number, required:true},
  year_2:{type:Number, required:true},
  year_3:{type:Number, required:true},
  year_4:{type:Number, required:true}
  
});

const programmeBudgetSchema=new Schema({
  particulars:{type: String, required: true},
  year_1:{type:Number, required:true},
  year_2:{type:Number, required:true},
  year_3:{type:Number, required:true},
  year_4:{type:Number, required:true}
  
})

const timeframeSchema=new Schema({
  activities:{type:String, required:true},
  months:[Boolean]
})

// const Budget_cost = new Schema({
//   budget: { type: String, required: true },
//   cost: { type: Number, required: true },
// });

const CommonGroup = new Schema({
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
  goal: { type: String, required: true },
  currentPhase:{type:String, required:true},
  currentPhaseProjectBudget:{type:String, required:true},
  reportingMethodology:{type:String, required:true},
  president:{type:String, required:true},
  objectives: [objectiveSchema],
  // budget_cost_table: [Budget_cost],
  personalBudget:[personalBudgetSchema],
  programmeBudget:[programmeBudgetSchema],
  timeFrame:[timeframeSchema],
  nameOfSociety: { type: String, required: true },
  DateOfSubmission: { type: String, required: true },
  TitleOfProject: { type: String, required: true },
  address: {
    type: String,
    required: true,
  },
  OverallProjectPeriod: { type: Number, required: true },
  OverallProjectBudget: { type: Number, required: true },
  ProjectArea: { type: String, required: true },
  directBeneficiaries: { type: Number, required: true },
  indirectBeneficiaries: { type: Number, required: true },
  problemAnalysis: { type: String, required: true },
  // solutionAnalysis: { type: String, required: true },
  sustainability: { type: String, required: true },
  monitoringProcess: { type: String, required: true },
  evaluationMethodology: { type: String, required: true },
  beneficiaryAgreement: { type: Boolean, required: true },
  beneficiaryAgreementDate: { type: Date, default: Date.now(), required: true },

  project_in_charge_agree: {
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
  comment_box_project_coordinator: {
    type: String,
    default: null,
  },
  comment_box_project_coordinator_swz: {
    type: String,
    default: null,
  },
  comment_box_provincial_superior: {
    type: String,
    default: null,
  },
  amount_approved: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("CG", CommonGroup);
