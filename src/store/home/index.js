import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

//home的小仓库模块
const state = {
  //三级联动菜单
  categoryList: [],
  //  轮播图的数据
  bannerList: [],
  floorList: [],
};
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
    //第一个参数就是state仓库，是一个对象
    //第二个参数是actions传过来的数据
    // console.log(state);
    // console.log(categoryList);
  },
  GETBANNERLIST(state, data) {
    state.bannerList = data;
  },
  REQGETFLOORLIST(state, data) {
    // console.log("REQGETFLOORLIST", "REQGETFLOREQGETFLOORLISTORLIST");
    state.floorList = data;
  },
};
const actions = {
  //actios 用于逻辑的处理，拿到最后的数据，交给mutations，actions本身并不直接处理数据
  async getCategoryList({ commit }) {
    let res = await reqCategoryList();
    // console.log(res);
    if (res.code === 200) {
      commit("GETCATEGORYLIST", res.data);
    }
  },
  async getBannerList({ commit }) {
    let res = await reqGetBannerList();
    if (res.code === 200) {
      // console.log("res", res);
      commit("GETBANNERLIST", res.data);
    }
  },
  async getFloorList({ commit }) {
    let res = await reqGetFloorList();
    // console.log("res", res);
    if (res.code === 200) {
      commit("REQGETFLOORLIST", res.data);
    }
  },
};
//getters 相当于计算属性
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
