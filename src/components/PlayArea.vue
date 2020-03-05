<template>
  <div class="container">
    <div class="grid">
      <div class="player">
        {{ getPlayerName }}
        <div class="health-bar active" :style="{width: `${player.health}%`}" />
        {{ player.health }}
      </div>
      <div class="monster">
        <span>Monster</span>
        <div class="health-bar active" :style="{width: `${monster.health}%`}" />
        {{ monster.health }}
      </div>
    </div>
    <div class="fightAnim">Fight</div>
    <ActionButtons :attack="attack" :special="specialAttack" :heal="heal" :giveup="giveUp" />
  </div>
</template>

<script>
import ActionButtons from "./ActionButtons";
import { mapGetters , mapActions } from "vuex";
export default {
  name: "play-area",
  components: {
    ActionButtons
  },
  computed: mapGetters(["getPlayerName"]),
  data: () => ({
    player: {
      health: 100,
      attackMin: 5,
      attackMax: 12,
      specialAttackMin: 12,
      specialAttackMax: 20
    },
    monster: {
      health: 100,
      attackMin: 9,
      attackMax: 15
    }
  }),
  methods: {
    ...mapActions(["end_game"]),
    attack() {
      const attackDamage = Math.floor(Math.random() * this.player.attackMax) + this.player.attackMin;
      this.monster.health -= attackDamage;
      if(this.monster.health <= 0) this.end_game("player");

      const attackTaken = Math.floor(Math.random() * this.monster.attackMax) + this.monster.attackMin;
      this.player.health -= attackTaken;
      if(this.player.health <= 0) this.end_game("monster");
    },
    specialAttack() {
      console.log("special");
    },
    heal() {
      console.log("heal");
    },
    giveUp() {
      console.log("give up");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
  font-size: 1.6rem;
  color: darken(#f0a5b0, 10%);
}
.grid {
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  & .player,
  & .monster {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    & span {
      text-align: center;
    }
  }
  & .health-bar {
    width: 100%;
    height: 1rem;
    background: rgb(165, 165, 165);
    margin: 1rem 0;
    transition: linear .3s;
    &.active {
      background: rgb(255, 96, 96);
      animation: health-bar;
      animation-duration: 1s;
    }
  }
}
.fightAnim {
  width: 99%;
  color: darken(#f0a5b0, 10%);
  animation: fight;
  animation-duration: 1s;
}
@keyframes health-bar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes fight {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
