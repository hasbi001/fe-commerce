import http from "./http-common";

class AuthService {
    signup(data) {
        return http.post("/auth/signup", data);
    }

    async signin(data) {
        const url = await http.post("/auth/signin", data);
        return url;
    }

    signout() {
        return http.get("/auth/signout");
    }
}

export default new AuthService();