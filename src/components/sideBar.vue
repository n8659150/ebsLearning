<template>
<div>
  <div class="col-sm-3 col-md-2 sidebar">
        <div class="top-navigation">
            <div class="t-menu">MENU</div>
            <div class="t-img" @click="toggleNav(isNavOpen)">
                <img :src="sidebarLineSrc" alt="sidebar" />
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="drop-navigation drop-navigation" v-show="isNavOpen === true">
            <ul class="nav nav-sidebar">
                <li v-for="(menuItem,key) in menuItems" :key="key" :class="currentUrl === menuItem['menuUrl'] ? 'active':''" @click="activeMenu(menuItems,key)">
                    <router-link :to="menuItem['menuUrl']" class="user-icon">
                        <span class="glyphicon icon_margin" :class="menuItem['icon']" aria-hidden="true"></span>{{menuItem['name']}}
                        <!-- <span v-if="menuItem['child']" class="glyphicon glyphicon-menu-down" aria-hidden="true"></span> -->
                    </router-link>
                    <!-- <ul class="subMenu">
                        <li v-for="(subItem,key) in menuItem['child']" :key="key" :class="currentUrl === subItem['menuUrl'] ? 'active':''" @click="activeMenu(menuItem['child'],key)">
                            <router-link :to="subItem['menuUrl']">{{subItem['name']}}</router-link>
                        </li>
                    </ul> -->
                </li>
                <!-- sub menu -->
                    
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "sideBar",
  data() {
    return {
      isNavOpen:true,
      sidebarLineSrc:require('../../static/images/lines.png'),
      menuItems: [
        {
          name: "Home",
          icon: "glyphicon-home",
          menuUrl: "/",
          active: true
        },
        {
          name: "Purchases",
          icon: "glyphicon-blackboard",
          menuUrl: "/purchases",
          active: false
        },
        {
          name: "Sales",
          icon: "glyphicon-king",
          menuUrl: "/sales",
          active: false
        },
        {
          name: "Payables",
          icon: "glyphicon-hourglass",
          menuUrl: "/Payables",
          active: false
        },
        {
          name: "Receivables",
          icon: "glyphicon-list-alt",
          menuUrl: "/Receivables",
          active: false
        },
        {
          name: "Processing",
          icon: "glyphicon-asterisk",
          menuUrl: "/processing",
          active: false
        }
      ],
      currentUrl: ""
    };
  },
  watch: {
    $route() {
      this.currentUrl = this.$route.fullPath; // 实时监测当前路由的变化并且赋值
      console.log(this.currentUrl);
    }
  },
  methods: {
    activeMenu(whichMenu, whichOne) {
      whichMenu.map(menuItem => {
        return (menuItem["active"] = false);
      });

      whichMenu[whichOne]["active"] = true;
    },
    toggleNav(){
      this.isNavOpen = !this.isNavOpen;
      console.log(this.isNavOpen);
    }
  },
  mounted() {
    this.currentUrl = this.$route.fullPath;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  top: 80px;
  background: #272c2e;
}
.icon_margin {
  margin: 0 2em 0 0;
  font-size: 16px !important;
}
@media (min-width: 992px) {
  .drop-navigation {
    display:block !important;
  }
}
@media (max-width: 991px) {
  .glyphicon {
    display:none !important;
  }
}

@media (max-width:320px) {
  ul.nav.nav-sidebar li a {
    padding:0.6em !important;
  }
}
/* .nav-sidebar ul.cl-effect-1 li,
.nav-sidebar ul.subMenu li a {
  color: #bbb;
}
ul.nav.nav-sidebar ul.subMenu li.active a {
  color: #21deef !important;
} */
</style>
