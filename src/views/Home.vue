<template>
  <IonVuePage :title="'@ionic/vue examples'" :showBackButton="false">
    <ion-list  lines="none">
      <ion-item v-for="(link, i) in links" :key="i" no-padding no-border>
        <router-link :to="toUrl(link)" style="color:#000;text-decoration: none;">{{ link }}</router-link>
        <!-- <my-element show=”false”></my-element> -->
      </ion-item>
    </ion-list>
  </IonVuePage>
</template>

<script>
export default {
  data() {
    return {
      links: ['Action Sheet', 'Alert', 'Loading', 'Menu', 'Modal', 'Popover'],
    }
  },
  methods: {
    toUrl(str) {
      return str.toLowerCase().replace(' ', '-')
    },
  },
}
</script>
<style lang="css" scope>
.inner-scroll{
  padding: 0px;
}
  
</style>