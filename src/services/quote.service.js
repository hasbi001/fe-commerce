import http from "./http-common";

class QuoteService {
    addtocart(data) {
        return http.post("/quote/addtocart", data);
    }

    list(data) {
        return http.post("/quote/list", data);
    }
}

export default new QuoteService();