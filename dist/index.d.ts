import { type Task } from "./db";
/**
 * Liefert alle Tasks zurück
 * @return
 */
export declare function getTasks(): Promise<Array<Task>>;
/**
 * Fügt ein Task hinzu
 * @param item
 */
export declare function addTask(item: Task): Promise<Task>;
/**
 * Speichert die Änderungen an einem Task
 * @param item
 */
export declare function updateTask(item: Task): Promise<Task>;
/**
 * Löscht einen Task
 * @param key
 */
export declare function deleteTask(key: number): Promise<void>;
/**
 * React hook zum Holen aller Tasks
 */
export declare function useTasks(): Array<Task>;
export { type Task } from "./db";
