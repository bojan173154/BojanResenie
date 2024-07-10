<script setup lang="ts">
import { ref } from 'vue';
import type { Clients } from '../../interfaces/invoiceInterfaces';

const props = withDefaults(defineProps<{
    clients: Clients[],
    labelText: string;
    selectedClient?: Clients
}>(), {});

const emit = defineEmits<{
    'value-change': [{
        name: string;
        value: string;
    }]
}>();

const scopedSelectedClient = props.selectedClient ? ref(props.selectedClient) : ref(props.clients[0]);
</script>

<template>
    <div class="form-field">
        <label for="">
            {{ labelText }}
        </label>
        <br>
        <select v-model="scopedSelectedClient" @change="emit('value-change', { name: labelText, value: scopedSelectedClient.client })">
            <option v-for="(client, key) in clients" :key="key" :value="client">
                {{ client.client }}
            </option>
        </select>
    </div>
</template>
