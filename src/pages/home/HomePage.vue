<template>
  <div class="HomePage">
    <TypeNav />
    <list-continer />
    <recomend-page />
    <rank-page />
    <like-page />
    <floor-page
      v-for="(floor, index) in floorList"
      :key="floor.id"
      :list="floor"
    />
  </div>
</template>
<script>
import FloorPage from "./FloorPage.vue";
import LikePage from "./LikePage.vue";
import ListContiner from "./ListContiner.vue";
import RankPage from "./RankPage.vue";
import RecomendPage from "./RecomendPage.vue";
import { mapState } from "vuex";

export default {
  name: "HomePage",
  components: { ListContiner, RecomendPage, RankPage, LikePage, FloorPage },
  computed: {
    ...mapState({ floorList: (state) => state.home.floorList }),
  },
  methods: {},
  mounted() {
    //派发action 去获取floor组件的数据
    this.$store.dispatch("getFloorList");
  },
};
</script>
