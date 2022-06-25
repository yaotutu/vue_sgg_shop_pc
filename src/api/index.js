import requests from "@/api/request";

//引入mockjs
import mockRequests from "./mockRequest";

//三级联动接口
///api/product/getBaseCategoryList get
export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

//获取banner轮播图，即首页的展示图

export const reqGetBannerList = () => {
  return mockRequests.get("/banners");
};

//获取floorList的数据
export const reqGetFloorList = () => {
  return mockRequests.get("/floors");
};
