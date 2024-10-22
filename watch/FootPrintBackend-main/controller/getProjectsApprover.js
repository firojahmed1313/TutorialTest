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

const getProjectsApprover=async(req,res)=>{
try {
    const arr = [];
    const CGapprover=await CG.find({ }).populate('applicant').populate('reviewer')
    arr.push({ name: "CG", data: CGapprover });
    const DPLGapprover=await DPLG.find({ }).populate('applicant').populate('reviewer')
    arr.push({ name: "DPLG", data: DPLGapprover });
    const EGapprover=await EG.find({ }).populate('applicant').populate('reviewer')
    arr.push({ name: "EG", data: EGapprover });
    const EIapprover=await EI.find({ }).populate('applicant').populate('reviewer')
    arr.push({ name: "EI", data: EIapprover });
    const EOIapprover=await EOI.find({ }).populate('applicant').populate('reviewer')
    arr.push({ name: "EOI", data: EOIapprover });
    const HOIapprover=await HOI.find({}).populate('applicant').populate('reviewer')
    arr.push({ name: "HOI", data: HOIapprover });
    const ISGapprover=await ISG.find({ }).populate('applicant').populate('reviewer')
    arr.push({ name: "ISG", data: ISGapprover });
    const LOIapprover=await LOI.find({}).populate('applicant').populate('reviewer')
    arr.push({ name: "LOI", data: LOIapprover });
    const SIapprover=await SI.find({}).populate('applicant').populate('reviewer')
    arr.push({ name: "SI", data: SIapprover });
    const allWHFCProject = await NextPhaseOfDevelopmentProposal
    .find({})
    .populate("mailing_list.project_in_charge.ref")
    .populate("mailing_list.provincial_superior.ref")
    .populate("mailing_list.project_coordinators.ref");
    arr.push({ name: "NPDP", data: allWHFCProject });
    const allHIVProject = await HIVAffectedOutreach
    .find({})
    .populate("mailing_list.project_in_charge.ref")
    .populate("mailing_list.provincial_superior.ref")
    .populate("mailing_list.project_coordinators.ref");
    arr.push({ name: "HIV", data: allHIVProject });
    const allEGSApprover = await EducationalGroupSupportModel.find({})
    .populate("applicant")
    .populate("reviewer")
    // .populate("general_information.project_coordinators.ref");
    arr.push({ name: "EGS", data: allEGSApprover });

    return res.json({ success: true, data: arr });
} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getProjectsApprover