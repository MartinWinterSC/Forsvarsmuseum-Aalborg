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
        background-position: center;
        overflow: hidden;
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
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)); 
    }
    .activityCardIndividual p:last-child{
        padding-top: 5px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));
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
    .activityCardIndividual:hover{
        transform: scale(1.1);
        height: 500px;
    }
    @media screen and (max-width: 950px){
        .activityCardIndividual{
            height: 400px;
            min-width: 300px;
            width: 300px;
        }
        .activityCardIndividual:hover{
            transform: scale(1.1);
            height: 400px;
        }
        #activityType{
            border-radius: 25px;
        }
        .activityCardIndividual{
            border-radius: 15px;
        }
    }
</style>