const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");
// const educationalGroupSupportSchema = require("../validation/educationalGroupSupportSchema");

const editEGSApplicant = async (req, res) => {
  try {
    // first evaluate req body
    // request body contains your required data
    // use of the json middleware makes the request body a json object

    // try {
    //   console.log(req.body);
    //   await educationalGroupSupportSchema.validateAsync(req.body);
    // } catch (error) {
    //   return res.status(400).json({
    //     msg: "Error validating, please check the fields",
    //     error: error.message,
    //     success: false,
    //   });
    // }

    // We are using JWT auth tokens
    // Those token integrate the current users in the request
    // so we extract those user data from the request
    // vallidation successfull => all the fields are there

    // extract all the fields for use
    // const { project_number } = req.body;
    // console.log(project_number);

    const { projectID } = req.body;

    if (!projectID) {
      res.json({ success: false, msg: "send project ID" });
    }

    // you have the fields that were sent in the request body
    // const project_number

    // ^ -- start $ end
    // ^ from start match these symbols

    // Review pages and approval pages
    // comment , revereted projects
    // comment ##123 comment = `Previous Comment : ${Comment} `
    // Reviewer view
    // Previous comment , edit
    // Previous comment , reviewer saw it, checked again on that particular field , Comment overwrite

    const editEGS = await EducationalGroupSupportModel.findOneAndUpdate(
      { project_code: projectID },
      {
        ...req.body,
        // general_information: {
        //   ...req.body.general_information,
        //   provincial_superior: {
        //     agree: false,
        //     comment: null,
        //     ref: req.user.reviewer,
        //   },
        //   project_coordinators: [],
        //   project_incharge: {
        //     agree: true,
        //     date: Date.now(),
        //     ref: req.user._id,
        //     comment: null,
        //   },
        // },
        project_in_charge_agree: req.body.project_in_charge_agree,
        provincial_superior_agree: req.body.provincial_superior_agree,
        comment_box_provincial_superior:
          req.body.comment_box_provincial_superior,
        project_coordinator_agree: req.body.project_coordinator_agree,
        project_coordinator_agree_swz: req.body.project_coordinator_agree_swz,
        comment_box_project_coordinator:
          req.body.comment_box_project_coordinator,
        comment_box_project_coordinator_swz:
          req.body.comment_box_project_coordinator_swz,
      },
      { new: true }
    );

    return res.status(200).json({
      date: editEGS,
      success: true,
      msg: "Successful submission of form",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
      msg: `Unexpected error submitting the form`,
    });
  }
};

module.exports = editEGSApplicant;
``;
