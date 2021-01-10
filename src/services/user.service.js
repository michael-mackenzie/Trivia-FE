import http from "../http-common";

class UserDataService {

  findOrCreateUser(data) {
    return http.post("/users", data);
  }

  updateUserNickname(data) {
    return http.put("/users", data);
  }

  createAttempt(data) {
    return http.post("/users/attempts/create", data);
  }

  findAllDailyUserAttempts(data) {
    return http.post("/users/attempts", data);
  }

  findUserLeaderboard() {
    return http.get("/users/leaderboard");
  }
}

export default new UserDataService();
