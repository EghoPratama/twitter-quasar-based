<template>
  <q-card flat bordered class="q-mt-0 q-mb-0">
    <q-card-section>
      <div class="post-list">
        <q-item>
          <q-item-section avatar>
            <q-avatar size="50px">
              <q-img
                :src="payload.pict"
                alt="user-photo"
                width="50px"
                height="50px"
                style="border-radius: 50%"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ payload.account_name }}</q-item-label>
            <q-item-label caption>{{ payload.user_name }} . {{ payload.date_time }}</q-item-label>
          </q-item-section>
        </q-item>

        <p class="text-body2 q-ml-md">{{ payload.tweet }}</p>
      </div>
    </q-card-section>

    <q-card-actions align="between">
      <q-btn flat round color="grey" icon="chat" />
      <q-btn flat round color="grey" icon="repeat" />
      <q-btn flat round color="grey" icon="favorite_border" />
      <q-btn flat round color="grey" icon="ios_share" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "PostList",
  props: {
    payload: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
