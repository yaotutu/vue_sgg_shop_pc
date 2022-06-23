<template>
  <div class="HomePage">

    <TypeNav />
    <list-continer />
    <recomend-page />
    <rank-page />
    <like-page />
    <floor-page />
  </div>
</template>
<script>
import FloorPage from './FloorPage.vue';
import LikePage from './LikePage.vue';
import ListContiner from './ListContiner.vue';
import RankPage from './RankPage.vue';
import RecomendPage from './RecomendPage.vue';
export default {
  name: "HomePage",
  components: { ListContiner, RecomendPage, RankPage, LikePage, FloorPage },
  computed: {
  },
  methods: {

  }

};
</script>
