module.exports = (app) => {
    
    const ingredient = require("../controllers/ingredient.controller.js");
    const router = require("express").Router();
  
    router.post("/", ingredient.create);
  
    router.get("/", ingredient.findAll);
  
    router.get("/:id", ingredient.findOne);
  
    router.put("/:id", ingredient.update);
  
    router.delete("/:id", ingredient.delete);
  
    app.use("/api/ingredient", router);
  }