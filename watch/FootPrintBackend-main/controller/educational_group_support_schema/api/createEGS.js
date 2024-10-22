const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");
const educationalGroupSupportSchema = require("../validation/educationalGroupSupportSchema");

const createEGS = async (req, res) => {
 
  try { 
    // first evaluate req body
    // request body contains your required data
    // use of the json middleware makes the request body a json object

    // validate request body
    // try {
    //   await educationalGroupSupportSchema.validateAsync(req.body);
    // } catch (error) {
    //   return res.status(400).json({
    //     msg : "Error validating, please check the fields",
    //     error: error.message,
    //     success: false,
    //   });
    // }

    // We are using JWT auth tokens
    // Those token integrate the current users in the request
    // so we extract those user data from the request
    // const applicant = req.user._id;
    // const reviewer = req.user.reviewer;
    const currentDate = new Date(); 
    const currentYear = currentDate.getFullYear();
    // vallidation successfull => all the fields are there
    // console.log("runn");
    // extract all the fields for use
    const {
      project_title,
      insOrNot,
      childOrYouth,
      general_information,
      objectives,
      project_summary,
      expenses,
    } = req.body;

    // you have the fields that were sent in the request body
    // const project_number

    // ^ -- start $ end
    // ^ from start match these symbols

    // const regex = new RegExp(`^ES${currentYear}`);

    // const projectCode = await EducationalGroupSupportModel.findOne(
    //   { project_number: { $regex: regex } },
    //   { project_number: 1, _id: 0 }
    // );
    // // result -- {project_number: ES20243}

    // let projectNumber = `ES${currentYear}`;
    // // if the required field is not present then null is returned
    // if (!projectCode) {
    //   projectNumber = `${projectNumber}0`; // first element
    // } else {
    //   projectNumber = `${projectNumber}${
    //     parseInt(`${projectCode.project_number}`.substring(6)) + 1
    //   }`;
    // }
    let projectCode = 0;
    const projectExists = await EducationalGroupSupportModel.findOne({ project_title });
    if (projectExists) {
      return res.json({ success: false, msg: "This project title exists" });
    }
    const allEGs = await EducationalGroupSupportModel.find({}, "project_code");
    if (allEGs.length === 0) {
      projectCode = `EGS${currentYear}0`;
    } else {
      projectCode = `EGS${currentYear}${
        parseInt(allEGs[allEGs.length - 1].project_code.slice(-1)) + 1
      }`;
    }

    const updatedGeneralInformation = {
      ...general_information,
      // project_incharge: {
      //   agree: true,
      //   date: currentDate,
      //   ref: applicant,
      // },
      // provincial_superior: {
      //   ref: reviewer,
      // },
    };

    // console.log(req.user)
    // console.log(insOrNot)

    // project_number , present_project_year

    await EducationalGroupSupportModel.create({
      project_code: projectCode,
      general_information: updatedGeneralInformation,

      applicant: req.user,
      reviewer: req.user.reviewer, 
      project_title,
      insOrNot,
      childOrYouth,
      objectives,
      project_summary,
      expenses,
      project_in_charge_agree: req.body.project_in_charge_agree,
    });

    return res.status(200).json({
      success: true,
      msg: "Successful submission of form",
    });
  } catch (error) {
    // console.log(error)
    return res.status(400).json({
      success: false,
      error: error.message,
      msg: `Unexpected error submitting the form`,
    });
  }
};

module.exports = createEGS ; 