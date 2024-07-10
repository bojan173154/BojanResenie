<script setup lang="ts">
import { ref } from 'vue';
import type { Items } from '../interfaces/invoiceInterfaces';

import { useInvoiceStore } from '../stores/index';
import FormInput from './formComponents/FormInput.vue';

const invoiceStore = useInvoiceStore();

const item = ref<Items>({
    item: '',
    price: ''
});

const handleValueChange = (event: { name: string; value: string; }) => {
    switch (event.name) {
    case 'Item':
        item.value.item = event.value;
        break;

    case 'Amount':
        item.value.price = event.value;
    }
};

const handleClick = () => {
    invoiceStore.$patch((state) => {
        state.items = item;
    });
    invoiceStore.$patch({ showOptionsModal: false });
};
</script>

<template>
    <div class="modal-body">
        <form-input label-text="Item" @value-change="handleValueChange" />
        <form-input label-text="Amount" input-type="number" @value-change="handleValueChange" />

        <button @click="handleClick">Add item</button>
    </div>
</template>

<style>
.modal-body {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
}
</style>
