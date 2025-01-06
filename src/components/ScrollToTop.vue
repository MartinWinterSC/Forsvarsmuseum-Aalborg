<template>
    <!-- <h1>ScrollToTop</h1> -->
    <!-- Indsæt HTML herunder -->
    
    <p id="scrollToTop">&#xFFEC;</p>
</template>

<style scoped>
    #scrollToTop{
        display: flex;
        font-size: 3rem;
        border-radius: 50px;
        width: 3rem;
        height: 3rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        background-color: var(--specialCaseColor);
        color: var(--headerColor);
        transform: rotate(180deg);
        position: fixed;
        right: 5vw;
    }
    #scrollToTop:hover{
        background-color: var(--headerColor);
        color: var(--specialCaseColor);
    }
</style>