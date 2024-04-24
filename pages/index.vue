<template> 
    <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="slide in 6" :key="slide">
        <div class="carousel__item">
            <img id="slider" :src="`images/carousel/slide${slide}.jpg`">
        </div>
        </Slide>

        <template #addons>
        <Navigation />
        </template>
    </Carousel>
        <!-- <div id="IndexPage" class="max-w-[1200px] mx-auto px-2 h-[200px]"></div> -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .carousel__item{
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .carousel__prev,.carousel__next{
        width: 40px;
        height: 200px;
        background-color: white;
        color: rgb(196, 196, 196);
        margin-top: -100px;
        border: transparent;
    }
    .carousel__prev:hover,.carousel__next:hover{
        width: 40px;
        height: 200px;
        color: rgb(196, 196, 196);
        margin-top: -100px;
        border: 3px solid rgb(217, 217, 217);
    }
</style>