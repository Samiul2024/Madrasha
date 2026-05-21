import AppRouter from "./app/router/AppRouter";

import ScrollToTop from "./components/system/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <AppRouter />
    </>
  );
};

export default App;
