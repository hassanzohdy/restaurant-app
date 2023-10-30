import {
  ToggleGroupActiveBarAtom,
  ToggleGroupAtom,
} from "../atoms/HeaderAtoms";

function createToggleStateHook(atom) {
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

export const useToggleState = createToggleStateHook(ToggleGroupAtom);
export const useToggleStateActiveBar = createToggleStateHook(
  ToggleGroupActiveBarAtom,
);
