const mongoose = require("mongoose");

// details of the beneficiary
// this a group project hence mulitple beneficiaries
const beneficiarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  occupation_of_parents: {
    type: String,
    required: true,
  },
  family_background_and_need_of_support: {
    type: String,
    required: true,
  },
  class_of_study_or_name_of_institution: {
    type: String,
    required: true,
  },
  eligibility_of_scholarship_and_expected_amount: {
    type: String,
    required: true,
  },
  contribution_from_family: {
    type: String,
    required: true,
  },
});

const objectiveSchema = new mongoose.Schema({
  objective: { type: String, required: true },
  results_and_outcomes: [String],
  activities: [
    {
      activity: { type: String, required: true },
      months: [Boolean],
      means_of_verification: { type: String, required: true },
    },
  ],
});

const solutionAnalysisSchema = new mongoose.Schema({
  goal: { type: String, required: true },
  objectives: [objectiveSchema],
  sustainability: String,
  monitoring_process_of_the_project: String,
  mode_of_evaluation: String,
});

const roleSchema = new mongoose.Schema({
  comment: { type: String, default: null },
  ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Approver",
  },
  agree: { type: Boolean, default: false },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const educationalGroupSupportSchema = new mongoose.Schema(
  {
    project_title: { type: String, required: true },
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
    insOrNot: {
      type: String,
      enum: ["institutional", "non-institutional"], // Only accept these two values
      required: true,
    },
    childOrYouth: {
      type: String,
      enum: ["children", "youth"], // Only accept these two values
      required: true,
    },
    general_information: {
      full_address: { type: String, required: true },
      overall_project_period: { type: String, required: true },
      // overall_project_budget: { type: Number, required: true },
      current_phase: { type: String, required: true },
      projectExecutorName: { type: String, required: true },
      projectExecutorEmail: { type: String, required: true },
      projectExecutorMobile: { type: String, required: true },
      // project_coordinators: [
      //   {
      //     comment: { type: String, default: null },
      //     ref: {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: "Approver",
      //     },
      //     agree: { type: Boolean, default: false },
      //     date: {
      //       type: Date,
      //       default: Date.now(),
      //     },
      //   },
      // ], // Group projects will have two project Coordinators
      // provincial_superior: {
      //   comment: { type: String, default: null },
      //   ref: {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: "Reviewer",
      //   }, // IN view we need data of the reviewer
      //   // For data we simply populate
      //   agree: { type: Boolean, default: false },
      //   date: {
      //     type: Date,
      //     default: Date.now(),
      //   },
      // },
      // project_incharge: {
      //   comment: { type: String, default: null },
      //   ref: {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: "Applicant",
      //   },
      //   agree: { type: Boolean, default: false },
      //   date: {
      //     type: Date,
      //     default: Date.now(),
      //   },
      // },
    },
    project_summary: {
      category: {
        type: String,
      enum: ["rural", "urban","tribal"], // Only accept these two values
      required: true,
      },
      project_location_geographical_area: { type: String, required: true },
      work_of_sisters_of_st_anns_in_the_project_area: String,
      general_socio_economic_conditions_of_the_beneficiaries: String,
      problems_identified_and_consequences: String,
      need_of_the_project: String,
      beneficiarySelection:String,
      target_group: [beneficiarySchema],
      solution_analysis_logical_framework: solutionAnalysisSchema,
      // sustainability: String,
      // monitoring_process_of_the_project: String,
      // mode_of_evaluation: String,
      budget: {
        expenses: [
          {
            description: { type: String, required: true },
            costs: { type: Number, required: true },
          },
        ],
        total: {
          type: Number,
          default: 0,
        },
      },

    },
    benificary_agree: {
      agree: { type: Boolean, dafault: false },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
    // agree_syntax_changed
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
    // agree_sytanx_changed
    project_in_charge_agree: {
      agree: { type: Boolean, default: false },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
    //agree_syntax_changed
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
    amount_approved: { type: Number, default: 0 },
  },
  { timestamps: true }
);

educationalGroupSupportSchema.index({
  project_number: -1, // -1 implies the indexing will happen in decreasing order
});

module.exports = mongoose.model(
  "education_group_support",
  educationalGroupSupportSchema
);
