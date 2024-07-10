<script setup lang="ts">
import { useInvoiceStore } from '../stores/index';

import type { Invoice } from '../interfaces/invoiceInterfaces';

import FormInput from './formComponents/FormInput.vue';
import FormSelect from './formComponents/FormSelect.vue';
import OptionsModal from './OptionsModal.vue';

const invoiceStore = useInvoiceStore();

const props = withDefaults(defineProps<{
    invoice?: Invoice;
    actionType?: 'create' | 'update'
}>(), {
    actionType: 'create'
});

const formName = props.actionType === 'create' ? 'Create invoice' : 'Update invoice';

const handleValueChange = (event: { name: string; value: string; }) => {
    console.log(value);
};
</script>

<template>
    <form @submit="$event.preventDefault()">
        <span class=form-name>
            <b>{{ formName }}</b>
        </span>
        <form-input label-text="Invoice number" @value-change="handleValueChange" />
        <form-select label-text="Client name" :clients="invoiceStore.clients" @value-change="handleValueChange" />
        <div class="items">
            <b>Items</b>
            <button @click="invoiceStore.$patch({ showOptionsModal: true })">Add new item</button>
        </div>
        <form-input label-text="Total amount" input-type="number" @value-change="handleValueChange" />
        <input type="submit" @click="handleClick">
    </form>

    <options-modal v-if="invoiceStore.showOptionsModal" />
</template>

<style>
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
