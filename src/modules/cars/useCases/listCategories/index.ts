import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";
import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstace();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
);

export { listCategoriesController };
