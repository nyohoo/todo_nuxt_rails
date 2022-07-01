<template>
  <transition name="fade">
    <div v-if="notice.status" class="success">{{notice.message}}</div>
  </transition>
</template>

<script>
  export default {
    computed: {
      notice() {
        return this.$store.state.notification.success;
      }
    }
  };
</script>

<style scoped>
  .success {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgb(193, 245, 193);
    text-align: center;
    color: #fff;
    z-index: 50;
    line-height: 56px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
