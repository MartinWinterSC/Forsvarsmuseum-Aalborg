<script>
    export default {};
</script>

<template>
    <p>
        <slot>Default Button Text</slot>
    </p> 
</template>

<style scoped>
    p{
        display: inline-block;
        padding: 10px 30px;
        border-radius: 10px;
        font-size: 1rem;
        color: var(--specialCaseColor);
        border: 2px solid var(--specialCaseColor);
        font-weight: var(--boldWeight);
        align-self: center;
    }
    p:hover{
        color: var(--headerColor);
        background-color: var(--specialCaseColor);
    }
</style>