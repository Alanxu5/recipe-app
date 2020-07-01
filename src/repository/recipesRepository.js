import apiClient from '@/repository/repository';

const resource = '/recipes';
export default {
  getRecipes() {
    return apiClient.get(`${resource}`);
  },
  getRecipe(id) {
    return apiClient.get(`${resource}/${id}`);
  },  
  createRecipe(payload) {
    return apiClient.post(`${resource}`, payload);
  }
}
