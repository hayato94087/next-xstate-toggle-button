import { setup } from "xstate";

/* eslint-plugin-xstate-include */

export type ToggleEvent = { type: "TOGGLE" };

export const toggleMachine = setup({
  types: {} as {
    // TypeScript対応
    events: ToggleEvent;
  },
}).createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: { target: "active" } },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});