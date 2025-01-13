<template>
    <section id="bottomSticky">
        <div>
            <RouterLink to="/visitUsView">
                <p class="bold">FORBERED DIT BESØG</p>
            </RouterLink>
        </div>
        <div class="openingHours">
            <p>Museet er åbent idag</p>
            <p class="bold">10:00 - 17:00</p>
        </div>
        <div>
            <img src="./icons/ticket.svg" alt="Køb billet knap">
            <img src="./icons/information.svg" alt="Informations knap" id="info">
        </div>
    </section>
</template>

<style scoped>
    p{
        color: var(--headerColor);
        font-size: 1rem;
        margin: 25px 10px;
    }
    img{
        background-color: var(--backgroundPrimaryColor);
        border-radius: 15px;
        padding: 10px 30px;
        margin-left: 15px;
        height: 20px;
    }
    #info{
        background-color: var(--headerColor);
    }
    .bold{
        font-weight: var(--boldWeight);
    }
    section{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: var(--headerIconColor);
        padding: 15px 0;
        position: sticky;
        bottom: 0;
        width: 100%;
        z-index: 5;
    }
    .openingHours p:first-child{
        text-wrap: balance;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid var(--headerColor);
        border-left: 1px solid var(--headerColor);
    }
    div:first-child{
        border-left: none;
    }
    div:last-child{
        border-right: none;
    }
    section#bottomSticky{
        margin: 0;
    }
    img:hover{
        background-color: var(--headerColor);
    }

    @media screen and (max-width: 950px){
        p{
            font-size: .75rem;
        }
        img{
            height: 15px;
            border-radius: 7.5px;
            padding: 5px 15px;
        }
    }
</style>