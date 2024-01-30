import { createStore, createLogger } from 'vuex';
const env = process.env.NODE_ENV;

export default createStore({
    state: {
        // TODO
    },
    mutations: {
        // TODO
    },
    actions: {
        // TODO
    },
    plugins: env === 'production' ? [] : [createLogger()],
});
