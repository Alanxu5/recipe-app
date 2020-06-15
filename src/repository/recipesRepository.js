import { httpClient } from './repository';

const resource = '/recipes';
export default {
  getRecipes() {
    return httpClient.get(`${resource}`);
  },
  getRecipe(id) {
    return httpClient.get(`${resource}/${id}`);
  },  
  createRecipe(payload) {
    return httpClient.post(`${resource}`, payload);
  }
}
