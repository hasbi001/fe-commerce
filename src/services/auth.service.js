import http from "./http-common";

class AuthService {
    signup(data) {
        return http.post("/auth/signup", data);
    }

    signin(data) {
        return http.post("/auth/signin", data);
    }

    signout() {
        return http.get("/auth/signout");
    }
}

export default new AuthService();