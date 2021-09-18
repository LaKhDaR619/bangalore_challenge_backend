import { createConnection, Connection } from 'typeorm';

const connectDB = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/../../**/**/*.model{.ts,.js}`],
    synchronize: false,
    cli: {
      migrationsDir: 'src/db/migrations',
    },
    migrations: ['dist/db/migrations/*.js'],
  });

export default connectDB;
