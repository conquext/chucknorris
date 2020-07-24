import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppContext } from "../../store";
import Toolbar from "@material-ui/core/Toolbar";
import Header from "../Header";
import Hero from "../Hero";
import Error from "../Error";
import Loading from "../Loading";
import Footer from "../Footer";

export default function Album() {
  const { state } = useContext(AppContext);
  console.log("context baba", state);

  const { error, searchError, isLoading, isSearching } = state;

  const searchJokes = (arg) => console.log("something search", arg);
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <React.Fragment id="back-to-top-anchor" />
      <Hero searchJokes={searchJokes} isLoading={isLoading} />
      {isLoading && <Loading type="page" />}
      {error && !isLoading && !isSearching && <Error />}
      {!error && !isLoading && (
        <main>
          {searchError && <Error />}
          {/* {!hasError && jokes && !!jokes.length && <JokesList jokes={jokes} />}         */}
        </main>
      )}
      <Footer />
    </React.Fragment>
  );
}
