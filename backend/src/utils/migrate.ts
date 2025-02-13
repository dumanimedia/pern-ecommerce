import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
  });
  const db = drizzle(pool);

  console.log("[migrate] Running migrations ...");
  await migrate(db, { migrationsFolder: "./backend/src/db/drizzle" });
  console.log("[migrate] Migrations ran successfully, exiting ...");

  await pool.end();
}

main();
