interface ImportCategoryRequest {
  file: Express.Multer.File;
}

export class ImportCategoryUseCase {
  execute({ file }: ImportCategoryRequest): void {
    console.log(file);
  }
}
