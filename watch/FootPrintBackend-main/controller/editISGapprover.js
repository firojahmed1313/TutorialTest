const ISG = require("../modals/InstitutionSkillGroup");

const editISGapprover = async (req, res) => {
  try {
    const {
      projectID,
      comment_box_project_coordinator,
      comment_box_project_coordinator_swz,
      project_coordinator_agree,
      project_coordinator_agree_swz,
      amount_approved, 
    } = req.body;
    if (
      !projectID ||
      !comment_box_project_coordinator_swz||
      project_coordinator_agree === undefined||
      project_coordinator_agree_swz === undefined
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedISG = await ISG.findByIdAndUpdate(
      projectID,
      {
        comment_box_project_coordinator: comment_box_project_coordinator,
        comment_box_project_coordinator_swz: comment_box_project_coordinator_swz,
        project_coordinator_agree_swz: project_coordinator_agree_swz,
        project_coordinator_agree: project_coordinator_agree,
        amount_approved : amount_approved , 
      },
      { new: true }
    );

    if (!editedISG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedISG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editISGapprover;
