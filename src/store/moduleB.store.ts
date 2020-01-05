import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';

@Module({namespaced: true, name: 'moduleB'})
export default class ModuleB extends VuexModule {
    data: string = 'moduleB';
    
    //class안에서는 인자 1개
    @Mutation
    setData(data: string){
        this.data = data;
    }
    //mutation하고 같은 범위라 이름 안겹치게.
    @Action
    editData(data: string) {
        this.context.commit('setData', data);
    }

    get moduleBdata(){
        return this.data;
    }
}
