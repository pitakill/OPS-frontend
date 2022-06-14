import { createMachine, assign } from "xstate";

export default createMachine({
  id: "modal",
  initial: "idle",
  context: {
    loading: false,
    showButton: false,
    showModal: false,
  },
  states: {
    idle: {
      on: {
        OPEN_MODAL: {
          target: "modal_showed",
          actions: assign({
            showModal: true,
            showButton: true,
          }),
        },
      },
    },
    modal_showed: {
      on: {
        LOAD_TOOL: {
          target: "tool_loaded",
          actions: assign({
            loading: true,
          }),
        },
      },
    },
    tool_loaded: {
      on: {
        HIDE_BUTTON: {
          target: "ready_to_search",
          actions: assign({
            loading: false,
            showButton: false,
          }),
        },
      },
    },
    ready_to_search: {
      on: {
        SELECT_ILLNESS: {
          target: "illness_selected",
          actions: assign({
            showModal: false,
          }),
        },
      },
    },
    illness_selected: {
      on: {
        IDLE: {
          target: "idle",
          actions: assign({
            showButton: true,
          }),
        },
      },
    },
  },
});
