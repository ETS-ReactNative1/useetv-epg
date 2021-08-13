import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";
import Users from "../../pages/users/Tables";
import Message from "../../pages/message/Tables";
import SendMessage from "../../pages/message/SendMessage";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/users" component={Users} />
            <Route path="/app/message" component={Message} />
            <Route path="/app/send" component={SendMessage} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
