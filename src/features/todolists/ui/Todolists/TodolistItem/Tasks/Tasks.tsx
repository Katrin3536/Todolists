import List from '@mui/material/List';
import {TaskItem} from './TaskItem/TaskItem.tsx';
import {FilterValues} from '@/features/todolists/model/todolists-reducer.ts';
import {useAppSelector} from '@/common/hooks/useAppSelector.ts';
import {selectTasks} from '@/features/todolists/model/tasks-selectors.ts';
import {getFilteredTasks} from '@/utils.ts';

type Props = {
    id: string;
    filter: FilterValues
}

export const Tasks = ({id, filter}: Props) => {

    const tasks = useAppSelector(selectTasks);

    const filteredTasks = getFilteredTasks(tasks[id], filter);

    return (
        <>
            {filteredTasks.length === 0 ? (<p>" No tasks"</p>) :
                (<List>{filteredTasks.map((task) => {
                        return (<TaskItem key={task.id} task={task} todolistId={id}/>);
                    })}
                    </List>
                )}
        </>
    );
};