
// this time find all where applicant is the applicant

const HIVAffectedOutreach = require("../../../modals/HIVAffectedOutreach");

const getAllHIVReviewer = async (req, res) => {
  console.log("Error");
  try {
    // validitiy of user will be checked from the token itself
    // you have to querry by project_in_charge.ref

    const reviewerId = req.user._id;

    // find by applicant
    const allHIVProject = await HIVAffectedOutreach
      .find({
        "mailing_list.provincial_superior.ref": reviewerId,
      })
      .populate("mailing_list.project_in_charge.ref")
      .populate("mailing_list.provincial_superior.ref")
      .populate("mailing_list.project_coordinators.ref");
      console.log(allHIVProject);

    if (!allHIVProject) {
      return res.status(400).json({
        status: false,
        msg: `Unable to fetch any projects for the reviewer`,
      });
    }
    return res.status(200).json({
      status: true,
      msg: "successfully got all projects",
      data: allHIVProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      msg: "Cannot fetch any projects",
      error: error.message,
    });
  }
};

module.exports = getAllHIVReviewer;
