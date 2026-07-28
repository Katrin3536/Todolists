import {RootState} from 'src/app/store.ts';
import {TodolistType} from '@/features/todolists/model/todolists-reducer.ts';


export const selectTodolists=(state:RootState):TodolistType[]=>state.todolists