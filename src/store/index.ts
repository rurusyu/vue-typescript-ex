import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';
import moduleA from '@/store/moduleA.store';
import moduleB from '@/store/moduleB.store';


Vue.use(Vuex);

export interface RootState {
  data: string;
}

const store: StoreOptions<RootState> = {
  state: {
    data: 'root',
  },
  modules: {
    moduleA,
    moduleB,
  },
  mutations: {
    setData(state, data: string) {
      state.data = data;
    },
  },
  actions: {
    //ActionContext 타입이 RootState이므로 위에 있으니 따로 지정안해줘도 됨.
    //기본적으로 RootState에서 관리하기 때문에 각 모듈별로 네임스페이스를 지정해줘야 해당 모듈만 데이터 변화가능.
    setRootData ({commit}, data: string) {
      commit('setData', data);
    },
  },
  getters: {
    data: (state) => state.data, 
  },
}

export default new Vuex.Store(store);