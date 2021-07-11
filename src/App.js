import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Landing from "./components/Landing";

function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <>
      {show ? (
        <Landing />
      ) : (
        <>
          <motion.div
            className="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
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
          </motion.div>
        </>
      )}
    </>
  );
}

export default App;
