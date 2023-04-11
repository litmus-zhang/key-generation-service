import { MigrationInterface, QueryRunner } from "typeorm"

export class userRefactoring1681236973091 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            ALTER TABLE "api_key" RENAME TABLE "ApiKey";
            `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
        ALTER TABLE "ApiKey" RENAME TABLE "api_key";
        `
        )
    }

}
