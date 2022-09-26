interface ImportCategoryRequest {
  file: any;
}

export class ImportCategoryUseCase {
  execute({ file }: ImportCategoryRequest) {
    console.log(file);
  }
}
