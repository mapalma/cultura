<template>
  <div>
    <TheHeader @sidenavToggle="display = !display"></TheHeader>
    <theSideNav @close="display = !display"  :show="display"/>
    <nuxt/>
    <theFooter></theFooter>
  </div>  
</template>

<script>

import TheHeader from '@/components/Navigation/TheHeader'
import TheFooter from '@/components/Navigation/TheFooter'
import TheSideNav from '@/components/Navigation/TheSideNav'
import MarkDownIt from 'markdown-it';

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSideNav
  },
  data() {
    return{
      display:false,
    }
  },
  scrollToTop: true
}
</script>


<style>

</style>
