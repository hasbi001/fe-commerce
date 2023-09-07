import http from "./http-common";

class QuoteService {
    addtocart(data) {
        return http.post("/quote/addtocart", data);
    }

    list() {
        return http.get("/quote/list");
    }
}

export default new QuoteService();