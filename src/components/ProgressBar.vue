<template>
 
</template>

<script>
export default {
    name: "ProgressBar",
    props: ['progress',]
}
</script>

<style scoped>

#bar-edge {
    background-color: #00cd90;
    height: 10px;
    width: 20%;
}


#bar-inside {
    background-color: #039a87;
    height: 10px;
    float:left
}

</style>