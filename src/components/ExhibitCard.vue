<script>
export default {
    props: {
        imageSrc: { type: String, required: true },
    },
};
</script>

<template>
    <article>
        <div class="exhibitCardIndividual" :style="{ backgroundImage: `url(${imageSrc})` }"></div>
        <div class="exhibitInfo">
            <p class="bold"><slot name="exhibitName"></slot></p>
            <p><slot name="exhibitCatagory"></slot></p>
        </div>
    </article>
</template>

<style scoped>
    .exhibitCardIndividual{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
        background-position: center;
        overflow: hidden;
        position: absolute;
        z-index: 1;
    }
    p{
        padding: 20px;
        color: var(--headerColor);
    }
    p.bold{
        font-weight: var(--boldWeight);
    }
    .exhibitInfo p:first-child{
        padding-bottom: 5px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    }
    .exhibitInfo p:last-child{
        padding-top: 5px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
    }
    article:hover .exhibitCardIndividual{
        transform: scale(1.1);
    }
    article{
        overflow: hidden;
        height: 500px;
        min-width: 400px;
        border-radius: 30px;
        position: relative;
    }
    .exhibitInfo{
        position: absolute;
        z-index: 2; 
        width: 100%;
        bottom: 0;
    }

    @media screen and (max-width: 950px){
        article {
            height: 400px;
            min-width: 300px;
            /* width: 300px; */
            border-radius: 15px;
        }
        .exhibitCardIndividual:hover{
            transform: scale(1.1);
            height: 400px;
        }
    }
</style>