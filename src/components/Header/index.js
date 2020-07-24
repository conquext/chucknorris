import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core/styles";

const headerStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },
  langPick: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    fontSize: "10px",
  },
}));

const Header = () => {
  const classes = headerStyle();
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  document.body.dir = i18n.dir();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
    theme.direction = i18n.dir();
  };
  return (
    <AppBar position="relative">
      <Toolbar className={classes.root}>
        <Typography variant="h6" color="inherit" noWrap>
          Chuk Norris Fact Finder
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.langPick}
        >
          {t("language")}
          <div className={classes.langPickItem}>
            <button onClick={() => changeLanguage("en")}>en</button>
            <button onClick={() => changeLanguage("ar")}>ar</button>
            <button onClick={() => changeLanguage("he")}>he</button>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
