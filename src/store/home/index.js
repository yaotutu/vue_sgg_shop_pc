import { reqCategoryList } from "@/api";

//home的小仓库模块
const state = {
  categoryList: [],
};
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
    //第一个参数就是state仓库，是一个对象
    //第二个参数是actions传过来的数据
    // console.log(state);
    // console.log(categoryList);
  },
};
const actions = {
  async getCategoryList({ commit }) {
    let res = await reqCategoryList();
    console.log(res);
    if (res.code === 200) {
      commit("GETCATEGORYLIST", res.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
