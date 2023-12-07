import type { Database as DB } from "./lib/database.types";

declare global {
  type Database = DB;
  type Diaries = DB["public"]["Tables"]["diaries"]["Row"];
  type Songs = DB["public"]["Tables"]["songs"]["Row"];
  type SongsBody = DB["public"]["Tables"]["songs_body"]["Row"];
  type Voices = DB["public"]["Tables"]["voices"]["Row"];
}
