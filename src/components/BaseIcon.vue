<template>
  <font-awesome-icon :icon="icon" v-bind="$attrs"/>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(fas, fab)

export default {
  name: "BaseIcon",
  inheritAttrs: false,
  components: { FontAwesomeIcon },
  props: {
    icon: {
      type: String,
      default: 'fa-bars'
    }
  }
};
</script>
