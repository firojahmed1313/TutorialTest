const HOI = require("../modals/HealthOngoingIndividual");

const editHOIapprover = async (req, res) => {
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
    console.log(project_coordinator_agree);
    const editedHOI = await HOI.findByIdAndUpdate(
      projectID,
      {
        comment_box_project_coordinator: comment_box_project_coordinator,
        comment_box_project_coordinator_swz: comment_box_project_coordinator_swz,
        project_coordinator_agree_swz: project_coordinator_agree_swz,
        project_coordinator_agree: project_coordinator_agree,
        amount_approved:amount_approved
      },
      { new: true }
    );

    if (!editedHOI) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedHOI });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editHOIapprover;
