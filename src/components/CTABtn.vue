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
        color: var(--specialCaseColor);
        font-weight: var(--boldWeight);
        align-self: center;
        background-color: var(--backgroundPrimaryColor);
    }
    p:hover{
        color: var(--headerColor);
        background-color: var(--specialCaseColor);
    }
    .textColor{
        color: var(--specialCaseColor);
    }
    @media screen and (max-width: 950px){
        p{
            border-radius: 5px;
        }
    }
</style>