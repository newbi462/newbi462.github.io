import React, { useEffect, useContext, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

//Coontext/STATE
import { ContextBox } from "./../Context/ContextBox";

function ScrollToTop({ history, children }) {
  const { selectedState, setSelectedState } = useContext(ContextBox);

  useEffect(() => {
    console.log("use effect ran");
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [selectedState]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
