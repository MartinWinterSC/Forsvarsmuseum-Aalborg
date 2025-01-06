<script>
export default {
    props: {
        imageSrc: { type: String, required: true },
    },
};
</script>

<template>
    <article class="ExhibitCardIndividual" :style="{ backgroundImage: `url(${imageSrc})` }">
        <p class="bold"><slot name="exhibitName"></slot></p>
        <p><slot name="exhibitCatagory"></slot></p>
    </article>
</template>

<style scoped>
.ExhibitCardIndividual {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    height: 500px;
    min-width: 400px;
    width: 400px;
}
p {
    padding: 20px;
    color: var(--headerColor);
}
p.bold {
    font-weight: var(--boldWeight);
}
.ExhibitCardIndividual p:first-child {
    padding-bottom: 5px;
}
.ExhibitCardIndividual p:last-child {
    padding-top: 5px;
}
@media screen and (max-width: 950px) {
    .ExhibitCardIndividual {
        height: 400px;
        min-width: 300px;
        width: 300px;
    }
}
</style>