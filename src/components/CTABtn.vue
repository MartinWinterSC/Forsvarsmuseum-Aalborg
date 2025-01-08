<script>
    export default {};
</script>

<template>
    <p class="textColor">
        <slot>SE ALLE UDSTILLINGER</slot>
    </p> 
</template>

<style scoped>
    p{
        display: inline-block;
        padding: 10px 30px;
        border-radius: 10px;
        font-size: 1rem;
        color: var(--headerColor);
        font-weight: var(--boldWeight);
        align-self: center;
        background-color: var(--backgroundPrimaryColor);
    }
    p:hover{
        color: var(--specialCaseColor);
        background-color: var(--headerColor);
    }
    .textColor{
        color: var(--specialCaseColor);
    }
</style>