import Dexie, { Table } from 'dexie';
export interface Task {
    id?: number;
    title: string;
    complete: boolean;
    description: string;
    tags: string[];
}
export declare class TaskApplicationDexie extends Dexie {
    tasks: Table<Task, number>;
    constructor();
}
export declare const db: TaskApplicationDexie;
