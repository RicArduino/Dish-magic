import http from "../http-common";
class UserDataService {
  create(data) {
    return http.post("/user", data);
  }

  postLogin(data) {
    return http.post("/user/login", data);
  }

  getAuth() {
    return http.get("/user/auth");
  }

  getLogout() {
    return http.get("/user/logout");
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }
}
export default new UserDataService();
