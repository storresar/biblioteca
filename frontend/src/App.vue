<template>
  <div id="nav" class="">
    <router-view/>
    <widget-container-modal />
  </div>
</template>

<script>
import {container} from "jenesius-vue-modal";

export default {
    components: {WidgetContainerModal: container},
    name: "App",
}
</script>
