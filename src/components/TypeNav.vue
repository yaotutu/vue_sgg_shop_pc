<template>
  <div class="HomeTypeNav">
    <div class="type-nav">
      <div class="container">
        <div class="" @mouseleave="leaveIndex" @mouseenter="enterMenuList">
          <!-- 这个div是用于给三级联动菜单最外层包一个盒子，用于控制当鼠标离开这个div区域时，指针经过区域的背景色显示与消失-->
          <h2 class="all">全部商品分类</h2>

          <nav class="nav">
            <a href="###">服装城</a>
            <a href="###">美妆馆</a>
            <a href="###">尚品汇超市</a>
            <a href="###">全球购</a>
            <a href="###">闪购</a>
            <a href="###">团购</a>
            <a href="###">有趣</a>
            <a href="###">秒杀</a>
          </nav>
          <div class="sort" v-show="sortDisplay">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex === index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!--
1。这里不建议用routerlink组件，因为每一个routerlink都是一个组件，
当页面有几千个数据的时候就会渲染出来几千个组件，
如果路由中使用了占位符，这里使用routerlink时，也必须的有相对应的参数，
否则无法跳转成功的
2。这里不要给a标签添加点击事件，
这样的话循环出来几千个a标签，就会有几千个回调函数
-->

                  <!--<router-link to="/search">{{ c1.categoryName }}</router-link>-->
                </h3>
                <!--二级菜单，三级菜单-->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex === index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
//throttle是默认报漏的，不需要加大括号。
// 如果一个文件中包含多个报漏出来的函数。必须的用大括号
export default {
  name: "HomeTypeNav",
  data() {
    return {
      currentIndex: -1,
      sortDisplay: true,
    };
  },
  //  当组件挂在完毕，开始获取菜单数据
  mounted() {
    //  告诉vuex，获取数据，并存储在vuex中
    //将该方法放在app。vue中 因为该数据只需获取一次，并不需要频繁获取，这样当该页面被复用时，并不需要每次都去服务器请求数据，只需当app。vue执行时，请求一次即可。
    // this.$store.dispatch("getCategoryList");
    // console.log(this.$store);
    //  当页面组件挂在时，检测路由路径，如果在不再home页面，则将sort菜单隐藏起来
    // console.log(this.$route.path);
    if (this.$route.path !== "/home") {
      this.sortDisplay = false;
    }
  },
  methods: {
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 100),
    //当鼠标移出菜单区域
    leaveIndex() {
      // console.log("鼠标离开了");
      this.currentIndex = -1;
      if (this.$route.path === "/search") {
        this.sortDisplay = false;
      }
    },
    //当鼠标移进去菜单区域
    enterMenuList() {
      this.sortDisplay = true;
    },
    //  实现三级联动菜单的跳转
    goSearch(e) {
      // this.$router.push("/search");
      let el = e.target;
      let { categoryname, category1id, category2id, category3id } = el.dataset;

      if (categoryname) {
        //如果categoryname 不为空，说明用户点击了a标签。
        let location = { name: "searchPageName" };
        //这里是通过路由的名字跳转的，需要与路由配置文件中的name属性一致
        let query = { categoryname: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else if (category3id) {
          query.category3id = category3id;
        }
        //这里增加一个判断，如果搜索框中有params参数，也应该携带过来
        if (this.$route.params) {
          location.params = this.$route.params;
          location.query = query;
          console.log(location);
          this.$router.push(location);
        } else {
          location.query = query;
          console.log(location);
          this.$router.push(location);
        }
      }

      // for (const elKey in el) {
      //   console.log(el[elKey]);
      // }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            //display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          //用于控制二级菜单的显示与隐藏
          //&:hover {
          //  .item-list {
          //    display: block;
          //  }
          //}
        }
        .cur {
          background-color: #4cb9fc;
        }
      }
    }
  }
}
</style>
