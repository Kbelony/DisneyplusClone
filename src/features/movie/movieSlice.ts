import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: "",
  newDisney: "",
  original: "",
  trending:"",
  serie:""
};

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
        setMovies: (state,action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
            state.serie = action.payload.serie;
        },
    }
})

export const { setMovies } = movieSlice.actions;
export const selectRecommend= (state: { movie: { recommend: string; }; }) => state.movie.recommend;
export const selectNewDisney= (state: { movie: { newDisney: string; }; }) => state.movie.newDisney;
export const selectOriginal= (state: { movie: { original: string; }; }) => state.movie.original;
export const selectTrending= (state: { movie: { trending: string; }; }) => state.movie.trending;
export const selectSerie= (state: { movie: { serie: string; }; }) => state.movie.serie;

export default movieSlice.reducer;