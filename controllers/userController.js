import profileModel from "../models/profileModel.js";
import placementModel from "../models/placementModel.js";
export const createProfileCtrl = async (req, res) => {
  try {
    const profile = new profileModel(req.body);
    await profile.save();
    res.status(200).json({ message: "profile created success", success: true });
  } catch (error) {
    res.status(500).json({
      message: "profile creation failed",
      success: false,
      error: error.message,
    });
  }
};

export const getAllDrives = async (req, res) => {
  try {
    const alldrives = await placementModel.find({});
    res.status(200).json(alldrives);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch all drives", error });
  }
};

export const getallplacedcompanies = async (req, res) => {
  try {
    const allcompanies = await profileModel.find(
      { userId: req.params.id },
      { placedData: 1 }
    );
    res.status(200).send(allcompanies);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch placed data" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const getprofile = await profileModel.find({ userId: req.params.id });
    res.status(200).json(getprofile);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch placed data" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    profileModel.findByIdAndUpdate(
      req.body._id,
      req.body,
      // { new: true },
      (err, detail) => {
        // Handle any possible database errors
        if (err) return res.status(500).send("failed to update profile");
        return res
          .status(200)
          .send({ message: "profile updated success", detail });
      }
    );
  } catch (error) {
    res.status(501).json({ message: "failed to update details" });
  }
};

export const getDrive = async (req, res) => {
  try {
    const drive = await placementModel.findById(req.params.id);
    res.status(200).json(drive);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch drive" });
  }
};
