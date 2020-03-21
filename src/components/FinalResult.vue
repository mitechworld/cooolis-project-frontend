<template>
    <div> 
        <CircleAnimate :final_score="final_score"/>
    </div>
</template>

<script>
import CircleAnimate from './CircleAnimate'

export default {
    name: 'FinalResult',
    components: {
        CircleAnimate,
    },
    props: ['final_score',]

}
</script>