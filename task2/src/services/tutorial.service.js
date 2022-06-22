import http from "../http-common";

class TutorialDataService {

  getAll() {
    return http.get("https://gorest.co.in/public/v2/users");
  }

  get(id) {
    return http.get(`https://gorest.co.in/public/v2/users/${id}`);
  }

  create(data) {      
    return http.post("https://gorest.co.in/public/v2/users",  data,{headers : {Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'}});
  }

  update(id, data) {
    
    return http.put(`https://gorest.co.in/public/v2/users/${id}`, data,{headers : {Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'}});
  }

  delete(id) {
    return http.delete(`https://gorest.co.in/public/v2/users/${id}`,{headers : {Authorization: 'Bearer 489d544765eae2a983ad8969b8ff4f5960e934844f4171ae740b06683a916561'}} );
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByName(name) {
    return http.get(`https://gorest.co.in/public/v2/users?name=${name}`);
  }
}

export default new TutorialDataService();