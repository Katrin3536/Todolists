import {FilterValues} from '@/features/todolists/model/todolists-reducer.ts';
import {Task} from '@/features/todolists/model/tasks-reducer.ts';


export const getFilteredTasks = ( tasks:Task[], filter:FilterValues):Task[]=> {
    switch (filter) {
        case 'Active':
            return tasks.filter(task => !task.isDone)
        case 'Completed':
            return tasks.filter(task => task.isDone)
        default:
            return tasks
    }
}

