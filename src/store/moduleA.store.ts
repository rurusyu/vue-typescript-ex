import {Module} from 'vuex';
import {RootState} from '@/store/index';

interface moduleA {
    data : string;
}

const module: Module<moduleA, RootState> = {
    namespaced: true,
    state: {
        data: 'moduleA',
    },
    mutations: {
        setData(state, data: string) {
          state.data = data;
        },
      },
      actions: {
        //ActionContext 타입이 RootState이므로 위에 있으니 따로 지정안해줘도 됨.
        setRootData ({commit}, data: string) {
          commit('setData', data);
        },
      },
      getters: {
        data: (state) => state.data, 
      },
}

export default module;