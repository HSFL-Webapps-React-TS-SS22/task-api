import Dexie, { Table } from 'dexie';

export interface Task {
    id?: number
    title: string
    complete: boolean
    description: string
    tags: string[]
}

export class TaskApplicationDexie extends Dexie {
    tasks!: Table<Task, number>;

    constructor() {
        super('task-application')
        this.version(1).stores({
            tasks: '++id, title, complete', // Primary key and indexed props
        });
    }
}

export const db = new TaskApplicationDexie();

