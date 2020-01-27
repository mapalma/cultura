
<template>
    <section class="teacher-block">
        <h3>Teacher</h3>
        <div teacher="teacher" class="teacher">
            <!-- <pre>{{teacher}}</pre> -->
            <h4>{{teacher.fields.name}}</h4>
            <div class="teacher-info">
                <img :src="teacher.fields.imagen.fields.file.url" :alt="teacher.fields.name" />
                <p>{{teacher.fields.introduction}}</p>
            </div>
           
        </div>
    </section>
</template>

<script>
    export default {
        name:'TeacherBlock',
        props:['teacher']
    }
</script>

<style lang="scss" scoped>

    h3 {
        color: $color-black;
    }

    .teacher {
        background: $color-coldlightgrey;
        padding: $base-padding;
        margin-bottom: $base-margin;
       
        .teacher-info {
            display: flex;
            align-items: flex-start;

        }

        h4 {
            color: $color-tertiary;
        }

        img {
            max-width: calc(40% - #{$base-padding});
            margin-right: $base-padding;
            filter:grayscale(100%);
        }

        p {
            font-size: $font-size-base - 0.25;
        }
    }


</style>
