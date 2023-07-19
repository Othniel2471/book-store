import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = 'wVeKprkdiLWZ2lvlIrOy';

// get books from api
export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(`${url}${appId}/books`);
  return response.data; // Return the response data directly
});

// add book to api
export const addBookToApi = createAsyncThunk(
  'books/addBookToApi',
  async (book) => {
    const response = await axios.post(`${url}${appId}/books`, {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return { book, response };
  },
);

// remove book from api
export const removeBookFromApi = createAsyncThunk(
  'books/removeBookFromApi',
  async (book) => {
    await axios.delete(`${url}${appId}/books/${book}`);
    return book; // Return the item_id directly
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    bookList: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookList = state.bookList.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.bookList = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addBookToApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBookToApi.fulfilled, (state, action) => {
      state.loading = false;
      const { book } = action.payload;
      const id = book.item_id;
      state.bookList[id] = [
        {
          title: book.title,
          author: book.author,
          category: book.category,
        },
      ];
    });
    builder.addCase(addBookToApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(removeBookFromApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeBookFromApi.fulfilled, (state, action) => {
      state.loading = false;
      delete state.bookList[action.payload];
    });
    builder.addCase(removeBookFromApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
