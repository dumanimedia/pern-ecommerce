import type { Config } from "drizzle-kit";

export default {
  schema: "./backend/src/db/schema.ts",
  out: "./backend/src/db/drizzle",
  driver: "pg",
  dbCredentials: { connectionString: process.env.DATABASE_URL! },
  verbose: true,
  strict: true,
} satisfies Config;
