import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Project/Projects";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import About from "./components/About/About";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function App() {
  const location = useLocation();

  return (
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
                  <Route path="/about">
                    <About />
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
  );
}

export default App;
