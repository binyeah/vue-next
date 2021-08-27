import { createStore } from 'vuex';

import options from './modules/options'
const store = createStore({
    ...options,
})
export default store