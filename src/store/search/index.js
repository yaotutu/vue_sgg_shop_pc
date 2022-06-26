import { reqGetSearchInfo } from "@/api";

const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, value) {
    state.searchList = value;
  },
};
const actions = {
  async getSaerchInfo({ commit }, params = {}) {
    //params这个参数是由dispach 派发过来的时候携带的参数
    let res = await reqGetSearchInfo(params);
    console.log("res", res);
    if (res.code === 200) {
      commit("GETSEARCHLIST", res.data);
    }
  },
};
//getters 用于处理仓库中的数据。 比如，仓库中的数据有很多层，需要找到其中的某一个很繁琐
//在这里处理一下， 将需要的数据报漏出去
const getters = {
  goodsList(state) {
    //这里应该考虑到如果没数据的情况。 如果没数据，返回一个undefined，会导致一些错误，
    //添加一个判断，如果没数据，返回一个空数组
    // console.log("state", state);
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    //这里应该考虑到如果没数据的情况。 如果没数据，返回一个undefined，会导致一些错误，
    //添加一个判断，如果没数据，返回一个空数组
    // console.log("state", state);
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    //这里应该考虑到如果没数据的情况。 如果没数据，返回一个undefined，会导致一些错误，
    //添加一个判断，如果没数据，返回一个空数组
    // console.log("state", state);
    return state.searchList.attrsList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
