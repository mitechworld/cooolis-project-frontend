<template>
    <div> 
        توانایی شما در این زمینه در حدود {{ final_score }} درصد است.
    </div>
</template>

<script>
export default {
    name: 'FinalResult',
    props: ['final_score',]
        
    

}
</script>