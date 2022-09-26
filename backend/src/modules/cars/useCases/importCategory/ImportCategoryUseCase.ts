import fs from "node:fs";
import { parse } from "csv-parse";

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface ImportCategoryRequest {
  file: Express.Multer.File;
}

interface ImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<ImportCategory[]> {
    return new Promise((resolve, reject) => {
      const strem = fs.createReadStream(file.path);
      const categories: ImportCategory[] = [];

      const parseFile = parse();

      strem.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("err", (err) => {
          reject(err);
        });
    });
  }

  async execute({ file }: ImportCategoryRequest): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlreadyExists = this.categoriesRepository.findByName(name);

      if (!categoryAlreadyExists) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}
