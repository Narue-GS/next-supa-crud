import postgres from "postgres";


export function rowToObjectArray(row:postgres.RowList<postgres.Row[]>) {
  let objectArray = [row.map(i => i)]
  return objectArray
}