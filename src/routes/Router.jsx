// src/routes/Router.jsx
import { createHashRouter } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import HomePage from "../features/home/HomePage";
import ScenarioPage from "../features/scenarios/ScenarioPage";
import SummaryPage from "../features/results/SummaryPage";
import NotFound from "../features/NotFound"; // 下面有範例

export const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,     // 友善錯誤頁（可選）
    children: [
      { index: true, element: <HomePage /> },        // 首頁
      { path: "scenario/1", element: <ScenarioPage id={1} /> },
      { path: "scenario/2", element: <ScenarioPage id={2} /> },
      { path: "scenario/3", element: <ScenarioPage id={3} /> },
      { path: "scenario/4", element: <ScenarioPage id={4} /> },
      { path: "summary", element: <SummaryPage /> },
      { path: "*", element: <NotFound /> },          // 通配，避免 404 畫面
    ],
  },
]);
