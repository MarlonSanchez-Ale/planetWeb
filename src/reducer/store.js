import { configureStore } from "@reduxjs/toolkit";
import PlanetSlice from "./feature/PlanetSlice";

const reducer = {
    Planets: PlanetSlice,
  }

export const store = configureStore({
    reducer: reducer
})