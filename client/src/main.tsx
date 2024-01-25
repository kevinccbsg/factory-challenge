import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import { ConfigProvider, theme } from "antd";
import { theme as appTheme } from "./styles/theme";
import en from "./locales/en/index.json";
import es from "./locales/es/index.json";
import AppRoutes from "./AppRoutes";
import './global.css';

i18next.use(initReactI18next).init({
  lng: "es",
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: appTheme.mainColor,
          colorText: appTheme.textColor,
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  </React.StrictMode>
);
