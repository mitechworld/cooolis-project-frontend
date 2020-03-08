<template>
        <div>
            <div class="login-box">
                <LoginRegisterPopup ref="LRPopup"/>
            </div>
            <b-navbar class="navbar" toggleable="sm" >
                <router-link to="/">
                    <img class="logo" src="../assets/cooolis_logo.png" alt="">
                </router-link>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    
                    <b-nav-item to="/">موضوعات</b-nav-item>
                    <b-nav-item to="/">وبلاگ</b-nav-item>

                </b-navbar-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="mr-auto">
                    <div v-if="checkLogging">
                    <b-nav-item-dropdown left>
                    <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em> میلاد شیری </em>
                        </template>
                        <b-dropdown-item href="#">پروفایل</b-dropdown-item>
                        <b-dropdown-item @click="logout" href="#">خروج</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>

                    <div v-if="!checkLogging">
                        <b-nav-item @click="showform">ورود/عضویت</b-nav-item>
                    </div>

                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            </div>
</template>


<script>
import LoginRegisterPopup from './LoginRegisterPopup'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'MainHeader',
    components: {
        LoginRegisterPopup,
    },
    data (){
        return {
        }
    },
    computed: {
        checkLogging() {
            this.CheckLoggedIn()
            return this.isLoggedIn
        },
        ...mapGetters(['isLoggedIn']),
        },

    methods: {
        ...mapActions(['showform', 'logout', 'CheckLoggedIn']),

        // showform(){
        //     this.$refs.LRPopup.toggleFormVisibility()
        // },
        // logOut() {
        //     // this.$session.destroy()
        //     // this.$forceUpdate();
        //     localStorage.removeItem('token')
        //     location.reload()

        // },

  },
  props: {
  }
}
</script>

<style scoped>
.logo {
    width: 120px;
}

.navbar {
    background-color: white;
    box-shadow: 1px 0 4px #00cd90;
    border-bottom-color: #00cd90;
    border-bottom-width: 0px;
    border-bottom-style: solid;
    color: black;
    margin-bottom: 20px;
}

b-nav-item{
    color: black;
}
</style>