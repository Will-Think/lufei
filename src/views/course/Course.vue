<template>
    <div class="course">
       <div class="container">
           <ul class="coursebox">
               <li @click='categoryHandle(index,category.id)' v-for="(category,index) in categoryList" :key="index" :class='{active: index === currentIndex }'>
                   {{category.name}}
               </li>
           </ul>
           <div class="courseList">
               <div class="detail">
                   <div class="head">
                       <img src="" alt="" class="backImg">
                       <b class="mark"></b>
                       <p>Python开发21天入门</p>
                   </div>
                   <div class="content">
                       <p></p>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'Course',
    data() {
        return {
            categoryList: [],
            currentIndex: 0
        }
    },
    methods: {
        // 获取分类列表
        getcategoryList() {
            this.$http.categoryList('/course_sub/category/list/').then(res => {
                console.log(res)
                if (res.error_no === 0) {
                    this.categoryList = res.data
                    let firstCategory = {
                        id: 0,
                        name: '全部',
                        categoryId: 0
                    }
                    this.categoryList.unshift(firstCategory)
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        categoryHandle(index, category_id) {
            this.currentIndex = index
        }
    },
    created() {
        this.getcategoryList(); 
    }
}
</script>
<style scoped>
.course {
    width: 100%;
    height: 1000px;
    background: #f3f3f3;
}
.coursebox {
    padding: 24px;
    font-size: 16px;
    color: #666;
    letter-spacing: .41px;
    font-family: PingFangSC-Regular;
    overflow: hidden;
}
ul li {
    float: left;
    margin-right: 24px;
    cursor: pointer
}
ul li.active {
    color: #00b4e4;
}
.courseList {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.detail {
    float: left;
    width: 248px;
    height: auto;
    margin-right: 16px;
    margin-bottom: 30px;
    position: relative;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 2px 6px 0 #e8e8e8;
    transition: all .2s linear;
    cursor: pointer;
}
.detail:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, .15)
}
.detail:nth-of-type(4n) {
    margin-right: 0;
}
.head {
    width: 100%;
    height: 144px;
}
.detail .head img {
    width: 100%;
    height: 144px;
    position: absolute;
    left: 0;
    top: 0;
}
.detail .head b {
    width: 100%;
    height: 144px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: .9;
    background: #56cbc4;
}
.detail .head p {
    position: absolute;
    width: 248px;
    height: 144px;
    left: 0;
    top: 0;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-around;
}
.content-detail {
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
}
.content-detail .span3 {
    position: absolute;
    right: 0;
}
.content-detail .span3 .s {
    text-decoration: line-through;
}
.content-detail .span4 {
    position: absolute;
    right: 0;
    color: #fc0107
}
.content-detail .span3 .t {
    color: #000;
    margin-left: 5px;
    text-decoration: none !important;
    color: #fc0107
}
</style>