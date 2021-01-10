import http from "../http-common";

class QuestionDataService {
  createQuestion(data) {
    return http.post("/questions", data);
  }

  getQuestions() {
    return http.get("/questions");
  }
}

export default new QuestionDataService();
