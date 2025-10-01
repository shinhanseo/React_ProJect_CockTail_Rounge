import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Main from "./components/Main";
import Home from "./pages/Home";
import Community from "./pages/CommunityPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Today from "./pages/Today";
import Recipe from "./pages/Recipe";
import RecipeDetail from "./pages/RecipeDetail";
import CommunityDetail from "./pages/CommunityDetail";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<Main />}>
            <Route index element={<Home />} />
            <Route path="community" element={<Community />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="today" element={<Today />} />
            <Route path="recipe" element={<Recipe />} />
            <Route path="cocktails/:slug" element={<RecipeDetail />} />
            <Route path="posts/:id" element={<CommunityDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
