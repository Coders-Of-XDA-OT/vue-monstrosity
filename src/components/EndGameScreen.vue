<template>
  <div class="container">
    <div v-if="whoWon==='player'">
      {{ getPlayerName }} have defeated the monster.
    </div>
    <div v-else>
      you lost. having badluck? Try again
    </div>
    <button @click="restartGame">Start Again</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EndGameScreen",
  computed: mapGetters(["whoWon","getPlayerName"]),
  methods: {
    ...mapActions(["restart_game"]),
    restartGame() {
      this.restart_game();
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 6rem;
    font-size: 1.6rem;
    color: darken(#f0a5b0,20%);
    & button {
      border: 0;
      background: transparent;
      cursor: pointer;
      margin-top: 2rem;
      color: #f0a5b0;
      outline: none;
      transition: .3s;
      &:hover{
        transform: scale(1.2);
      }
    }
  }
</style>
