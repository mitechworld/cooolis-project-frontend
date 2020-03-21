<template>
    <div>
                <!-- Footer -->
        <footer class="bg-dark text-white">

        <!-- Footer Elements -->
        <div class="container">


        </div>
        <!-- Footer Elements -->

        <!-- Copyright -->
        <div class="bg-secondary">© 2020 Copyright
            <router-link to="/"> 
                <img class="logo" src="../assets/cooolis_eng.png" alt="">
            </router-link>
        </div>
        <!-- Copyright -->

        </footer>
        <!-- Footer -->
    </div>
</template>


<script>
export default {
    name: "MainFooter",
}
</script>

<style scoped>
.logo {
    width: 150px;
}

.bg-secondary {
    padding: 10px;
}

.container {
    height: 30px;
}
</style>


