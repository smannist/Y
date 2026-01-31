import mssql from "mssql";
import { drizzle } from "drizzle-orm/node-mssql";

const createDb = (client: mssql.ConnectionPool) => drizzle({ client });

let db: ReturnType<typeof createDb> | undefined;
let poolPromise: Promise<mssql.ConnectionPool> | undefined;

const getConnection = async (): Promise<mssql.ConnectionPool> => {
  if (!process.env.DATABASE_URL) throw new Error("Missing DATABASE_URL");
  poolPromise ??= mssql.connect(process.env.DATABASE_URL);
  return poolPromise;
};

export const getDb = async (): Promise<ReturnType<typeof createDb>> => {
  if (db) return db;
  const pool = await getConnection();
  db = createDb(pool);
  return db;
};
