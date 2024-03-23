import { createId } from "@paralleldrive/cuid2";
import { pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const userRoles = pgEnum("role", ["ADMIN", "MANAGER", "CUSTOMER"]);

export const users = pgTable("users", {
  id: text("id")
    .unique()
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  image: text("image").default(""),
  role: userRoles("role").default("CUSTOMER").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
