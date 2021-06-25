import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          Loading.. <ClipLoader color={"#fd4d4d"} />
        </div>
      ) : (
        <div className="app">
          <Helmet>
            <title>Tushar shrivastav</title>
          </Helmet>

          <div className="container app__container">
            <div className="row app__row">
              <div className="col-lg-3 ">
                <Sidebar />
              </div>

              <div className="col-lg-9 app__main-content ">
                <Navbar />
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.key}>
                    <Route exact path="/">
                      <Resume />
                    </Route>
                    <Route path="/projects">
                      <Projects />
                    </Route>
                    <Route>
                      <Redirect to="/" />
                    </Route>
                  </Switch>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
