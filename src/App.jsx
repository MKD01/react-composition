import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { getRandomWord } from "./utils/api";
import OtherWords from "./pages/OtherWords";
import WelcomeHeader from "./components/WelcomeHeader";
import { IsSignedInProvider } from "./contexts/IsSignedInProvider.jsx";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    getRandomWord().then((randomWord) => {
      setWord(randomWord);
    });
  }, []);

  const pageRoutes = [
    {
      path: "/",
      component: <Home header={<WelcomeHeader word={word} />} />,
    },
    { path: "/blog", component: <Blog /> },
    { path: "/random", component: <OtherWords word={word} /> },
  ];

  return (
    <>
      <IsSignedInProvider>
        <Routes>
          {pageRoutes.map(({ path, component }) => {
            return <Route key={path} path={path} element={component} />;
          })}
        </Routes>
      </IsSignedInProvider>
    </>
  );
}

export default App;
