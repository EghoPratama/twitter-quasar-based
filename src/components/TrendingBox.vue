<template>
  <div class="trending-box" style="position: fixed; width: 21vw;">
    <q-input rounded standout label="Search Twitter">
      <template v-slot:prepend>
        <q-icon name="search"></q-icon>
      </template>
    </q-input>

    <q-list bordered padding style="border-radius: 12px; background: #f5f5f5;" class="q-mt-md">
      <p class="text-h6 q-pa-sm">Trends for you</p>

      <q-item v-for="item in listTrending" :key="item.id" clickable class="q-mb-md">
        <q-item-section>
          <q-item-label caption>{{ item.topic }}</q-item-label>
          <q-item-label class="text-weight-bold text-subtitle1">{{
            item.trend
          }}</q-item-label>
          <q-item-label caption>{{ item.tweet_count }}</q-item-label>
        </q-item-section>

        <q-item-section top side>
          <q-btn size="12px" flat dense round icon="more_vert"></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: 'TrendingBox',
  setup() {
    const $store = useStore();

    const listTrending = computed({
      get: () => $store.state.example.trending_list,
    });

    return {
      listTrending,
    };
  }
}
</script>
