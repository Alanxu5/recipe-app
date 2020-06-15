import RecipesRepository from '@/repository/recipesRepository';

const repositories = {
  recipes: RecipesRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};