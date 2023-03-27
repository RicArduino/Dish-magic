import httpCommon from "@/http-common";

class RecipeDataService {
  getAll() {
    return httpCommon.get("/recipes");
  }

  get(id) {
    return httpCommon.get(`/recipes/${id}`);
  }

  create(data) {
    return httpCommon.post("/recipes", data);
  }

  update(id, data) {
    return httpCommon.put(`/recipes/${id}`, data);
  }

  delete(id) {
    return httpCommon.delete(`/recipes/${id}`);
  }

  deleteAll() {
    return httpCommon.delete(`/recipes`);
  }

  findByTitle(title) {
    return httpCommon.get(`/recipes?title=${title}`);
  }
}
export default new RecipeDataService();
