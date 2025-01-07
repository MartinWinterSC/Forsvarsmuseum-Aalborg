<script setup>
    import HeroImg from '@/components/HeroImg.vue';
    import StickyBottomMenu from '@/components/StickyBottomMenu.vue';
    import ExhibitCard from '@/components/ExhibitCard.vue'
    import ActivityCard from '@/components/ActivityCard.vue';
    import InstagramCard from '@/components/InstagramCard.vue';
    import FEPCard from '@/components/FEPCard.vue';
    import ImgWText from '@/components/ImgWText.vue';
    import CTABtn from '@/components/CTABtn.vue';
    import HeroImgSub from '@/components/HeroImgSub.vue';
    import TheFooter from '@/components/TheFooter.vue';
    import ImgWTextAlt from '@/components/ImgWTextAlt.vue';
    
    import velkommenTilMuseetImg from '@/assets/img/landingPage/velkommen_til_museet.jpg';
    import komPoBesog from '@/assets/img/landingPage/kom_po_besog.jpg';
    import omMuseet from '@/assets/img/landingPage/om_museet.jpg';
    
    import denDomteEksadrille from '@/assets/img/landingPage/ExhibitImg/den_domte_eksadrille.jpg';
    import hangaren from '@/assets/img/landingPage/ExhibitImg/hangaren.jpg';
    import jagerKorpset from '@/assets/img/landingPage/ExhibitImg/jagerKorpset.jpg';
    import besættelsestiden from '@/assets/img/landingPage/ExhibitImg/besættelsestiden.jpeg';
    import handvaben from '@/assets/img/landingPage/ExhibitImg/handvaben.jpg';
    import flyvevabnet from '@/assets/img/landingPage/ExhibitImg/flyvevabnet.jpg';

    import AndenVerdensKrigIBornehojde from '@/assets/img/landingPage/ActivityImg/AndenVerdensKrigIBornehojde.jpg';
    import aktivitetpilot from '@/assets/img/landingPage/ActivityImg/aktivitet_pilot.jpg';
    import lydguidedTour from '@/assets/img/landingPage/ActivityImg/lydguidedTour.png';
    import fysiskRundvisning from '@/assets/img/landingPage/ActivityImg/fysisk_rundvisning.png';
    import aktivitetSeCockpittet from '@/assets/img/landingPage/ActivityImg/aktivitet_se_cockpittet.jpg';
    import aktivitetChurchilllobet from '@/assets/img/landingPage/ActivityImg/aktivitet_churchilllobet.jpg';

    import instagrampost1 from '@/assets/img/landingPage/instagramImg/instagrampost_1.jpg';
    import flagDag from '@/assets/img/landingPage/instagramImg/flagDag.jpg';
    import peterOrum from '@/assets/img/landingPage/instagramImg/peter_orum.jpg';
    import sommerfest from '@/assets/img/landingPage/instagramImg/sommerfest.jpg';
    import leopard1Kampvogn from '@/assets/img/landingPage/instagramImg/leopard1Kampvogn.jpg';
    import augustOproret from '@/assets/img/landingPage/instagramImg/augustOproret.png';
    
</script>

<template>
    <main>
        <HeroImg />
        <StickyBottomMenu />
        <section id="scrollToPoint">
            <div class="sideScrollHeader">
                <h2>VORES UDSTILLINGER</h2>
                <CTABtn id="CTABorder">
                    <template #CTAText>SE ALLE UDSTILLINGER</template>
                </CTABtn>
            </div>
            <div class="sideScrollContainner">
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="denDomteEksadrille"
                >
                    <template #exhibitName>DEN DØMTE ESKADRILLE</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="hangaren"
                >
                    <template #exhibitName>HANGAREN</template>
                    <template #exhibitCatagory>Den kolde krig</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="jagerKorpset"
                >
                    <template #exhibitName>JÆGERKORPSET</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="besættelsestiden"
                >
                    <template #exhibitName>BESÆTTELSESTIDEN</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="handvaben"
                >
                    <template #exhibitName>HÅNDVÅBEN</template>
                    <template #exhibitCatagory>Våbenkollektionen</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="flyvevabnet"
                >
                    <template #exhibitName>FLYVÅBNET</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
            </div>
        </section>
        <section>
            <ImgWText 
                :imageSrc="velkommenTilMuseetImg"
                imageAlt="Garnisonsmuseumets facade"
            >
                <template #introHeading>
                    Velkommen til Aalborg Forsvars- og Garnisonsmuseum
                </template>
                <template #introContent>
                    <p>Hos Aalborg Forsvars- og Garnisonsmuseum får du en unik mulighed for at udforske Danmarks forsvars- og besættelseshistorie gennem autentiske udstillinger og genstande.</p>
                    <p>Vi tilbyder en unik mulighed for komme tæt på historien gennem spændende fortællinger og sjældne genstande.</p>
                    <p>Tag familien, vennerne eller kollegerne med og få en oplevelse sammen. Vi glæder os til at byde dig velkommen og dele historien med dig!</p>                    
                </template>
                <template #CTAImgText>PLANLÆG DIT BESØG</template>
            </ImgWText>
        </section>
        <section>
            <div class="sideScrollHeader">
                <h2>AKTIVITETER</h2>
            </div>
            <div class="sideScrollContainner">
                <ActivityCard
                    class="sideScrollCard"
                    :imageSrc="AndenVerdensKrigIBornehojde"
                >
                    <template #activityCatagory>Familieaktivitet</template>
                    <template #activityName>2. VERDENSKRIG I BØRNEHØJDE</template>
                    <template #activityAvailability>Altid tilgængelig</template>
                </ActivityCard>
                <ActivityCard
                    class="sideScrollCard"
                    :imageSrc="aktivitetpilot"
                >
                    <template #activityCatagory>Familieaktivitet</template>
                    <template #activityName>BØRNEFØDSELSDAG</template>
                    <template #activityAvailability>Efter bestilling</template>
                </ActivityCard>
                <ActivityCard
                    class="sideScrollCard"
                    :imageSrc="lydguidedTour"
                >
                    <template #activityCatagory>Guided tour</template>
                    <template #activityName>TOUR MED LYDGUIDE</template>
                    <template #activityAvailability>Med i entrébillet</template>
                </ActivityCard>
                <ActivityCard
                    class="sideScrollCard"
                    :imageSrc="fysiskRundvisning"
                >
                    <template #activityCatagory>Guided tour</template>
                    <template #activityName>FYSISK RUNDVISNING</template>
                    <template #activityAvailability>Efter bestilling</template>
                </ActivityCard>
                <ActivityCard
                    class="sideScrollCard"
                    :imageSrc="aktivitetSeCockpittet"
                >
                    <template #activityCatagory>Familieaktivitet</template>
                    <template #activityName>UDFORSK COCKPITTET</template>
                    <template #activityAvailability>Altid tilgængelig</template>
                </ActivityCard>
                <ActivityCard
                    class="sideScrollCard"
                    :imageSrc="aktivitetChurchilllobet"
                >
                    <template #activityCatagory>Familieaktivitet</template>
                    <template #activityName>CHURCILL-LØBET</template>
                    <template #activityAvailability>5. maj 2025</template>
                </ActivityCard>
                
            </div>
        </section>
        <section>
            <ImgWTextAlt
                :imageSrc="komPoBesog"
                imageAlt="Garnisonsmuseumets facade"
            >
                <template #introHeadingAlt>
                    KOM PÅ BESØG
                </template>
                <template #introContentAlt>
                    <ul>
                        <li>Unik samling af historiske militærkøretøjer og fly mm.</li>
                        <li>Oplev autentiske udstillinger i originale bunkere fra Anden Verdenskrig.</li>
                        <li>Familievenlige aktiviteter og levende formidling af Aalborgs forsvarshistorie.</li>
                    </ul>                   
                </template>
                <template #CTATextAlt>BESTIL BILLETTER</template>
            </ImgWTextAlt>
        </section>
        <section>
            <div class="sideScrollHeader" id="insta">
                <h2>INSTAGRAM</h2>
                <p>Del jeres billeder med hash #forsvarsmuseet, <br> så bliver de spotlighted her på siden</p>
            </div>
            <div class="sideScrollContainner">
                <InstagramCard class="sideScrollCard"
                    :imageSrc="instagrampost1"
                    imageAlt="Kommende jægerpilot "
                >
                    <template #InstaContent>Kommende jægerpilot #Familiehygge #TætPåHistorien #Forsvarsmuseet </template>
                </InstagramCard>
                <InstagramCard class="sideScrollCard"
                    :imageSrc="flagDag"
                    imageAlt="Flag Dag"
                >
                    <template #InstaContent>Glædelig 5. september og Flagdag for Danmarks udsendte.  i dag, vi er sammen om at dele historier om nye og gamle missioner.</template>
                </InstagramCard>
                <InstagramCard class="sideScrollCard"
                    :imageSrc="peterOrum"
                    imageAlt="Peter Ørum"
                >
                    <template #InstaContent>Vores amerikanske udsendte Peter Ørum vendte i lørdags hjem for en kort stund for at være guide ved Aalborg Forsvars- og Garnisonsmuseum.</template>
                </InstagramCard>
                <InstagramCard class="sideScrollCard"
                    :imageSrc="sommerfest"
                    imageAlt="Sommerfest"
                >
                    <template #InstaContent>Så er sommerfesten skudt i gang!</template>
                </InstagramCard>
                <InstagramCard class="sideScrollCard"
                    :imageSrc="leopard1Kampvogn"
                    imageAlt="Leopard 1"
                >
                    <template #InstaContent>Ukraine modtog for nyligt de første 10 Leopard 1-kampvogne fra Danmark. Kom og se den på museet.</template>
                </InstagramCard>
                <InstagramCard class="sideScrollCard"
                    :imageSrc="augustOproret"
                    imageAlt="August Oprøret"
                >
                    <template #InstaContent>Kom og oplev vores nye udstilling om augustoprøret i 1943.</template>
                </InstagramCard>
            </div>
        </section>
        <section>
            <FEPCard
                :imageSrc="omMuseet"
            >
                <template #FEPHeading>OM MUSEET</template>
                <template #CTAFEPText>BESTIL BILLETTER</template>
            </FEPCard>
        </section>
        <!-- <HeroImgSub /> --> 
  <TheFooter />
    </main>
</template>

<style scoped>
    #CTABorder{
        border: 2px solid var(--specialCaseColor);
    }
    .sideScrollHeader{
        display: flex;
        justify-content: space-between;
        margin: 50px 5vw 25px 5vw;
    }
    .sideScrollContainner{
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }
    .sideScrollContainner::-webkit-scrollbar {
      height: 12px;
    }

    .sideScrollContainner::-webkit-scrollbar-thumb,
    .sideScrollContainner::-webkit-scrollbar-track {
      border-radius: 92px;
    }

    .sideScrollContainner::-webkit-scrollbar-thumb {
      background: var(--specialCaseColor);
    }

    .sideScrollContainner::-webkit-scrollbar-track {
      background: var(--headerColor);
      margin: 0 5vw;
    }
    .sideScrollCard{
        scroll-snap-align: center;
        margin: 0 25px 25px 25px;
    }
    .sideScrollCard:first-child{
        margin-left: 5vw;
    }
    .sideScrollCard:last-child{
        margin-right: 5vw;
    }
    #insta{
        flex-direction: column;
    }
    p, li{
        color: var(--headerColor);
    }
    li{
        font-size: 1rem;
    }
    ul{
        margin: 25px;
    }
</style>