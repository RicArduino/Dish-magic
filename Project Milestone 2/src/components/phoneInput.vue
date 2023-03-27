<template>
    <vue-tel-input v-model="value"></vue-tel-input>
</template>
<script >
import { VueTelInput } from 'vue-tel-input';

export default {
    components: {
        VueTelInput,
    },
};
</script>

<style src="vue-tel-input/dist/vue-tel-input.css"></style>