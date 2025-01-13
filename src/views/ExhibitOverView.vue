<script setup>
    import HeroImgSub from '@/components/HeroImgSub.vue'; 
    import StickyBottomMenu from '@/components/StickyBottomMenu.vue';
    import ExhibitCard from '@/components/ExhibitCard.vue';

    import udstillingerForsidebillede from '@/assets/img/exhibitOverview/udstillinger_forsidebillede.jpg';

    import militareStyrker from '@/assets/img/exhibitOverview/ww2/MilitareStyrker.jpg';
    import denDomteEksadrille from '@/assets/img/exhibitOverview/ww2/den_domte_eksadrille.jpg';
    import besaettelsestiden from '@/assets/img/exhibitOverview/ww2/besaettelsestiden.jpeg';
    import flyvningILuften from '@/assets/img/exhibitOverview/ww2/flyvningILuften.jpg';
    import bunkeren from '@/assets/img/exhibitOverview/ww2/bunkeren.jpg';

    import hangaren from '@/assets/img/exhibitOverview/coldWar/hangaren.jpg';
    import forplads from '@/assets/img/exhibitOverview/coldWar/forplads.jpg';
    import nyUdstillingshal from '@/assets/img/exhibitOverview/coldWar/nyUdstillingshal.jpg';
    import udstillingsdakket from '@/assets/img/exhibitOverview/coldWar/udstillingsdakket.jpg';

    import haeren from '@/assets/img/exhibitOverview/totalforsvar/haeren.jpg';
    import flyvevaabnet from '@/assets/img/exhibitOverview/totalforsvar/flyvevaabnet.jpg';
    import hjemmevaernet from '@/assets/img/exhibitOverview/totalforsvar/hjemmevaernet.jpg';
    import politi from '@/assets/img/exhibitOverview/totalforsvar/politi.jpg';
    import jagerKorpset from '@/assets/img/exhibitOverview/totalforsvar/jagerKorpset.jpg';
    import signaltjenesten from '@/assets/img/exhibitOverview/totalforsvar/signaltjenesten.jpg';

    import garnisonen from '@/assets/img/exhibitOverview/aalborgGarrison/garnisonen.jpg';
    import dronningensLivregiment from '@/assets/img/exhibitOverview/aalborgGarrison/dronningensLivregiment.jpg';
    import militærmusik from '@/assets/img/exhibitOverview/aalborgGarrison/militærmusik.jpg';

    import attenfiretreds from '@/assets/img/exhibitOverview/1864/1864.jpg';

    import { ref } from 'vue';

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const dTOffset = 200;
            const mBOffset = 150; 
            const isViewportMB = window.innerWidth < 950;
            const offset = isViewportMB ? mBOffset : dTOffset;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const scrollToPosition = sectionTop - offset;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth',
            });
        }
    };


</script>

<template>
    <HeroImgSub
        :imageSrc="udstillingerForsidebillede"
    >
        <template #subPageHeading>VORES UDSTILLINGER</template>
        <template #subPageIntro>Her kan du se alle vores udstillinger</template>
    </HeroImgSub>
    <div id="main">
        <p>SKIP TIL</p>
        <div class="stickyFunction">
            <section class="localnav">
                
                <div class="localNavPointsMobile">
                    <div class="localNavGradientStart"></div>
                    <div class="localNavPoints">
                        <a href="#exhibitCategory1" @click.prevent="scrollToSection('exhibitCategory1')">2. VERDENSKRIG</a>
                        <a href="#exhibitCategory2" @click.prevent="scrollToSection('exhibitCategory2')">KOLDE KRIG</a>
                        <a href="#exhibitCategory3" @click.prevent="scrollToSection('exhibitCategory3')">TOTALFORSVARET</a>
                        <a href="#exhibitCategory4" @click.prevent="scrollToSection('exhibitCategory4')">AALBORG GARNISON</a>
                        <a href="#exhibitCategory5" @click.prevent="scrollToSection('exhibitCategory5')">1864</a>
                    </div>
                    <div class="localNavGradientEnd"></div>
                </div>
            </section>
        </div>
        <section class="categorySingle" id="exhibitCategory1">
            <h2>2. VERDENSKRIG</h2>
            <div class="exhibitContainer">
                <ExhibitCard
                    :imageSrc="militareStyrker"
                >
                    <template #exhibitName>MILITÆRE STYRKER UNDER 2. VERDENSKRIG</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                <RouterLink to="/exhibitIndividualView">
                <ExhibitCard
                    :imageSrc="denDomteEksadrille"
                >
                    <template #exhibitName>DEN DØMTE ESKADRILLE</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                </RouterLink>
                <ExhibitCard
                    :imageSrc="besaettelsestiden"
                >
                    <template #exhibitName>BESÆTTELSESTIDEN 1940-1945</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="flyvningILuften"
                >
                    <template #exhibitName>FLYVNING I LUFTEN OVER DANMARK 19440-1945</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="bunkeren"
                >
                    <template #exhibitName>BUNKEREN</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
            </div>
        </section>
        <section class="categorySingle" id="exhibitCategory2">
            <h2>KOLDE KRIG</h2>
            <div class="exhibitContainer">
                <ExhibitCard
                    :imageSrc="hangaren"
                >
                    <template #exhibitName>HANGAREN</template>
                    <template #exhibitCatagory>Den kolde krig</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="forplads"
                >
                    <template #exhibitName>FORPLADS</template>
                    <template #exhibitCatagory>Den kolde krig</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="nyUdstillingshal"
                >
                    <template #exhibitName>DEN NYE UDSTILLING</template>
                    <template #exhibitCatagory>Den kolde krig</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="udstillingsdakket"
                >
                    <template #exhibitName>UDSTILLINGSDÆKKET</template>
                    <template #exhibitCatagory>Den kolde krig</template>
                </ExhibitCard>
            </div>
        </section>
        <section class="categorySingle" id="exhibitCategory3">
            <h2>TOTALFORSVARET</h2>
            <div class="exhibitContainer">
                <ExhibitCard
                    :imageSrc="haeren"
                >
                    <template #exhibitName>HÆREN</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="flyvevaabnet"
                >
                    <template #exhibitName>FLYVÅBNET</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="hjemmevaernet"
                >
                    <template #exhibitName>HJEMMEVÆRNET</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="politi"
                >
                    <template #exhibitName>POLITI</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="jagerKorpset"
                >
                    <template #exhibitName>JÆGERKORPSET</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="signaltjenesten"
                >
                    <template #exhibitName>SIGNALTJENESTEN</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
            </div>
        </section>
        <section class="categorySingle" id="exhibitCategory4">
            <h2>AALBORG GARNISON</h2>
            <div class="exhibitContainer">
                <ExhibitCard
                    :imageSrc="garnisonen"
                >
                    <template #exhibitName>GARNISONEN</template>
                    <template #exhibitCatagory>Aalborg Garnison</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="dronningensLivregiment"
                >
                    <template #exhibitName>DRONINGENS LIVREGIMENT</template>
                    <template #exhibitCatagory>Aalborg Garnison</template>
                </ExhibitCard>
                <ExhibitCard
                    :imageSrc="militærmusik"
                >
                    <template #exhibitName>MILITÆR MUSIK I GARNISONEN</template>
                    <template #exhibitCatagory>Aalborg Garnison</template>
                </ExhibitCard>
            </div>
        </section>
        <section class="categorySingle" id="exhibitCategory5">
            <h2>1864</h2>
            <div class="exhibitContainer">
                <ExhibitCard
                    :imageSrc="attenfiretreds"
                >
                    <template #exhibitName>KRIGEN I 1864</template>
                    <template #exhibitCatagory>1864</template>
                </ExhibitCard>
            </div>
        </section>
    </div>
    <StickyBottomMenu />
</template>

<style scoped>
#main > p{
    font-size: 1rem;
    margin-bottom: 5px;
    margin-top: 50px;
}
section.localnav{
    margin-top: 0;
}
.localNavPoints{
    position: relative;
    background-color: var(--headerIconColor);
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
}
h2{
    margin-bottom: 25px;
}
.localNavPoints a{
    color: var(--headerColor);
    text-decoration: none;
    padding: 15px 0;
    font-family: Roboto;
    font-weight: var(--boldWeight);
}
.localNavPoints a:hover{
    text-decoration: underline;
}
.exhibitContainer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px 25px;
}
.stickyFunction{
    position: sticky;
    top: 125px;
    z-index: 3;
}
#main{
    margin: 0 5vw;
}

@media screen and (max-width: 1400px){
    .exhibitContainer{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 950px){
    .stickyFunction{
        top: 75px;
    }
}
@media screen and (max-width: 750px){
    .localNavPoints{
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        width: 100%;
        padding: 0 10px;
    }
    .localNavPoints a{
        flex-shrink: 0;
        margin: 0 10px;
        scroll-snap-align: center;
    }
    .localNavPoints::-webkit-scrollbar{
        height: 12px;
    }
    .localNavPoints::-webkit-scrollbar-thumb{
        background: var(--specialCaseColor);
    }
    .localNavPoints::-webkit-scrollbar-track{
        background: var(--headerColor);
    }
    .exhibitContainer{
        grid-template-columns: 1fr;
    }
    .localNavPointsMobile{
        position: relative;
        display: flex;
        align-items: center;
    }
    .localNavGradientStart, .localNavGradientEnd{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50px;
        pointer-events: none;
        z-index: 1;
    }
    .localNavGradientStart{
        left: 0;
        background: linear-gradient(to right, var(--headerIconColor), rgba(255, 255, 255, 0));
    }
    .localNavGradientEnd{
        right: 0;
        background: linear-gradient(to left, var(--headerIconColor), rgba(255, 255, 255, 0));
    }
}
</style>