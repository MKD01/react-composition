import "./App.css";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { getRandomWord } from "./utils/api";
import OtherWords from "./pages/OtherWords";
import WelcomeHeader from "./components/WelcomeHeader";
import { IsSignedInProvider } from "./contexts/IsSignedInProvider.jsx";

function App() {
  const [word, setWord] = useState("");
  //   const { isSignedIn } = useContext(IsSignedInContext);

  useEffect(() => {
    getRandomWord().then((randomWord) => {
      setWord(randomWord);
    });
  }, []);

  const pageRoutes = [
    {
      path: "/",
      //   component: <Home header={<WelcomeHeader word={word} />} />,
      component: <Home header={WelcomeHeader({ word: word })} />,
    },
    { path: "/blog", component: <Blog /> },
    { path: "/random", component: <OtherWords word={word} /> },
  ];

  return (
    <>
      <IsSignedInProvider>
        <Routes>
          {pageRoutes.map(({ path, component }) => {
            // const componentToRender = isSignedIn ? (
            //   component
            // ) : (
            //   <SignInMessage />
            // );

            return <Route key={path} path={path} element={component} />;
          })}

          {/* <Route
          path='/'
          element={<Home header={<WelcomeHeader word={word} />} />}
        />
        <Route path='/blog' element={<Blog />} />
        <Route path='/random' element={<OtherWords word={word} />} /> */}
        </Routes>
      </IsSignedInProvider>
    </>
  );
}

export default App;
