<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[selectedIndexs['heads']].src" title="head"/>
        <button class="prev-selector" v-on:click="selectPrevious('heads')">&#9668;</button>
        <button class="next-selector" v-on:click="selectNext('heads')">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[selectedIndexs['arms']].src" title="left arm"/>
        <button class="prev-selector" v-on:click="selectPrevious('arms')">&#9650;</button>
        <button class="next-selector" v-on:click="selectNext('arms')">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[selectedIndexs['torsos']].src" title="torso"/>
        <button class="prev-selector" v-on:click="selectPrevious('torsos')">&#9668;</button>
        <button class="next-selector" v-on:click="selectNext('torsos')">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[selectedIndexs['arms']].src" title="right arm"/>
        <button class="prev-selector" v-on:click="selectPrevious('arms')">&#9650;</button>
        <button class="next-selector" v-on:click="selectNext('arms')">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="availableParts.bases[selectedIndexs['bases']].src" title="base"/>
        <button class="prev-selector" v-on:click="selectPrevious('bases')">&#9650;</button>
        <button class="next-selector" v-on:click="selectNext('bases')">&#9660;</button>
      </div>
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
      selectedIndexs: {
        heads: 0,
        arms: 0,
        torsos: 0,
        bases: 0,
      },
    };
  },
  methods: {
    selectNext(type) {
      this.selectedIndexs[type] =
        getNextValidIndex(this.selectedIndexs[type], availableParts[type].length);
    },
    selectPrevious(type) {
      this.selectedIndexs[type] =
        getPreviousValidIndex(this.selectedIndexs[type], availableParts[type].length);
    },
  },
};
</script>

<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
