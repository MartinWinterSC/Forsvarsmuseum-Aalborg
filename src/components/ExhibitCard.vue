<template>
    <!-- <h1>ExhibitCard</h1> -->
    <!-- Indsæt HTML herunder -->
     
    <article class="ExhibitCardIndividual">
        <p class="bold">DEN DØMTE ESKADRILLE</p>
        <p>Anden verdenskrig</p>
    </article>
</template>

<style scoped>
    .ExhibitCardIndividual {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url(../assets/img/FGMALogo.png);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 30px;
        height: 500px;
        min-width: 400px;
        width: 400px;
    }
    p{
        /* color: var(--headerColor); */
        padding: 20px;
    }
    p.bold{
        font-weight: var(--boldWeight);
    }
    .ExhibitCardIndividual p:first-child{
        padding-bottom: 5px;
    }
    .ExhibitCardIndividual p:last-child{
        padding-top: 5px;
    }
    @media screen and (max-width: 950px){
        .ExhibitCardIndividual{
            height: 400px;
            min-width: 300px;
            width: 300px;
        }
    }
</style>