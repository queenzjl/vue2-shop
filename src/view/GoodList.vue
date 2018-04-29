<template>
    <div>
        <nav-header></nav-header>
        <nav-bread></nav-bread>
        <div class="accessory-result-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">排序:</span>
                    <a href="javascript:void(0)" class="default" :class="{'cur':sortActive}" @click="defaultSort()">默认</a>
                    <a href="javascript:void(0)" class="price" v-bind:class="{'sort-up': sortFlag, 'cur':!sortActive}" @click="sortGoods()">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                    <a href="javascript:void(0)" class="filterby" @click.stop="showFilterPop()">筛选</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div class="filter" id="filter" v-bind:class="{'filterby-show': filterBy}">
                        <dl class="filter-price">
                            <dt>价格区间:</dt>
                            <dd><a href="javascript:void(0)" @click="setPriceFilter('all')" v-bind:class="{'cur': priceChecked == 'all'}">选择价格</a></dd>
                            <dd v-for="(item,index) in priceFilter">
                                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur': priceChecked == index}">￥ {{item.startPrice}} - {{item.endPrice}} 元</a>
                            </dd>
                        </dl>
                    </div>

                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                            <ul>
                                <li v-for="item in goodsList" >
                                    <div class="pic">
                                        <a href="#"><img v-lazy="'/static/' + item.productImage" alt=""></a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{item.productName}}</div>
                                        <div class="price">{{item.salePrice}}</div>
                                        <div class="btn-area">
                                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop()"></div>
        <nav-footer></nav-footer>
  
    </div>
</template>

<script>
import './../assets/css/base.css'
import './../assets/css/goods-list.css'
import NavHeader from "./../components/NavHeader"
import NavFooter from "./../components/NavFooter"
import NavBread from "./../components/NavBread"
import axios from 'axios'
export default {
    name: 'GoodList',
    data () {
        return {
            goodsList: [],
            page: 1,    //分页 默认为第1页
            pageSize: 8,//一页展示8条数据
            sortFlag: true,//排序,true为升序
            priceFilter: [
                {
                    startPrice:'0.00',
                    endPrice:'100.00'
                },
                {
                    startPrice:'100.00',
                    endPrice:'500.00'
                },
                {
                    startPrice:'500.00',
                    endPrice:'1000.00'
                },
                {
                    startPrice:'1000.00',
                    endPrice:'2000.00'
                },
                {
                    startPrice:'2000.00',
                    endPrice:'3000.00'
                },
                {
                    startPrice:'3000.00',
                    endPrice:'6000.00'
                }
            ],
            priceChecked: 'all',
            filterBy: false,
            overLayFlag: false,
            sortActive: true
        }
    },
    mounted(){
        this.getGoodsList();
    },
    components : {
        NavHeader,
        NavFooter,
        NavBread
    },
    methods: {
        getGoodsList: function(){
            var param = {
                page: this.page,
                pageSize: this.pageSize,
                sort: this.sortFlag ? 1: -1
            }
            axios.get('/goods',{
                params: param   //传递的参数，自动做了编码处理
            }).then( (res) => {
                console.log(res)
                var res = res.data.result;
                this.goodsList = res.list;
            })
        },
        //默认排序
        defaultSort(){
            this.sortFlag = true;
            this.page = 1;
            this.getGoodsList();
            this.sortActive = true;
        },
        //价格排序
        sortGoods(){
            this.sortFlag = !this.sortFlag;
            this.page = 1;
            this.getGoodsList();
            this.sortActive = false;
        },
        //设置选中价格区间样式
        setPriceFilter(index){
            console.log(index)
            this.priceChecked = index;
        },
        //筛选功能，显示弹出层
        showFilterPop(){
            this.filterBy = true;
            this.overLayFlag = true;
        },
        //关闭弹出层
        closePop(){
            this.filterBy = false;
            this.overLayFlag = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
