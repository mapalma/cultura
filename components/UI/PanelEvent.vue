<template>

    <div class="panel-events">

        <div class="inner">   

            <div class="event-content">
                <h2>Events</h2>
                <p class="event-tag">talk</p>
                <p class="event-title"><nuxt-link to="/agenda">Challenges of Climate Change</nuxt-link></p>
                <p class="event-date">01/02/20</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'PanelEvent'
}
</script>

<style lang="scss">

.panel-events {
   
    position: relative;
    height: 400px;

    .event-content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        max-width: 400px;

        > * {
            color: $color-white;

            &:first-child {
                font-size: $h1;
                margin-bottom: $base-padding;
                line-height: 1.2;
                color: $color-white;
            }
        }

        .event-tag {
            color: $color-primary;
            text-transform: uppercase;
            margin-bottom: 0;
            font-weight: $bold;
            font-size: $font-size-base - 0.2;
        }

        .event-title {
            font-size: $h4;
            font-weight: bold;
            margin-bottom: $base-padding/2;
            
            a {
                color: $color-white;

                &:hover {
                    color: $color-primary;
                }            
            }
        }
    }
    
    &:before {
        content:'';
        display: block;
        width: 100%;
        height: 100%;
        background: url('../../assets/images/banners/events.jpg') no-repeat center center $color-tertiary-dark;
        background-size:cover;
        filter: grayscale(100%);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.4;
    }
    
    &:after {
        content:'';
        display: block;
        width: 100%;
        height: 100%;
        background: $color-secondary;
        mix-blend-mode: multiply;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>