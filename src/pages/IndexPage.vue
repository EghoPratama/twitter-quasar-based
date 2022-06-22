<template>
  <q-page>
    <div class="row q-pt-md q-pb-md">
      <div class="col-7">
        <PostBox />

        <PostList v-for="item in listTweet" :key="item.id" :payload="item" />
      </div>
      <div class="col-5 q-pl-md">
        <TrendingBox />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PostBox from "components/PostBox.vue";
import PostList from "src/components/PostList.vue";
import TrendingBox from "src/components/TrendingBox.vue";

export default defineComponent({
  name: "IndexPage",
  components: { PostBox, PostList, TrendingBox },
  setup() {
    const $store = useStore();

    const listTweet = computed({
      get: () => $store.state.example.tweet_list,
    });

    return {
      listTweet,
    };
  },
});
</script>
