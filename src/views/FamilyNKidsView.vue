<script setup>
import ImgWText from "@/components/ImgWText.vue";
import HeroImgSub from '@/components/HeroImgSub.vue';
import ActivityCard from "@/components/ActivityCard.vue";

import pigeBillede from "@/assets/img/family/pigeSomJægerpilot.jpg";
import AndenVerdensKrigIBornehojde from "@/assets/img/landingPage/ActivityImg/AndenVerdensKrigIBornehojde.jpg";
import aktivitetpilot from "@/assets/img/landingPage/ActivityImg/aktivitet_pilot.jpg";
import aktivitetSeCockpittet from "@/assets/img/landingPage/ActivityImg/aktivitet_se_cockpittet.jpg";
import aktivitetChurchilllobet from "@/assets/img/landingPage/ActivityImg/aktivitet_churchilllobet.jpg";
import FamilyNKids from "@/assets/img/FamilyNKids/FamilyNKids.jpg";
</script>
<template>
  <HeroImgSub
    :imageSrc="FamilyNKids"
  >
    <template #subPageHeading>BØRN OG FAMILIER</template>
    <template #subPageIntro>Find alt du behøver vide inde begøs hos os</template>
  </HeroImgSub>
  <section>
    <ImgWText :imageSrc="pigeBillede" imageAlt="Pige som jægerpilot">
    <template #introHeading> OPLEV HISTORIEN PÅ FORSVARSMUSEET </template>
    <template #introContent>
      <p>
        Tag familien med og dyk ned i en spændende verden af historie og
        teknologi på Forsvarsmuseet! Børn og unge kan deltage i sjove
        aktiviteter, som en spændende skattejagt, interaktive udstillinger og
        muligheden for at bygge deres egne mini-modeller af forsvarsudstyr.
      </p>
      <p>
        Og det bedste af det hele - børn under 18 år har gratis adgang til
        Forsvarsmuseet!
      </p>
    </template>
    <template #CTATextAlt>BESTIL BILLETTER</template>
  </ImgWText>
  </section>
  <div class="textContainerReview">
    <p id="citat">
      "Jeg havde en mega fed dag med masser af sjove opgaver og spændende
      historier”
    </p>
    <p id="navn">Emil, 11 år</p>
  </div>
  <section>
    <div class="sideScrollHeader">
      <h2>AKTIVITETER FOR BØRNENE</h2>
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
      <RouterLink to="/childrensBirthdayView">
      <ActivityCard class="sideScrollCard" :imageSrc="aktivitetpilot" id="aFix">
        <template #activityCatagory>Familieaktivitet</template>
        <template #activityName>BØRNEFØDSELSDAG</template>
        <template #activityAvailability>Efter bestilling</template>
      </ActivityCard>
      </RouterLink>
      <ActivityCard class="sideScrollCard" :imageSrc="aktivitetSeCockpittet">
        <template #activityCatagory>Familieaktivitet</template>
        <template #activityName>UDFORSK COCKPITTET</template>
        <template #activityAvailability>Altid tilgængelig</template>
      </ActivityCard>
      <ActivityCard class="sideScrollCard" :imageSrc="aktivitetChurchilllobet">
        <template #activityCatagory>Familieaktivitet</template>
        <template #activityName>CHURCHILL-LØBET</template>
        <template #activityAvailability>5. maj 2025</template>
      </ActivityCard>
    </div>
  </section>
</template>
<style scoped>
p{
  color: var(--headerColor);
}
.sideScrollHeader{
  display: flex;
  justify-content: space-between;
  margin: 50px 5vw 25px 5vw;
}
.sideScrollContainner{
  display: flex;
  gap: 50px;
}
.sideScrollCard{
  scroll-snap-align: center;
  margin: 0;
  margin-bottom: 25px;
}
.sideScrollCard:first-child:not(.sideScrollContainer > a > .sideScrollCard){
  margin-left: 5vw;
}
.sideScrollCard:last-child:not(.sideScrollContainer > a > .sideScrollCard){
  margin-right: 5vw;
}
.textContainerReview{
  background-color: var(--specialCaseColor);
  padding: 30px;
  max-width: 600px;
  border-radius: 30px;
  margin-left: 20vw;
  color: var(--headerColor);
}
#navn{
  margin-top: 25px;
}
#citat{
  font-size: 2rem;
  font-weight: bold;
  line-height: 150%;
}
#aFix{
  margin: 0;
}
@media screen and (max-width: 1500px){
  .sideScrollContainner{
  overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  .sideScrollContainner::-webkit-scrollbar{
    height: 12px;
  }
  .sideScrollContainner::-webkit-scrollbar-thumb,
  .sideScrollContainner::-webkit-scrollbar-track{
    border-radius: 92px;
  }
  .sideScrollContainner::-webkit-scrollbar-thumb{
    background: var(--specialCaseColor);
  }
  .sideScrollContainner::-webkit-scrollbar-track{
    background: var(--headerColor);
    margin: 0 5vw;
  }
}
@media screen and (max-width: 950px){
  .sideScrollContainner{
    gap: 25px;
  }
  #navn{
    margin-top: 25px;
  }
  #citat{
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 150%;
  }
  .textContainerReview{
    margin: 0 5vw;
    max-width: unset;
    border-radius: 30px;
    margin-top: 50px;
  }
}
</style>
