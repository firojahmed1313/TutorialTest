const DPLG = require("../modals/DevProjLivliGroup");
// const DevProjLivliGroupValidate = require("../controller/DevProjLivliGroupValidate");
const editDPLG = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };
  // const { projectID } = req.body;
      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      // try {
      //   await DevProjLivliGroupValidate.validateAsync(modifiedReqBody);
      // } catch (error) {
      //   console.log(error);
      //   return res.status(400).json({ success: false, msg: error.message });
      // }
      const editedDPLG =await DPLG.findOneAndUpdate(
        { project_code: projectID },
        {
            NameOfSociety:req.body.NameOfSociety,
            // DateOfSubmission:req.body.DateOfSubmission,
            TitleOfProject:req.body.TitleOfProject,
            address:req.body.address,
            OverallProjectPeriod:req.body.OverallProjectPeriod,
            OverallProjectBudget:req.body.OverallProjectBudget,
            ProjectOfInitialProject:req.body.ProjectOfInitialProject,
            problemAnalysis:req.body.problemAnalysis,
            // solutionAnalysis:req.body.solutionAnalysis,
            sustainability:req.body.sustainability,
            goal:req.body.goal,
            timeFrame:req.body.timeFrame,
            objectives:req.body.objectives,
            methodology_Reporting:req.body.methodology_Reporting,
            methodology_Evolution:req.body.methodology_Evolution,
            president:req.body.president,
            current_phase:req.body.current_phase,
            monitoringProcess:req.body.monitoringProcess,
            budget_cost_table: req.body.budget_cost_table,
            studies_table_data:req.body.studies_table_data,
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
      if (!editedDPLG) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedDPLG });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editDPLG;