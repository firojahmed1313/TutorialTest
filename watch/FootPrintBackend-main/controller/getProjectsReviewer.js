const SI = require("../modals/SocialIndividual");
const LOI = require("../modals/LivlihoodOngoingIndividual");
const EI = require("../modals/EducationIndividual");
const EG = require("../modals/EducationGroup");
const CG = require("../modals/CommonGroup");
const EOI = require("../modals/EducationOngoingIndividual");
const HOI = require("../modals/HealthOngoingIndividual");
const DPLG = require("../modals/DevProjLivliGroup");
const ISG = require("../modals/InstitutionSkillGroup");
const NextPhaseOfDevelopmentProposal = require("../modals/NextPhaseOfDevelopmentProposal");
const HIVAffectedOutreach = require("../modals/HIVAffectedOutreach");
const EducationalGroupSupportModel = require("../modals/EducationalGroupSupportModel");
const getprojectsReviewer = async (req, res) => {
  try {
    const reviewer = req.user;
    const arr = [];
    const SIapplicant = await SI.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "SI", data: SIapplicant });
    const LOIapplicant = await LOI.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "LOI", data: LOIapplicant });
    const EIapplicant = await EI.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "EI", data: EIapplicant });
    const EGapplicant = await EG.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "EG", data: EGapplicant });
    const CGapplicant = await CG.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "CG", data: CGapplicant });
    const DPLGapplicant = await DPLG.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "DPLG", data: DPLGapplicant });
    const EOIapplicant = await EOI.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "EOI", data: EOIapplicant });
    const HOIapplicant = await HOI.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "HOI", data: HOIapplicant });

    const ISGapplicant = await ISG.find({ reviewer: reviewer })
      .populate("reviewer")
      .populate("applicant");
    arr.push({ name: "ISG", data: ISGapplicant });
    const allNPDP = await NextPhaseOfDevelopmentProposal.find({
      "mailing_list.provincial_superior.ref": reviewer,
    })
      .populate("mailing_list.project_in_charge.ref")
      .populate("mailing_list.provincial_superior.ref")
      .populate("mailing_list.project_coordinators.ref");
    arr.push({ name: "NPDP", data: allNPDP });
    const allHIVProject = await HIVAffectedOutreach.find({
      "mailing_list.provincial_superior.ref": reviewer,
    })
      .populate("mailing_list.project_in_charge.ref")
      .populate("mailing_list.provincial_superior.ref")
      .populate("mailing_list.project_coordinators.ref");

    arr.push({ name: "HIV", data: allHIVProject });

    const allEGSApplicants = await EducationalGroupSupportModel.find({
      "general_information.provincial_superior.ref": reviewer,
    })
      .populate("general_information.project_incharge.ref")
      .populate("general_information.provincial_superior.ref")
      .populate("general_information.project_coordinators.ref");

    arr.push({ name: "EGS", data: allEGSApplicants });

    return res.json({ success: true, data: arr });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = getprojectsReviewer;
