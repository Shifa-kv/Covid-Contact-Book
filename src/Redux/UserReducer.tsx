import { createSlice } from "@reduxjs/toolkit";

type Contact = {
    id?: number;
    uname: string;
    phone: number;
    status: boolean;
} | null
const initialstate: Contact[] = []
const generateUID = (data: Contact[]): number => {
    if (data.length >= 1) {
        const maxID = Math.max(...data.map((user: any) => user.id))
        return maxID + 1;
    } else {
        return 100;
    }
}

const UserSlice = createSlice({
    name: 'user',
    initialState: initialstate,
    reducers: {
        adding: (state, action) => {
            return [
                ...state,
                {
                    uname: action.payload.uname,
                    id: generateUID(state),
                    phone: action.payload.phone,
                    status: action.payload.status
                }
            ];
        },
        deleting: (state, action) => {
            console.log('deleting', action.payload)
            return state.filter(res => res?.id !== action.payload)

        },
        editing: (state, action) => {
            const editIndex: number = state.findIndex(res => res?.id === action.payload.id)
            if (editIndex !== -1) {
                state[editIndex] = { ...state[editIndex], ...action.payload };
            }
            return state;
        }
    }
})

const { adding, deleting, editing } = UserSlice.actions;
console.log(UserSlice.reducer)
export default UserSlice.reducer;
export { adding, deleting, editing }