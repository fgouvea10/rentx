import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCarImageMigration1665515771573 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "cars",
      new TableColumn({
        name: "image",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("cars", "image");
  }
}
