
<template>
<section class="page-container">
    <div class="banner">
      <div class="inner">
        <BannerBlock>
          <h1 v-if="error.statusCode === 404">{{error.statusCode}} Page not found</h1>
          <h1 v-else>{{error.statusCode}} {{error.message}}</h1>
        </BannerBlock>
      </div>
    </div>
    <main>
      <div class="inner">
        <div class="column-centre column">
          <p>Ooops! Sorry, looks like there was an error.</p>
          <p><nuxt-link to='/'>Take me back home!</nuxt-link></p>
        </div>
       </div>
    </main>
</section>  
</template>

<script>

import BannerBlock from '@/components/UI/BannerBlock'

export default {
  props:['error'],
  components: {
    BannerBlock
  },
  scrollToTop: true,
  updated() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

</script>