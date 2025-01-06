<template>
    <!-- <h1>ActivityCards</h1> -->
    <!-- Indsæt HTML herunder -->
     
    <article class="avtivityCardIndividual">
        <p id="activityType">Familieaktivitet</p>
        <p class="bold">DEN DØMTE ESKADRILLE</p>
        <p>Anden verdenskrig</p>
    </article>
</template>

<style scoped>
    .avtivityCardIndividual {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url(../assets/img/FGMALogo.png);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 30px;
        height: 500px;
        width: 400px;
        position: relative;
    }

    p{
        /* color: var(--headerColor); */
        padding: 20px;
    }
    p.bold{
        font-weight: var(--boldWeight);
    }
    .avtivityCardIndividual p:nth-child(2){
        padding-bottom: 5px;
    }
    .avtivityCardIndividual p:last-child{
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
        .avtivityCardIndividual{
            height: 400px;
            width: 300px;
        }
    }
</style>