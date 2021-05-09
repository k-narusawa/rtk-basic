import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type Task = {
    id: number,
    title: string,
    completed: boolean
}

export interface TaskState {
    idCount: number,
    tasks: Task[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: TaskState = {
    idCount: 3,
    tasks: [
      {id: 1, title: "TASK A", completed: false},
      {id: 2, title: "TASK B", completed: true},
      {id: 3, title: "TASK C", completed: false}
    ],
    status: 'idle',
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    newTask : (state, action) => {
      state.idCount += 1;
      const newItem = {
          id: state.idCount,
          title: action.payload,
            completed: false
      }
      state.tasks = [newItem, ...state.tasks]
    },
    completeTask: (state, action) => {
        const task = state.tasks.find((task: Task)=> task.id === action.payload.id)
        if(task){
            task.completed = !task.completed
        }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task: Task)=> task.id!==action.payload.id)
    },
  }
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: any) => state.task.tasks;


export default taskSlice.reducer;
