import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop(props: any) {
  const { history, children } = props;

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
}

export default withRouter(ScrollToTop);
