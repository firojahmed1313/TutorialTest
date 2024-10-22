const EG = require("../modals/EducationGroup");
// const EducationGroupValidate = require("./EducationGroupValidate");
const editEG = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };

      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      // try {
      //   await EducationGroupValidate.validateAsync(modifiedReqBody);
      // } catch (error) {
      //   console.log(error);
      //   return res.status(400).json({ success: false, msg: error.message });
      // }
      const editedEG =await EG.findOneAndUpdate(
        { project_code: projectID },
        {
          // Take care of all the dates as well as the date of project_in_charge agreement be correct
          NameOfSociety: req.body.NameOfSociety,
          DateOfSubmission: req.body.DateOfSubmission,
          TitleOfProject: req.body.TitleOfProject,
          address: req.body.address,
          OverallProjectPeriod: req.body.OverallProjectPeriod,
          OverallProjectBudget: req.body.OverallProjectBudget,
          beneficiariesSupported: req.body.beneficiariesSupported,
          outcomeImpact: req.body.outcomeImpact,
          goal: req.body.goal,
          objectives: req.body.objectives,
          ongoingBeneficiary:req.body.ongoingBeneficiary,
          contacts: req.body.contacts,
          peopleDetails: req.body.peopleDetails,
          targetGroupInformation: req.body.targetGroupInformation,
          targetGroupStudies: req.body.targetGroupStudies,
          otherActivities: req.body.otherActivities,
          monitoringMethods: req.body.monitoringMethods,
          currentPhase:req.body.currentPhase,
          evaluationProcess: req.body.evaluationProcess,
          insOrNot:req.body.insOrNot,
          childOrYouth:req.body.childOrYouth,
          conclusion: req.body.conclusion,
          project_in_charge_agree: req.body.project_in_charge_agree,
          provincial_superior_agree: req.body.provincial_superior_agree,
          comment_box_provincial_superior: req.body.comment_box_provincial_superior,
          project_coordinator_agree: req.body.project_coordinator_agree,
          project_coordinator_agree_swz:req.body.project_coordinator_agree_swz,
          comment_box_project_coordinator: req.body.comment_box_project_coordinator,
          comment_box_project_coordinator_swz:req.body.comment_box_project_coordinator_swz,
          amount_approved:req.body.amount_approved
        },
        { new: true }
      );
      if (!editedEG) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedEG });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editEG;