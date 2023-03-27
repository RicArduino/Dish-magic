module.exports = (app) => {
  const recipe = require("../controllers/recipe.controller.js");
  const router = require("express").Router();

  router.post("/", recipe.create);

  router.get("/", recipe.findAll);

  router.get("/:id", recipe.findOne);

  router.put("/:id", recipe.update);

  router.delete("/:id", recipe.delete);

  router.get("/origin", recipe.FindByOrigin);

  router.get("/community", recipe.FindByCommunity);

  app.use("/api/recipe", router);
};
