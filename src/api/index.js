import requests from "@/api/request";

//三级联动接口
///api/product/getBaseCategoryList get
export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};
