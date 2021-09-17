import { ConnectionOptions } from "typeorm";

process.env.NODE_CONFIG_DIR = "./src/config";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/*.model.ts`],
  cli: {
    migrationsDir: "src/db/migrations",
  },
  migrations: ["dist/db/migrations/*.js"],
};

export = config;
