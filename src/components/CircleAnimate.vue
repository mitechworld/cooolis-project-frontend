<template>
    <div>

        <svg height="100" width="100" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="gray" />
            <circle class="pieanimate" r="5" cx="10" cy="10" fill="transparent"
            stroke="#00cd90"
            stroke-width="10"
            :stroke-dasharray="stroke_values"
            transform="rotate(-90) translate(-20)" />
        </svg>

        <div class="scorepop">
            مهارت شما در این حوزه 
             {{final_score}}
        درصد است
        </div>



    </div>
</template>

<script>


export default {
    name: "CircleAnimate",
    data () {
        return {
            isShowing: false,
            percent: 70,
        }
    },
    props: ['final_score',],
    computed: {
        stroke_values () {
            return `${this.final_score * 31.42 / 100} ${31.42}`
        }
    },
    methods: {
        toggleShow() {
            this.isShowing = !this.isShowing;
        }
    }
}
</script>

<style scoped>

svg {
    margin: 5px;
}


.pieanimate {
    animation-name: fillme;
    animation-duration: 4s;
    background-color: red;
}

@keyframes fillme {
  from {stroke-dasharray:0 31.42;}
}


.scorepop {
    height: 50px;
    visibility: hidden;
    animation-name: popmsg;
    animation-duration: 1s;
    animation-delay: 3s;
    animation-fill-mode: forwards;

}

@keyframes popmsg {
    0% {visibility: hidden; font-size: 2px;}
    70% {visibility: visible; font-size: 25px;}
    100% {visibility: visible; font-size: 20px;}
    
}

</style>