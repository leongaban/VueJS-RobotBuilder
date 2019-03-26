<template>
  <div class="content">
    <button class="add-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button class="prev-selector" @click="selectPrevious('heads')">&#9668;</button>
        <button class="next-selector" @click="selectNext('heads')">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button class="prev-selector" @click="selectPrevious('leftArms')">&#9650;</button>
        <button class="next-selector" @click="selectNext('leftArms')">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torso"/>
        <button class="prev-selector" @click="selectPrevious('torsos')">&#9668;</button>
        <button class="next-selector" @click="selectNext('torsos')">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button class="prev-selector" @click="selectPrevious('rightArms')">&#9650;</button>
        <button class="next-selector" @click="selectNext('rightArms')">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="base"/>
        <button class="prev-selector" @click="selectPrevious('bases')">&#9650;</button>
        <button class="next-selector" @click="selectNext('bases')">&#9660;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../../data/parts';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      cart: [],
      selectedIndexs: {
        heads: 0,
        leftArms: 0,
        rightArms: 0,
        torsos: 0,
        bases: 0,
      }
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedIndexs.heads],
        leftArm: availableParts.arms[this.selectedIndexs.leftArms],
        rightArm: availableParts.arms[this.selectedIndexs.rightArms],
        torso: availableParts.torsos[this.selectedIndexs.torsos],
        base: availableParts.bases[this.selectedIndexs.bases],
      }
    }
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;

      this.cart.push(Object.assign({}, robot, { cost }));
    },
    selectNext(type) {
      const part = type === 'leftArms' || type === 'rightArms' ? 'arms' : type;
      this.selectedIndexs[type] =
        getNextValidIndex(this.selectedIndexs[type], availableParts[part].length);
    },
    selectPrevious(type) {
      const part = type === 'leftArms' || type === 'rightArms' ? 'arms' : type;
      this.selectedIndexs[type] =
        getPreviousValidIndex(this.selectedIndexs[type], availableParts[part].length);
    }
  },
};
</script>

<style lang="scss" scoped>
  @import "./_robotBuilder.scss";
</style>
