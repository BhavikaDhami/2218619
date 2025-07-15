import { LoggerProvider } from "./context/LoggerContext";
import AppRoutes from "./routes/routes";

 function App() {
  return (
    <LoggerProvider>
      <AppRoutes />
    </LoggerProvider>
  );
}
export default App ;