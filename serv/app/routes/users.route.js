module.exports = (app) => {
    const users = require("../controllers/users.controller.js");
    const router = require("express").Router();
  
    router.post("/", users.create);
  
    router.get("/", users.findAll);

    router.post("/login", users.findOne);
  
    router.get("/auth", users.auth);
  
    router.get("/logout", users.logout);
  
    app.use("/api/user", router);
  };
  