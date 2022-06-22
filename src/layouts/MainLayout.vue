<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="row" style="width: 100%">
        <div class="col-md-1 col-sm-0"></div>
        <div class="col-md-10 col-sm-12 row">
          <div class="col-3 q-pt-md">
            <q-list style="position: fixed; width: 16vw" class="q-pa-sm">
              <EssentialLink
                v-for="link in essentialLinks"
                :key="link.title"
                v-bind="link"
              />
            </q-list>
          </div>
          <div class="col-9">
            <router-view />
          </div>
        </div>
        <div class="col-md-1 col-sm-0"></div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home'
  },
  {
    title: 'Explore',
    icon: 'tag'
  },
  {
    title: 'Notifications',
    icon: 'notifications_none'
  },
  {
    title: 'Messages',
    icon: 'mail_outline'
  },
  {
    title: 'Bookmarks',
    icon: 'bookmark_outline'
  },
  {
    title: 'Lists',
    icon: 'receipt_long'
  },
  {
    title: 'Profile',
    icon: 'person_outline'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
