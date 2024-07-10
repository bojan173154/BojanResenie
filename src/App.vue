<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useInvoiceStore } from './stores/index';

import FormInvoice from './components/FormInvoice.vue';

const invoiceStore = useInvoiceStore();

onBeforeMount(async () => {
    await invoiceStore.getClients();
    console.log(invoiceStore.clients);
});
</script>

<template>
    <form-invoice />
</template>
