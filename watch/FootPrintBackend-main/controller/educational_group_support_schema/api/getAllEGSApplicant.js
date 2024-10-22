const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");

const getAllEGSApplicant = async (req, res) => {
  try {
    const applicantId = req.user._id;

    const allEGSApplicants = await EducationalGroupSupportModel.find({
      "general_information.project_incharge.ref": applicantId,
    })
      .populate("general_information.project_incharge.ref")
      .populate("general_information.provincial_superior.ref")
      .populate("general_information.project_coordinators.ref");

    if (allEGSApplicants.length == 0) {
      return res.status(400).json({
        success: false,
        data: [],
        msg: "No data found for the particular applicant",
      });
    }

    return res.status(200).json({
      success: true,
      data: allEGSApplicants,
      msg: "All data for the applicant",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
      msg: "Cannot find anything for the applicant",
    });
  }
};

module.exports = getAllEGSApplicant;
