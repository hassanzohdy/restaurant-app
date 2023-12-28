import { HeaderState, headerStateAtom } from "../atoms/header-atoms";

function updateStateToTrue(state: keyof HeaderState) {
  const data: HeaderState = {} as HeaderState;

  for (const key in headerStateAtom.value) {
    data[key] = key === state;
  }

  headerStateAtom.update(data);
}

export function useHeaderStateOpen(state: keyof HeaderState) {
  return () => {
    updateStateToTrue(state);
  };
}
export function useHeaderStateClose(state: keyof HeaderState) {
  return () => {
    headerStateAtom.change(state, false);
  };
}

export function useHeaderStateToggle(state: keyof HeaderState) {
  return () => {
    const stateValue = headerStateAtom.get(state);

    if (stateValue) {
      headerStateAtom.change(state, false);
    } else {
      updateStateToTrue(state);
    }
  };
}

export function useHeaderState(state: keyof HeaderState) {
  return headerStateAtom.use(state);
}
