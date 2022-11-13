<template>
  <div
    class="lds-facebook"
    :style="{'width': size + 'px', 'height': size + 'px'}"
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "BaseLoader",
  props: {
    size: {
      type: Number,
      default: 20,
    }
  },
};
</script>

<style scoped>
.lds-facebook {
  display: inline-block;
  position: relative;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 10%;
  width: 20%;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 10%;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 40%;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 70%;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 10%;
    height: 80%;
  }
  50%, 100% {
    top: 30%;
    height: 40%;
  }
}
</style>
