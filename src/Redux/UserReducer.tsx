import { createSlice } from "@reduxjs/toolkit";

type Contact = {
    id?: number;
    uname: string;
    phone: number;
    status: boolean;
}
const initialstate: Contact[] = []

// Generating an id for each contact added
const generateUID = (data: Contact[]): number => {
    if (data.length >= 1) {
        const maxID = Math.max(...data.map((user: any) => user.id))
        return maxID + 1;
    } else {
        // setting default id to 100
        return 100;
    }
}

const UserSlice = createSlice({
    name: 'contact',
    initialState: initialstate,
    reducers: {
        // action for adding contact
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
        // action for deleting contact
        deleting: (state, action) => {
            console.log('deleting', action.payload)
            return state.filter(res => res?.id !== action.payload)

        },
        // action for editing contact
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
export default UserSlice.reducer;
export { adding, deleting, editing }