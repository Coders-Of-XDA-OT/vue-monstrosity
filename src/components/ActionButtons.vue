<template>
  <div class="container">
    <div class="spacer"></div>
    <div class="buttons">
      <div class="btn" @click="attack">Attack</div>
      <div class="btn" @click="special">Special Attack</div>
      <div class="btn" @click="heal">Heal</div>
      <div class="btn" @click="giveup">Give UP</div>
    </div>
    <div class="spacer"></div>
  </div>
</template>
<script>
export default {
  props: ["attack", "special", "heal", "giveup"]
};
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 15% auto 15%;
  @media (max-width: 768px) {
    grid-template-columns: 5% auto 5%;
  }
  @media (max-width: 555px) {
    grid-template-columns: 100%;
  }
}
.buttons {
  padding: 8rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  & .btn {
    cursor: pointer;
  }
}
</style>