import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {TodolistItem} from './TodolistItem/TodolistItem.tsx';
import {selectTodolists} from '@/features/todolists/model/todolists-selectors.ts';
import {useAppSelector} from '@/common/hooks/useAppSelector.ts';

export const Todolists = () => {

    const todolists = useAppSelector(selectTodolists);

    return (
        <>
            {todolists.map(tl => {
                return (
                    <Grid key={tl.id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <TodolistItem
                                todolist={tl}
                            />
                        </Paper>
                    </Grid>);
            })}
        </>
    );
};