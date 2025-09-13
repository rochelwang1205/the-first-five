import { createHashRouter } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import ReminderPage from "../features/Reminder";
import HomePage from "../features/page/HomePage";
import FaqPage from "../features/page/FaqPage";
import AboutPage from "../features/page/AboutPage";
import ScenarioPage from "../features/scenarios/ScenarioPage";
import SummaryPage from "../features/results/SummaryPage";
import NotFound from "../features/NotFound"; 

export const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,     // 友善錯誤頁（可選）
    children: [
      { index: true, element: <ReminderPage />, handle: { fullBleed: true } }, // 🚨 預設進 Reminder
      { path: "home", element: <HomePage />, handle: { fullBleed: true } },      
      { path: "faq", element: <FaqPage /> },        // FAQ 頁面
      { path: "about", element: <AboutPage /> },    // About 頁面
      { path: "scenario/1", element: <ScenarioPage id={1} /> },
      { path: "scenario/2", element: <ScenarioPage id={2} /> },
      { path: "scenario/3", element: <ScenarioPage id={3} /> },
      { path: "scenario/4", element: <ScenarioPage id={4} /> },
      { path: "summary", element: <SummaryPage /> },
      { path: "*", element: <NotFound />, handle: { fullBleed: true } },          
    ],
  },
]);
