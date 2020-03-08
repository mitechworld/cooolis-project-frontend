<template>
<div>
    <div @click="toggleFormVisibility" class="screen-box" :class="{'visible':LoginRegisterShow}" >
    </div>

    <div class="login-register-box" :class="{'visible':LoginRegisterShow}">
        <form>
        <div class="form-group">
            <input type="text" v-model="credentials.username" class="form-control" id="username" aria-describedby="emailHelp" placeholder="نام کاربری">
        </div>
        <div class="form-group">
            <input type="password" v-model="credentials.password" class="form-control" id="password" placeholder="پسورد">
        </div>
        <button type="submit" @click="login(credentials)" class="btn btn-primary">ورود</button>
        </form>

    </div>
</div>
</template>


<script>
// import axios from 'axios';
// import swal from 'sweetalert2';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "LoginRegisterPopup",
    data() {
        return {
            // LoginRegisterShow: false,
            credentials: {},
        }
    },
    mounted() {
    },
    computed: mapGetters(['LoginRegisterShow']),

    methods: {
        ...mapActions(['login', 'toggleFormVisibility']),

        // toggleFormVisibility(){
        //   this.LoginRegisterShow = ! this.LoginRegisterShow
        // },
        // login() {
        //   // checking if the input is valid
            
        //       this.loading = true;
        //       axios.post('http://127.0.0.1:8000/api/user/token/', this.credentials).then(res => {
        //         // this.$session.start();
        //         // this.$session.set('token', res.data.access);
        //         localStorage.setItem('token', res.data.access)
        //         // console.log(this.$session.get('token'))
        //         this.toggleFormVisibility()
        //         location.reload()
        //       }).catch(e => {
        //         console.log(e)
        //         this.loading = false;
        //         swal({
        //           type: 'warning',
        //           title: 'Error',
        //           text: 'Wrong username or password',
        //           showConfirmButton:false,
        //           showCloseButton:false,
        //           timer:3000
        //         })
        //       })
            
        // },



    },
}
</script>


<style scoped>


input {
    display: block;
}

.visible {
    visibility: visible;
}

.login-register-box {
    visibility: hidden;
    position: fixed;
    z-index: 3;
    background-color: azure;
    padding: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    opacity: 1;

}

.screen-box {
    visibility: hidden;
    background-color:cadetblue;
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 100%;
    opacity: .5;
}
</style>