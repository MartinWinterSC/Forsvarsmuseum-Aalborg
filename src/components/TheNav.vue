<script>
export default{
    data(){
        return{
            isMenuVisible: false,
        };
    },
    methods:{
        toggleMenu(){
            this.isMenuVisible = !this.isMenuVisible;
        },
    },
};
</script>

<template>
    <nav :class="{ 'overlay-active': isMenuVisible }">
        <div class="topnav">
            <div class="navPointsPrimary">
                <RouterLink to="/"><img src="@/assets/img/FGMALogo.png" alt="FGMA"></RouterLink>
                <div class="desktopNavPoints">
                    <RouterLink to="/visitUsView">BESØG</RouterLink>
                    <RouterLink to="/exhibitOverView">UDSTILLINGER</RouterLink>
                    <RouterLink to="/">OM MUSEET</RouterLink>
                </div>
            </div>
            <div class="navPointsSecondary">
                <ul class="languageSelect">
                    <li>EN</li>
                    <li class="active">DK</li>
                </ul>
                <p class="ticketOrdering">BESTIL BILLETTER</p>
                <i class="fa-solid fa-bars navMenuToggle" v-if="!isMenuVisible" @click="toggleMenu"></i>
                <i class="fa-solid fa-xmark navMenuToggle" v-else @click="toggleMenu"></i>
            </div>
        </div>
        <div class="overlayMenuContainer" :class="{ active: isMenuVisible }">
            <div class="navPointsMenu" id="navPointsMenu">
                <RouterLink to="/visitUsView">BESØG</RouterLink>
                <RouterLink to="/exhibitOverView">UDSTILLINGER</RouterLink>
                <RouterLink to="/">OM MUSEET</RouterLink>
            </div>
            <div class="miscMenu">
                <p class="bold">GÅ DIREKTE TIL:</p>
                <RouterLink to="/familyNKidsView">Familier og børn</RouterLink>
                <RouterLink to="/">Skoler</RouterLink>
                <RouterLink to="/">Grupper</RouterLink>
                <RouterLink to="/">Arkiv</RouterLink>
                <RouterLink to="/">Støt os</RouterLink>
            </div>
            <button class="ticketSale">BESTIL BILLETTER</button>
            <div class="contactInfo">
                <p class="medium">AALBORG FORSVARS- OG <br> GARNISONS MUSEUM</p>
                <p class="practicalInfo">Skydebanevej 22, 9000 Aalborg</p>
                <p class="openingHours practicalInfo">Åbent alle dage <br> 10 - 17</p>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navPointsMenu *, .languageSelect *, .desktopNavPoints *, p{
        text-decoration: none;
        color: var(--headerColor);
        font-size: 1rem;
        font-family: Chivo Mono;
    }
    .navPointsPrimary *:not(img){
        margin: 0;
        padding: 10px 20px;
    }
    .navPointsPrimary > *{
        padding: 5vw;
    }
    .languageSelect{
        display: flex;
        border: 3px solid var(--headerColor);
        border-radius: 15px;
    }
    .languageSelect *{
        list-style: none;
        margin: 0;
        padding: 15px 7.5px 15px 7.5px;
    }
    .languageSelect *:first-child{
        padding-left: 15px;
    }
    .languageSelect *:last-child{
        padding-right: 15px;
    }
    /*  */
    .overlayMenuContainer.active{
        display: block;
        margin: 0;
    }
    .navMenuToggle{
        cursor: pointer;
    }
    .fa-bars.navMenuToggle{
        display: block;
    }
    .fa-xmark{
        display: none;
    }
    .overlayMenuContainer.active ~ .fa-bars.navMenuToggle{
        display: none;
    }
    .overlayMenuContainer.active ~ .fa-xmark{
        display: block;
    }
    .overlayMenuContainer{
        .miscMenu{
            border: solid 2px var(--backgroundPrimaryColor);
            border-radius: 24px;
            padding: 15px 25px;
            display: flex;
            flex-direction: column;
            margin: 0 5vw;
        }
        a{
            font-family: roboto;
        }
        .ticketSale{
            width: 90vw;
            margin: 25px 5vw;
            background-color: var(--backgroundPrimaryColor);
            font-family: roboto;
            font-size: 1rem;
            padding: 15px;
            border-radius: 10px;
        }
        .ticketSale:hover{
            background-color: var(--headerColor);
        }
        .miscMenu a{
            margin-top: 10px;
        }
        .miscMenu a:last-child{
            color: var(--backgroundPrimaryColor);
        }
        a{
            color: var(--headerColor);
            text-decoration: none;
        }
        a:hover{
            text-decoration: underline;
        }
        p{
            padding: 0;
            margin: 0;
        }
        .navPointsMenu{
            display: flex;
            flex-direction: column;
            padding: 10vh 5vw 25px 5vw;
            margin: 0;
        }
        .contactInfo{
            padding: 0 5vw 50px 5vw;
            margin: 0;
        }
        .contactInfo p:last-child{
            margin-top: 15px;
        }
        .contactInfo .medium{
            font-weight: bold;
            font-size: 1rem;
        }
        .bold{
            padding: 10px;
        }

        .navPointsMenu a{
            font-size: 2rem;
        }
        .navPointsMenu a:not(:last-child){
            margin-bottom: 15px;
        }
    }
    .overlayMenuContainer p{
        border: none;
    }
    @media screen and (min-width: 950px){
        .overlayMenuContainer{
            position: relative;
        }
        .miscMenu{
            border: solid 2px var(--backgroundPrimaryColor);
            border-radius: 24px;
            padding: 15px 25px;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 40%;
            right: 50%;
            transform: translate(120%);
        }
        .navPointsMenu{
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-120%);
            display: flex;
            flex-direction: column;
        }
        
        .contactInfo{
            position: absolute;
            bottom: 5%;
            left: 5vw;
        }
        .ticketSale{
            display: none;
        }
    }
    nav, .navPointsPrimary, .navPointsSecondary{
        display: flex;
        align-items: center;
        margin: 0;
    }
    .navPointsPrimary img{
        height: 100px;
        margin: 0;
        margin-left: calc(5vw - 20px);
    }
    nav{
        justify-content: space-between;
        z-index: 10;
        width: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        position: fixed;
    }
    .navPointsSecondary{
        display: flex;
        justify-content: flex-end;

    }
    li{
        margin: 0;
    }
    li.active{
        text-decoration: underline;
        
    }
    li:hover{
        text-decoration: underline;
    }
    p{
        margin-left: 25px;
        padding: 15px;
        border: 3px solid var(--headerColor);
        border-radius: 15px;
    }
    .navPointsSecondary i{
        font-size: 50px;
        margin-left: 25px;
        margin-right: 5vw;
        color: var(--headerColor);
        width: 45px;
    }
    .desktopNavPoints{
        padding: 0;
        
    }
    .desktopNavPoints:last-child{
        padding: 0;
    }
    .desktopNavPoints *:hover, .navPointsMenu *:hover{
        text-decoration: underline;
    }
    .ticketOrdering:hover{
        background-color: var(--headerColor);
        color: var(--headerIconColor)
    }

    @media screen and (max-width: 1200px){
        .navPointsPrimary *{
            margin-right: 15px;
        }
        p{
            margin-left: 15px;
        }
        .navPointsSecondary i{
            margin-left: 15px;
        }
    }
    @media screen and (max-width: 1050px){
        .desktopNavPoints{
            display: none;
        }
        .navPointsMenu *, .languageSelect *, .desktopNavPoints *, p{
            font-size: 0.75rem;
        }
        .ticketOrdering{
            display: none;
        }
    }
    @media screen and (max-width: 950px){
        .navPointsPrimary img{
            height: 50px;
        }
        .languageSelect, p{
            border-radius: 7.5px;
        }
    }

    .topnav{
        position: sticky;
        top: 0;
        z-index: 10;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
    }

    .overlayMenuContainer{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--specialCaseColor);
        display: none;
        flex-direction: column;
        z-index: 9;
    }
    .overlayMenuContainer.active{
        display: flex;
    }
    .navMenuToggle{
        cursor: pointer;
        font-size: 50px;
        margin-left: 25px;
        margin-right: 5vw;
        color: var(--headerColor);
    }
    .navMenuToggle{
        display: block;
    }
    .overlay-active .navMenuToggle{
        display: none;
    }
    .navMenuToggle{
        cursor: pointer;
        font-size: 50px;
        color: var(--headerColor);
    }
    .fa-bars{
        display: block;
    }
    .fa-xmark{
        display: none;
    }
    .overlay-active .fa-bars{
        display: none;
    }
    .overlay-active .fa-xmark{
        display: block;
    }
    #navPointsMenu{
        font-weight: var(--boldWeight);
    }
    @media screen and (min-width: 950px){
        .overlayMenuContainer{
            position: absolute;
            display: none;
        }
        #navPointsMenu{
            padding: 0 25px;
        }
    }
</style>