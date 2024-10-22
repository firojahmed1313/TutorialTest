const CG = require("../modals/CommonGroup");

const editCGapprover = async (req, res) => {
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
      !projectID
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedCG = await CG.findByIdAndUpdate(
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

    if (!editedCG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedCG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editCGapprover;
