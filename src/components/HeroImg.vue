<template>
    <div class="heroContainer">
        <h1>OPLEV DANMARKS <br> MILITÆRE HISTORIE</h1>
        <div class="scrollIndicator">
            <a href="#scrollToPoint"><i class="fa-solid fa-arrow-down-long" id="scrollIndicatorIcon"></i></a>
            <p>Udforsk vores udstillinger</p>
        </div>
    </div>
</template>

<style scoped>
    .heroContainer{
        background-image: url(../assets/img/heroGif_DT.gif);
        height: 100vh;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 7;
        
    }
    #scrollIndicatorIcon{
        display: flex;
        font-size: 3rem;
        border: 2px solid var(--headerColor);
        border-radius: 50px;
        width: 3rem;
        height: 3rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }
    #scrollIndicatorIcon{
        animation-name: ScrollIndicationAnimation;
        animation-duration: 1000ms;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        animation-play-state: running;
        animation-timing-function: ease-in;
    }
    @keyframes ScrollIndicationAnimation{
        0%{
            transform: translate(0px, 0px);
        }
        33%{
            transform: translate(0px, 10px);
        }
        66%{
            transform: translate(0px, 5px);
        }
        100%{
            transform: translate(0px, 0px);
        }
    }
    i#scrollIndicatorIcon:hover{
        background-color: var(--headerColor);
        color: var(--headerIconColor);
        animation-play-state: paused;
    }
    .scrollIndicator{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%);
        text-decoration: none;
    }
    a{
        text-decoration: none;
    }
    h1, p, i{
        color: var(--headerColor);
    }
    i#scrollIndicatorIcon{
        font-size: 30px;
    }
    h1{
        position: absolute;
        margin-left: 5vw;
        top: 50vh;
        transform: translate(0, -50%);
    }
    @media screen and (max-width: 950px){
        .heroContainer{
            background-image: url(../assets/img/heroGif_MB.gif);
        }
    }
</style>