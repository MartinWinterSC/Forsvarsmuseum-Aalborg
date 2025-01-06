<script>
export default {
    props: {
        imageSrc: { type: String, required: true },
    },
};
</script>

<template>
    <article class="activityCardIndividual" :style="{ backgroundImage: `url(${imageSrc})` }">
        <p id="activityType"><slot name="activityCatagory"></slot></p>
        <p class="bold"><slot name="activityName"></slot></p>
        <p><slot name="activityAvailability"></slot></p>
    </article>
</template>

<style scoped>
    .activityCardIndividual {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 30px;
        height: 500px;
        min-width: 400px;
        width: 400px;
        position: relative;
    }

    p{
        color: var(--headerColor);
        padding: 20px;
    }
    p.bold{
        font-weight: var(--boldWeight);
    }
    .activityCardIndividual p:nth-child(2){
        padding-bottom: 5px;
    }
    .activityCardIndividual p:last-child{
        padding-top: 5px;
    }
    #activityType{
        position: absolute;
        top: 0;
        background-color: var(--headerIconColor);
        color: var(--headerColor);
        border-radius: 50px;
        padding: 5px 15px;
        margin: 20px;
    }
    @media screen and (max-width: 950px){
        .activityCardIndividual{
            height: 400px;
            min-width: 300px;
            width: 300px;
        }
    }
</style>