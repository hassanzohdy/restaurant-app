import { toggleGroupAtom } from "../atoms/header-atoms";

export function useToggleState() {
  const [groupState, setState] = toggleGroupAtom.useState();

  const toggleState = stateName => {
    setState(prevState => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key !== stateName ? false : !prevState[key];
        return acc;
      }, {});
      return newState;
    });
  };

  return { groupState, toggleState };
}
