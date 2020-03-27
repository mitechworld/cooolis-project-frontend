<template>
    <div id="bar-edge">
        <div id="bar-inside" :style="{width: progress + '%'}">
        </div>
    </div>    
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
    width: 100%;
}


#bar-inside {
    background-color: #039a87;
    height: 10px;
    float:left
}

</style>