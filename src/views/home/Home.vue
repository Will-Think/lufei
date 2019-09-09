<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in lunboImage" :key="item.id" class="swiper">
            <img :src="item.imgSrc" alt="">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            lunboImage: [
                {
                    id: 1,
                    imgSrc: 'https://hcdn1.luffycity.com/static/frontend/activity/banner@2x_1567752488.7787437.png'
                },
                {
                    id: 2,
                    imgSrc: 'https://hcdn1.luffycity.com/static/frontend/index/banner1_1567492241.7829425.png'
                },
                {
                    id: 3,
                    imgSrc: 'https://hcdn1.luffycity.com/static/frontend/index/banner2@2x_1567507260.133423.png'
                },
                {
                    id: 4,
                    imgSrc: 'https://hcdn1.luffycity.com/static/frontend/index/banner3_1567492242.652474.png'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .swiper img {
        width: 100%;
    }
</style>