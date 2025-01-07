<script>
import { ref } from "vue";
import FEPCard from "@/components/FEPCard.vue";
import fly from "@/assets/img/VisitUsPage/fly.png";

export default {
  components: {
    FEPCard,
  },

  setup() {
    const accordionItems = ref([
      {
        title: "ÅBNINGSTIDER",
        content: "Åben alle dage 10 -17",
        icon: "fa-regular fa-clock",
        isOpen: false,
      },
      {
        title: "AUDIO TOUR",
        content:
          "Ved indgangen kan du scanne en QR-kode eller hente en lydguide via vores app. Herefter kan du følge audio touren i dit eget tempo, mens du går gennem museet. Audio tours er tilgænglig på dansk og engelsk.",
        icon: "fa-solid fa-headphones",
        isOpen: false,
      },
      {
        title: "TILGÆNGELIGHED",
        content:
          "Forsvarsmuseet er kørestolsvenligt med ramper, elevatorer og brede gangarealer, der gør det nemt at komme rundt i udstillingerne.",
        icon: "fa-solid fa-wheelchair",
        isOpen: false,
      },
      {
        title: "MUSEUMSBUTIK",
        content:
          "I butikken sælger vi is, kolde og varme drikke, souvenirs, byggesæt og færdigbyggede modeller samt bøger. Du finder også et stort udvalg af brugte militære effekter.",
        icon: "fa-solid fa-shop",
        isOpen: false,
      },
      {
        title: "FIND VEJ",
        content: "Skydebanevej 22, 9000 Aalborg",
        icon: "fa-regular fa-compass",
        isOpen: false,
      },
      {
        title: "KONTAKT",
        content: "+45 98 12 88 21 info@forsvarsmuseum.dk",
        icon: "fa-solid fa-phone",
        isOpen: false,
      },
    ]);

    const toggleAccordion = (item) => {
      item.isOpen = !item.isOpen;
    };

    return { accordionItems, toggleAccordion, fly };
  },
};
</script>
<template>
  <div class="accordion-grid">
    <div class="accordion" v-for="item in accordionItems" :key="item.title">
      <div class="accordion-header" @click="toggleAccordion(item)">
        <i :class="item.icon" class="accordion-icon"></i>
        <span>{{ item.title }}</span>
        <i
          class="fa-solid fa-chevron-down arrow"
          :class="{ rotate: item.isOpen }"
        ></i>
      </div>
      <div class="accordion-content" v-show="item.isOpen">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
  <FEPCard :imageSrc="fly">
    <template #FEPHeading>UDSTILLINGER PÅ MUSEUMET</template>
    <template #CTAFEPText>SE UDSTILLINGER</template>
  </FEPCard>
</template>

<style scoped>
.accordion-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 20px;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 5rem;
}

.accordion {
  border: 3px solid #000;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  align-self: start;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  font-family: Chivo Mono;
  margin-top: 10px;
  margin-bottom: 10px;
}

.accordion-content {
  margin-top: 30px;
  padding: 10px;
}
.accordion-icon {
  font-size: 40px;
}
.arrow {
  font-size: 30px;
  transition: transform 0.5s ease;
}

.arrow.rotate {
  transform: rotate(180deg);
}
@media screen and (max-width: 950px) {
  .accordion-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .accordion-content {
    text-align: center;
  }
}
</style>
