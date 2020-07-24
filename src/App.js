import React from "react";
import { useTranslation } from "react-i18next";
import withRoot from "./withRoot";
import { useTheme } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Button";
import AppLayout from "./components/layouts/AppLayout";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  document.body.dir = i18n.dir();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
  };

  return (
    <div className="App">
      {/* {t("welcome")} */}
      {/* <button onClick={() => changeLanguage("en")}>en</button>
      <button onClick={() => changeLanguage("ar")}>ar</button>
      <button onClick={() => changeLanguage("he")}>he</button> */}

      {/* <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={true}
        message={t("welcome")}
      ></Snackbar>  */}
      <AppLayout />
    </div>
  );
}

export default withRoot(App);
