import type { AnyColumn, AnyTable } from "drizzle-orm";
import { desc, getColumns } from "drizzle-orm";

import { getDb } from "../db";

type PostsTable = AnyTable<{ columns: { createdAt: AnyColumn } }>;

export const listPosts = async (postsTable: PostsTable) => {
  const db = await getDb();
  const columns = getColumns(postsTable);
  return db.select().from(postsTable).orderBy(desc(columns.createdAt));
};
