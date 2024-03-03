
const bcrypt = require("bcrypt");
const { generateToken } = require("../utilis.js");
const User = require("../model/signup.js");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const existEmail = await User.findOne({ email: email });
      const loginSuccess = await bcrypt.compare(
        password,
        existEmail.password || ""
      );
   generateToken(existEmail._id, res); 
      if (loginSuccess) {
        res.status(200).json({
          Message: "Login Successfully!",
          data: {
            _id: existEmail?._id,
            email: existEmail?.email,
          },
        });
      } else {
        res.status(400).json({ Message: "Invalid Password!" });
      }
    } catch (err) {
      res.status(500).json({ error: `something went wrong ${err.message}` });
    }
  },

  signUp: async (req, res) => {
    console.log(req.body, "---");
    
    try {
      const deletes = await User.findOne({ email: req.body?.email });
      console.log(deletes, "delete");

      if (req.body?.email === deletes?.email) {
        return res
          .status(400)
          .send({
            status: 400,
            message: `${deletes?.email} is already exsits!`,
          });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body?.password, salt);

      const formData = new User({
        email: req.body?.email,
        password: hashPass,
      });

      if (formData) {
        const resp = await formData.save();
        console.log(resp);
        res.send({
          Message: "User Created! ",
          data: {
            _id: resp._id,
            email: resp.email,
            token: generateToken(resp._id, res),
          },
        });
      }
    } catch (err) {
      res.status(500).send("somethig went wrong!");
    }
  },
  logout: async (req, res) => {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(201).send("Logout succesfully!");
  },
};