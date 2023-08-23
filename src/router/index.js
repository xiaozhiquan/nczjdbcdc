import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import appRouter from './app.js'
//多次点击同一path报错---
let originPush = Router.prototype.push; //备级push方法
Router.prototype.push = function(location, resolve, reject) {
    if (resolve & reject) { //如果传了回端函数，直族使用
        originPush.call(this, location, resolve, reject)
    } else {
        //如果没有传回端虽嫩，手动旅加
        originPush.call(this, location, () => {}, () => {});
    }
}

export default new Router({
    routes: appRouter
})