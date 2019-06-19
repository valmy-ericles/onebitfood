import { SHOW_MODAL, HIDE_MODAL } from '../actions/action_types';

const INITIAL_STATE = {
  modalType: null,
  modalProps: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }
    case HIDE_MODAL:
      return INITIAL_STATE
    default:
      return state

  }
}
