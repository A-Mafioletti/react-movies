import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Views
const Home = React.lazy(() => import("../../views/home/home"))
const Movie = React.lazy(() => import("../../views/movie/movie"));
const Favs = React.lazy(() => import("../../views/favs/favs"));
// Components
import { MainNav } from "../mainNav/MainNav";
export function ApplicationRoutes() {
return (
<>
<BrowserRouter>
<MainNav />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/movie/:movieId" element={<Movie />} />
<Route path="/favorites" element={<Favs />} />
</Routes>
</BrowserRouter>
</>
);
}