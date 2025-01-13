<script setup>
import ImgWText from "@/components/ImgWText.vue";
import ImgWTextAlt from "@/components/ImgWTextAlt.vue";
import HeroImgSub from '@/components/HeroImgSub.vue';
import ActivityCard from "@/components/ActivityCard.vue";

import dreng from "@/assets/img/ChildrenBirthdayPage/dreng.jpg";
import barnITank from "@/assets/img/ChildrenBirthdayPage/barnITank.jpg";
import boerneFoedelsdag from "@/assets/img/ChildrenBirthdayPage/boerneFoedelsdag.jpg";

import AndenVerdensKrigIBornehojde from "@/assets/img/landingPage/ActivityImg/AndenVerdensKrigIBornehojde.jpg";
import aktivitetSeCockpittet from "@/assets/img/landingPage/ActivityImg/aktivitet_se_cockpittet.jpg";
import aktivitetChurchilllobet from "@/assets/img/landingPage/ActivityImg/aktivitet_churchilllobet.jpg";

</script>
<template>
  <HeroImgSub
    :imageSrc="boerneFoedelsdag"
  >
    <template #subPageHeading>BØRNEFØDSELSDAG</template>
    <template #subPageIntro>Giv dine børn en sjov og lærerig fødselsdag</template>
  </HeroImgSub>
  <section>
    <ImgWText :imageSrc="dreng" imageAlt="Dreng på museum">
    <template #introHeading> Et fødselsdagseventyr </template>
    <template #introContent>
      <p>
        Børnene får mulighed for at klæde sig ud som soldater, løse spændende
        missioner og opleve museets unikke udstillinger på en sjov og interaktiv
        måde.
      </p>
      <p>
        Derudover vil der være fri adgang til hele museumet, samt en helt privat
        guide for jer, som kan fører jer gennem historien.
      </p>
    </template>
    <template #CTAImgText>PLANLÆG DIT BESØG</template>
  </ImgWText>
  </section>
  <section class="practicalInformation">
    <h2>Praktisk information</h2>
    <p>
      Fødselsdagen kan tilpasses aldersgruppen og varer ca. 2-3 timer.
      Arrangementet er ideelt for børn i alderen 6-12 år. Kontakt os for priser
      og ledige datoer!
    </p>
  </section>
  <ImgWTextAlt :imageSrc="barnITank" imageAlt="Garnisonsmuseumets facade">
    <template #introHeadingAlt> Fødselsdagspakke </template>
    <template #introContentAlt>
      <p>- En guidet tur med fokus på børnevenlige historier og sjove fakta.</p>
      <p>- Aktiviteter som skattejagt eller "spiontræning."</p>

      <p>- Mulighed for at spise medbragt mad.</p>
    </template>
    <template #CTATextAlt>BESTIL BILLETTER</template>
  </ImgWTextAlt>
  <section class="contactBirthday">
    <h2>En fødselsdag de aldrig glemmer</h2>
    <p>
      Tag kontakt i dag og book en fødselsdag, der kombinerer sjov, historie og
      masser af spænding. Vi glæder os til at skabe en uforglemmelig dag for
      jer!
    </p>
  </section>
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
.practicalInformation{
  margin-left: 5vw;
  margin-right: 5vw;
  width: 60%;
}
.practicalInformation h2{
  padding-bottom: 25px;
}
.practicalInformation p, .contactBirthday p{
  color: var(--headerIconColor);
}
.contactBirthday{
  margin-left: 5vw;
  margin-right: 5vw;
  width: 800px;
}
.contactBirthday h2{
  padding-bottom: 25px;
}
#CTABorder{
  margin-top: 25px;
}
p{
  color: var(--headerColor);
}
p:not(section p){
  color: var(--headerIconColor);
}
.sideScrollHeader{
  display: flex;
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

@media screen and (max-width: 1500px){
  .sideScrollContainner{
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
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
  .contactBirthday{
    margin-left: 5vw;
    margin-right: 5vw;
    width: 80%;
  }
  .practicalInformation{
    margin-left: 5vw;
    margin-right: 5vw;
    width: 80%;
  }
  .sideScrollContainner{
    gap: 25px;
  }
}
</style>