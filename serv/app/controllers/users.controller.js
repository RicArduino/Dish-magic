const db = require("../models");
const userModel = require("../models/users.model");
const jwt = require("jsonwebtoken");
const User = db.users;
const bcrypt = require("bcryptjs");
//const OP = db.Sequelize.Op
const https = require("http");

exports.findAll = (req, res) => {
  User.findAll().then((data) => {
    res.send(data);
  });
};

exports.create = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.lastname ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  ) {
    res.status(400).send({
      message: "User must have name, email and name !",
    });
    return;
  }
  if(req.body.password.length < 6){
    res.status(401).send({
        message: "Password must be at least 6 characters long !",
        });
        return;
    }

    if(req.body.password.length > 20){
        res.status(402).send({
            message: "Password must be less than 20 characters long !",
            });
            return;
        }

    if (await User.findOne({ where: { email: req.body.email } })) {
      res.status(403).send({
        message: "User already exists !",
      });
      return;
    } 
    if (await User.findOne({ where: { phone: req.body.phone } })) {
      res.status(404).send({
        message: "Phone already exists !",
      });
      return;
    }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  await User.create({
    lastname: req.body.lastname,
    firstname: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashPassword,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not insert the data",
      });
    });
};

exports.findOne = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return res.status(402).send({
      message: "Email not found",
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(401).send({
      message: "password incorrect",
    });
  }
  const token = jwt.sign({ id: user.id }, "secret");
  console.log(token)
  //withCredentials = true on the client side (http)
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  user.update({
    token: token,
  });
  const { password, ...data } = await user.toJSON();
  res.send({
    token: token,
    user: data,
  });
};

exports.auth = async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    const claims = jwt.verify(cookie, "secret");

    if (!claims) {
      return res.status(401).send({
        message: "unauthenticated",
      });
    }

    const user = await User.findOne({ id: claims.id });
    const { password, ...data } = await user.toJSON();
    //console.log(data)
    res.send(data);
  } catch (e) {
    return res.status(401).send({
      message: "unauthenticated",
    });
  }
};

exports.logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "success",
  });
};
    
