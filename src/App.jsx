import AppRouter from "./app/router/AppRouter";
import ScrollToTop from "./components/system/ScrollToTop";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
