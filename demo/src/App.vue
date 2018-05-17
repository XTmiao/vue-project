<template>
  <div id="app">
    <HeaderView></HeaderView>
    <CarouselView></CarouselView>
    <!-- <IndexView></IndexView> -->
    <!-- <AboutUs></AboutUs> -->
    <!-- <rooter-link to="{path:'/', component:IndexView}"></rooter-link>
    <rooter-link to="{path:'/about', component:AboutUs}"></rooter-link> -->
    <!-- <rooter-link to="/"></rooter-link>
    <rooter-link to="/about"></rooter-link> -->
    <router-view></router-view>
    <FooterView></FooterView>
    <Register></Register>
  </div>
</template>

<script>
import HeaderView from './components/header'
import CarouselView from './components/carousel'
import FooterView from './components/footer'
//import IndexView from './components/index'
//import AboutUs from './components/aboutus'
import Register from './components/register'
import '../static/js/jQuery.js'
import routes from './router/index'
export default {
  name: 'App',
  components:{
    HeaderView,
    FooterView,
    CarouselView,
    Register
    //IndexView,
    //AboutUs
  },
  routes
}
</script>

<style>
@import '../static/css/index.css';
/*@import './assets/css/bootstrap.css';*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
ul{list-style: none;}
/* *{margin:0;padding:0;}
html,body{width: 100%;overflow-x:hidden;}
a{text-decoration: none;}
a:hover{text-decoration: none;} */
</style>
