<template>
    <div class="banner-block">
        <div class="banner-content">
            <slot name="title"></slot>
            <slot></slot>
        </div>
    </div> 
</template>

<script>
    export default {
       name: "BannerBlock",
    }
</script>

<style scoped lang="scss">

.banner-block {
    color: $color-white;
    height: 400px;

    .banner-content {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;

        > * {    
            color: $color-white;

            p {
                font-size: $h4;
            }

            &:first-child {
                font-size: $h1;
                margin-bottom: $base-padding;
                line-height: 1.2;
                font-weight: $bold;
            }
        }
    }

    @include mq(laptop) {
        width: 40%;
    }
}

</style>
