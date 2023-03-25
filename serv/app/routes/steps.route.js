module.exports = (app) => {
    const steps = require("../controllers/steps.controller.js");
    const router = require("express").Router();
  
    router.post("/", steps.create);
  
    router.get("/", steps.findAll);
  
    router.get("/:id", steps.findOne);
  
    router.put("/:id", steps.update);
  
    router.delete("/:id", steps.delete);
  
    app.use("/api/steps", router);
  }