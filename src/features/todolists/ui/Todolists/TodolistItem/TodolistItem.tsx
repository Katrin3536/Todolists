import {TodolistTitle} from './TodolistTitle/TodolistTitle.tsx';
import {Tasks} from './Tasks/Tasks.tsx';
import {FilterButtons} from './FilterButtons/FilterButtons.tsx';
import {useAppDispatch} from '@/common/hooks/useAppDispatch.ts';
import {TodolistType} from '@/features/todolists/model/todolists-reducer.ts';
import {createTaskAC} from '@/features/todolists/model/tasks-reducer.ts';
import {CreateItemForm} from '@/common/components/CreateItemForm/CreateItemForm.tsx';

type Props = {
    todolist: TodolistType,
}

export const TodolistItem = ({todolist: {id, title, filter}}: Props) => {

    const dispatch = useAppDispatch();

    const createTask = (title: string) => {
        // const newTask: Task = {
        //     id: v1(),
        //     title: title,
        //     isDone: false
        // };
        // const newTasks = (prevState: Tasks) => ({...prevState, [todolistId]: [newTask, ...prevState[todolistId]]});
        // setTasks(newTasks);
        dispatch(createTaskAC({todolistId: id, title}));
    };

    return (
        <div>
            <TodolistTitle id={id} title={title}/>
            <CreateItemForm onCreateItem={createTask}/>
            <Tasks id={id} filter={filter}/>
            <FilterButtons id={id} filter={filter}/>
        </div>
    );

};


// const changeTaskStatus = (payload: { todolistId: string, taskId: string, status: boolean }) => {
//     const {todolistId, taskId, status} = payload;
//     dispatch(changeTaskStatusAC({todolistId, taskId, isDone: status}));
//     // setTasks((prevState: Tasks) => ({
//     //     ...prevState,
//     //     [todolistId]: prevState[todolistId].map(task => task.id === taskId ? {...task, isDone: status} : task)
//     // }));
// };

// const changeTaskTitle = (payload: { todolistId: string, taskId: string, title: string }) => {
//     const {todolistId, taskId, title} = payload;
//     dispatch(changeTaskTitleAC({todolistId, taskId, title}));
//     // setTasks((prevState: Tasks) => ({
//     //     ...prevState,
//     //     [todolistId]: prevState[todolistId].map(task => task.id === taskId ? {...task, title} : task)
//     // }));
// };


// const deleteTask = (payload: { todolistId: string, taskId: string }) => {
//     const {todolistId, taskId} = payload;
//     dispatch(deleteTaskAC({todolistId, taskId}));
//     // setTasks((prevState: Tasks) => ({
//     //     ...prevState,
//     //     [todolistId]: prevState[todolistId].filter(t => t.id !== taskId)
//     // }));
// };