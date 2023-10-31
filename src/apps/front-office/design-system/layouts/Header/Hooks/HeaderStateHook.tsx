import { Atom } from "@mongez/react-atom";
import {
  ToggleGroupActiveBarAtom,
  ToggleGroupAtom,
} from "../atoms/HeaderAtoms";

function createToggleGroupStateHook(atom: Atom) {
  return function useToggleState() {
    const [groupState, setState] = atom.useState();

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
  };
}

export const useToggleState = createToggleGroupStateHook(ToggleGroupAtom);
export const useToggleStateActiveBar = createToggleGroupStateHook(
  ToggleGroupActiveBarAtom,
);
