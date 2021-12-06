<template>
  <vue-recaptcha
    theme="light"
    size="normal"
    :tabindex="0"
    @widgetId="recaptchaWidget = $event"
    @verify="callbackVerify($event)"
    @expired="callbackExpired()"
    @fail="callbackFail()"
  />

  <button @click="actionReset()">reset!</button>
</template>

<script>
  import { ref } from "vue";
  import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";
  import useUsers from "@/store/useUsers.js"

  export default {
    name: "recaptcha",
    components: { VueRecaptcha },
    setup: () => {
      // Reset Recaptcha
      const { resetRecaptcha } = useRecaptcha();
      const recaptchaWidget = ref(null);
      const users = useUsers();
    

      const callbackVerify = (response) => {
        users.veriverifyCaptcha({'g-recaptcha-response': response}).
        then({
            
        })

      };
      const callbackExpired = () => {
        console.log("expired!");
      };
      const callbackFail = () => {
        console.log("fail");
      };
      // Reset Recaptcha action
      const actionReset = () => {
        resetRecaptcha(recaptchaWidget.value);
      };

      return {
        recaptchaWidget,
        callbackVerify,
        callbackFail,
        actionReset,
        callbackExpired
      };
    },
  };
</script>