import { createRoot } from "react-dom/client";
import { DesignSystemProvider } from "@bucketplace/design-system";
import "./i18n";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <DesignSystemProvider mode="light">
    <App />
  </DesignSystemProvider>
);
