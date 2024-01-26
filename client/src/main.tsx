import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import en from "./locales/en/index.json";
import es from "./locales/es/index.json";
import AppRoutes from "./AppRoutes";
import Nav from "./components/Nav/Nav";

i18next.use(initReactI18next).init({
  lng: "es",
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <Nav />
      <AppRoutes />
    </ConfigProvider>
  </React.StrictMode>
);
