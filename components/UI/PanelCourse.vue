<template>
    <section class="latest-courses-container">

        <style>
            :root {
                --bg-image-latest-course-1: url('{{ getLatest[0].fields.imagen.fields.file.url }}');
                --bg-image-latest-course-2: url('{{ getLatest[1].fields.imagen.fields.file.url }}');
                --bg-image-latest-course-3: url('{{ getLatest[2].fields.imagen.fields.file.url }}');
            }
        </style>

        <article v-for="course in getLatest" :key="course.sys.id">
           
            <nuxt-link :to="'/courses/' + course.sys.id">
               
                    <span class="type">{{course.fields.type}}</span>
                    <h3>{{course.fields.title}}</h3>
                    <p>{{course.fields.starts | formatDate }}</p>
                
            </nuxt-link>           
        </article>
    </section>
</template>

<script>
    export default {
        computed: {
            getLatest() {
                return this.$store.getters['courses/getLatest'];
            }
        }
    }
</script>

<style lang="scss" scoped>

    .latest-courses-container {
        
        article {         
            margin: 0 0  $base-margin 0;
            background-repeat: no-repeat;
            background-size: cover;
            padding: $base-margin;
            position: relative;
            overflow: hidden;
            background: $color-white;

            h3 {
                 color: $color-white;
            }

            a {
                 position: relative;
                 display: block;
                 z-index: 10;
                 color: $color-white;
            }

            &:first-of-type {
                margin-left: 0
            }

            &:before {
                content:'';
                display: block;
                width:100%;
                height: 100%;          
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                filter: grayscale(100%);
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0.4;  
                transition: 0.2s all ease-in;       
            }

            &:after {
                content:'';
                display: block;
                width: 100%;
                height: 100%;
                background:rgba(#b39b9d, 1);
                mix-blend-mode: multiply;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 0.2s ease-in;
            }

            &:nth-of-type(1){
                 &:before {
                    background-image: var(--bg-image-latest-course-1);
                 }
            }

            &:nth-of-type(2){
                 &:before {
                    background-image: var(--bg-image-latest-course-2);
                 }
            }

            &:nth-of-type(3){

                &:before {
                     background-image: var(--bg-image-latest-course-3); 
                } 
            }

            &:hover {

                &:before {
                    transform: scale(1.05, 1.05);
                }

                &:after {
                    background:rgba($color-primary-dark, 1);
                }
            }
        }

        @include mq(tablet){
            display: flex;

            article {         
                width: calc(100%/3 - #{$base-margin} * 2/3);
                margin: 0 0 0 $base-margin;
            }
        }
    }

</style>
