import {
  ToggleGroupActiveBarAtom,
  ToggleGroupAtom,
} from "../atoms/HeaderAtoms";

export default function useToggleState() {
  const [groupState, setState] = ToggleGroupAtom.useState();

  const toggleState = stateName => {
    setState(prevState => {
      // Create a new state object with all values set to false
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key !== stateName ? false : !prevState[key];
        return acc;
      }, {});
      return newState;
    });
  };

  return { groupState, toggleState };
}

export function useToggleStateActiveBar() {
  const [groupStateActiveBar, setState] = ToggleGroupActiveBarAtom.useState();

  const toggleState = stateName => {
    setState(prevState => {
      // Create a new state object with all values set to false
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key !== stateName ? false : !prevState[key];
        return acc;
      }, {});
      return newState;
    });
  };

  return { groupStateActiveBar, toggleState };
}
