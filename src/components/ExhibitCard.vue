<script>
export default {
    props: {
        imageSrc: { type: String, required: true },
    },
};
</script>

<template>
    <article class="ExhibitCardIndividual" :style="{ backgroundImage: `url(${imageSrc})` }">
        <p class="bold"><slot name="exhibitName"></slot></p>
        <p><slot name="exhibitCatagory"></slot></p>
    </article>
</template>

<style scoped>
    .ExhibitCardIndividual{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 30px;
        height: 500px;
        min-width: 400px;
        width: 400px;
        background-position: center;
        overflow: hidden;
    }
    p {
        padding: 20px;
        color: var(--headerColor);
    }
    p.bold {
        font-weight: var(--boldWeight);
    }
    .ExhibitCardIndividual p:first-child{
        padding-bottom: 5px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    }
    .ExhibitCardIndividual p:last-child{
        padding-top: 5px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));
    }
    .ExhibitCardIndividual:hover{
        transform: scale(1.1);
        height: 500px;
    }
    
    @media screen and (max-width: 950px){
        .ExhibitCardIndividual {
            height: 400px;
            min-width: 300px;
            width: 300px;
            border-radius: 15px;
        }
        .ExhibitCardIndividual:hover{
            transform: scale(1.1);
            height: 400px;
        }
    }
</style>