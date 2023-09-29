import http from "./http-common";

class ProductService {
    create(data) {
        return http.post("/product/create", data);
    }

    list() {
        return http.post("/product/list");
    }

    view(id) {
        return http.get("/product/view/"+id);
    }
    
    update(data,id) {
        return http.put("/product/update/"+id, data);
    }

    delete(id) {
        return http.delete("/product/delete/"+id);
    }
}

export default new ProductService()