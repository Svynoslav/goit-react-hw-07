import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (val) => {
        return {
          payload: {
            id: nanoid(),
            name: val.name,
            number: val.number,
          },
        };
      },
    },
    deleteContact: {
      reducer: (state, action) => {
        const i = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(i, 1);
      },
    },
  },
});

export const contactsReducer = slice.reducer;
export const getContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = slice.actions;
