import { useToken } from '@chakra-ui/react';
import NavigationBar, { NavigationBarProps } from 'components/NavigationBar';
import React, { useEffect, useReducer } from 'react';
import { withRouter } from 'react-router';
import merge from 'lodash/merge';

export const defaultProps = {
  bg: 'gray.100',
  color: 'gray.700',
  mb: 4,
  activeStyle: {},
};

const reducer = (currentState: NavigationBarProps, nextState: Partial<NavigationBarProps>) => ({
  ...currentState,
  ...nextState,
});

const NavigationContext = React.createContext<React.Dispatch<Partial<NavigationBarProps>>>(
  (_) => {},
);
NavigationContext.displayName = 'Navigation';

const NavigationProvider: React.FC = (props: any) => {
  const { children, history } = props;
  const [black] = useToken('colors', ['black']);
  const defaultActiveStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: black,
  };

  const [navProps, setNavProps] = useReducer(reducer, defaultProps);

  useEffect(() => {
    const unlisten = history.listen(() => {
      setNavProps(defaultProps);
    });
    return () => {
      unlisten();
    };
  }, []);

  const activeStyle = merge(defaultActiveStyle, navProps.activeStyle);

  return (
    <NavigationContext.Provider value={setNavProps}>
      <NavigationBar {...navProps} activeStyle={activeStyle} />
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavBarProps() {
  const ctx = React.useContext(NavigationContext);

  if (!ctx) {
    console.error('useNavBarProps must be used within a NavigationProvider');
  }

  return ctx;
}

export default withRouter(NavigationProvider);
