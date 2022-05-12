import { db, type Task } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

/**
 * Liefert alle Tasks zurück
 * @return
 */
export async function getTasks(): Promise<Array<Task>> {
    return db.tasks.toArray()
}

/**
 * Fügt ein Task hinzu
 * @param item
 */
export async function addTask(item: Task): Promise<Task> {
    const id = await db.tasks.add(item)
    return {...item, id}
}

/**
 * Speichert die Änderungen an einem Task
 * @param item
 */
export async function updateTask(item: Task): Promise<Task> {
    const id = await db.tasks.put(item)
    return {...item, id}
}

/**
 * Löscht einen Task
 * @param key
 */
export async function deleteTask(key: number): Promise<void> {
    return db.tasks.delete(key)
}

/**
 * React hook zum Holen aller Tasks
 */
export function useTasks(): Array<Task> {
    return useLiveQuery(getTasks, [], [])
}

export { type Task } from "./db"
