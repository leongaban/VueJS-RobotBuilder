<template>
  <div class="content">
    <button class="add-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <!-- <div class="robot-name">
        {{selectedRobot.head.title}}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div> -->
      <PartSelector
        :parts="availableParts.heads"
        position="top"
        @partSelected="part => selectedRobot.head = part"/>
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @partSelected="part => selectedRobot.leftArm = part"/>
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="part => selectedRobot.torso = part"/>
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @partSelected="part => selectedRobot.rightArm = part"/>
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => selectedRobot.base = part"/>
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
import availableParts from '../../data/parts'
import createdHookMixin from './created-hook-mixin'
import PartSelector from './PartSelector.vue'

export default {
  name: 'RobotBuilder',
  components: { PartSelector },
  data() {
    return {
      availableParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      }
    };
  },
  mixins: [createdHookMixin],
  computed: {
    // saleBorderClass() {
    //   return this.selectedRobot.head.onSale ? 'sale-border' : ''
    // },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot

      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;

      console.log('cost', cost)

      this.cart.push(Object.assign({}, robot, { cost }))
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "./_robotBuilder.scss"
</style>
