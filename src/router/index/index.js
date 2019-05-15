import Vue from "vue"
import Router from "vue-router"
import routes from "./routesConf"

Vue.use(Router)

export default new Router({
    mode:"history",
    base:"index",
    scrollBehavior: () => ({ y: 0 }),
    routes
})