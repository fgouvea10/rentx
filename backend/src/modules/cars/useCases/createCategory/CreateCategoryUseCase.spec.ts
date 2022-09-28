import { CategoriesRepositoryInMemory } from "../../repositories/inMemory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: 'Category test',
      description: 'Category description test',
    }
    await createCategoryUseCase.execute(category);
    
    const createdCategory = await categoriesRepositoryInMemory.findByName(category.name)

    expect(createdCategory).toHaveProperty('id');
  });
});
