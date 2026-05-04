import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Protection contre l'inspection du navigateur
// Désactiver F12
document.addEventListener("keydown", (e) => {
  if (e.key === "F12") {
    e.preventDefault();
  }
  // Ctrl+Shift+I (DevTools)
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }
  // Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
  }
  // Ctrl+Shift+C (Inspect Element)
  if (e.ctrlKey && e.shiftKey && e.key === "C") {
    e.preventDefault();
  }
});

// Désactiver le clic droit
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  return false;
});

// Détecter si DevTools est ouvert et rediriger
const checkDevTools = setInterval(() => {
  const threshold = 160;
  if (
    window.outerHeight - window.innerHeight > threshold ||
    window.outerWidth - window.innerWidth > threshold
  ) {
    document.body.innerHTML = "";
    document.write(
      "<h1>Accès refusé</h1><p>L'inspection du code n'est pas autorisée.</p>"
    );
  }
}, 500);

createRoot(document.getElementById("root")!).render(<App />);
