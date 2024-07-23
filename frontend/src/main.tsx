import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <AuthProvider>
          <CSSReset />

          <App />
        </AuthProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
} else {
  console.error("Root element not found");
}
