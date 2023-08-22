import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: "",
  newDisney: "",
  original: "",
  trending:"",
  serie:"",
  movies:"",
  nationalGeographical: "",
  starWars: "",
  pixar: "",
  marvel: "",
  disney: ""

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
            state.serie = action.payload.serie;``
            state.movies = action.payload.movies;
            state.disney = action.payload.disney;
            state.marvel = action.payload.marvel;
            state.pixar = action.payload.pixar;
            state.starWars = action.payload.starWars;
            state.nationalGeographical = action.payload.nationalGeographical;
        },
    }
})

export const { setMovies } = movieSlice.actions;
export const selectRecommend= (state: { movie: { recommend: string; }; }) => state.movie.recommend;
export const selectNewDisney= (state: { movie: { newDisney: string; }; }) => state.movie.newDisney;
export const selectOriginal= (state: { movie: { original: string; }; }) => state.movie.original;
export const selectTrending= (state: { movie: { trending: string; }; }) => state.movie.trending;
export const selectSerie= (state: { movie: { serie: string; }; }) => state.movie.serie;
export const selectMovies= (state: { movie: { movies: string; }; }) => state.movie.movies;
export const selectDisney= (state: { movie: { disney: string; }; }) => state.movie.disney;
export const selectMarvel= (state: { movie: { marvel: string; }; }) => state.movie.marvel;
export const selectPixar= (state: { movie: { pixar: string; }; }) => state.movie.pixar;
export const selectStarWars= (state: { movie: { starWars: string; }; }) => state.movie.starWars;
export const selectNationalGeographical= (state: { movie: { nationalGeographical: string; }; }) => state.movie.nationalGeographical;

export default movieSlice.reducer;