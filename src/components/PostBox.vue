<template>
  <q-card flat bordered>
    <q-card-section>
      <q-item>
        <q-item-section avatar>
          <q-avatar size="50px">
            <q-img
              src="https://pbs.twimg.com/profile_images/1518208374176841728/x2Ej6Ukk_400x400.jpg"
              alt="user-photo"
              width="50px"
              height="50px"
              style="border-radius: 50%"
            ></q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-input
            borderless
            autogrow
            ref="comment"
            placeholder="What's happening?"
            v-model="state.tweet_box"
          ></q-input>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        rounded
        color="light-blue-6"
        label="Tweet"
        no-caps
        style="width: 80px"
        :disable="state.tweet_box ? false : true"
        @click="saveTweet()"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from "vuex"
import moment from 'moment'
export default {
  name: 'FormBox',
  setup() {
    const $store = useStore();

    const listTweet = computed({
      get: () => $store.state.example.tweet_list,
    })

    const state = reactive({
      tweet_box: ''
    })

    function saveTweet() {
      let data = {
        id: listTweet.length + 1,
        pict: 'https://pbs.twimg.com/profile_images/1518208374176841728/x2Ej6Ukk_400x400.jpg',
        account_name: 'D Pratama',
        user_name: '@egho_pratama',
        tweet: state.tweet_box,
        date_time: moment().format("DD MMMM YYYY, h:mm:ss a")
      }

      $store.commit('example/mutateTweet', data)

      state.tweet_box = ''
    }

    return {
      state,
      listTweet,
      saveTweet
    }
  },
}
</script>
