import AnimationSynchronizer from './AnimationSynchronizer.js';
import {store} from './App.js';
import { SELECT_BTN_CLICKED } from './Reducer.js';

const SelectBarAnimator = () => {

    store.dispatch({type: SELECT_BTN_CLICKED});
    const state = store.getState();

    AnimationSynchronizer(state);
}

export default SelectBarAnimator;