import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import axios from 'axios';
import thunk from 'redux-thunk';
import sinon from 'sinon';

import { REQUEST, FAILURE, SUCCESS } from 'app/shared/reducers/action-type.util';
import administration, { ACTION_TYPES } from './administration.reducer';

describe('Administration reducer tests', () => {
  const username = process.env.E2E_USERNAME ?? 'admin';

  function isEmpty(element): boolean {
    if (element instanceof Array) {
      return element.length === 0;
    } else {
      return Object.keys(element).length === 0;
    }
  }

  function testInitialState(state) {
    expect(state).toMatchObject({
      loading: false,
      errorMessage: null,
      totalItems: 0,
    });
  }

  function testMultipleTypes(types, payload, testFunction) {
    types.forEach(e => {
      testFunction(administration(undefined, { type: e, payload }));
    });
  }

  describe('Common', () => {
    it('should return the initial state', () => {
      testInitialState(administration(undefined, {}));
    });
  });

  describe('Requests', () => {
    it('should set state to loading', () => {
      testMultipleTypes([], {}, state => {
        expect(state).toMatchObject({
          errorMessage: null,
          loading: true,
        });
      });
    });
  });

  describe('Failures', () => {
    it('should set state to failed and put an error message in errorMessage', () => {
      testMultipleTypes([], 'something happened', state => {
        expect(state).toMatchObject({
          loading: false,
          errorMessage: 'something happened',
        });
      });
    });
  });

  describe('Success', () => {});
  describe('Actions', () => {
    let store;

    const resolvedObject = { value: 'whatever' };
    beforeEach(() => {
      const mockStore = configureStore([thunk, promiseMiddleware]);
      store = mockStore({});
      axios.get = sinon.stub().returns(Promise.resolve(resolvedObject));
      axios.post = sinon.stub().returns(Promise.resolve(resolvedObject));
    });
  });
});
