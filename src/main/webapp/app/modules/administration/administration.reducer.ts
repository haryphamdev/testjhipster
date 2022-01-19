import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

export const ACTION_TYPES = {};

const initialState = {
  loading: false,
  errorMessage: null,
  totalItems: 0,
};

export type AdministrationState = Readonly<typeof initialState>;

// Reducer

export default (state: AdministrationState = initialState, action): AdministrationState => {
  switch (action.type) {
    default:
      return state;
  }
};

// Actions
