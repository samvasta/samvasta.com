import NavigationBar, { NavigationBarProps } from 'components/NavigationBar';
import React, { useReducer } from 'react';

export const defaultProps = {
  bg: 'red.900',
  color: 'white',
  mb: 4,
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
  const { children } = props;

  const [navProps, setNavProps] = useReducer(reducer, defaultProps);

  return (
    <NavigationContext.Provider value={setNavProps}>
      <NavigationBar {...navProps} />
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

export default NavigationProvider;
