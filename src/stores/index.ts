import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Clients, Invoice, Items } from '../interfaces/invoiceInterfaces';

export const useInvoiceStore = defineStore('invoice', () => {
    const clients = ref<Clients[]>([]);
    const invoices = ref<Invoice[]>([]);
    const showOptionsModal = ref(false);
    const items = ref<Items[]>([]);

    const getClients = async (): Promise<void> => {
        try {
            const response = await fetch('https://vuejs-demo-api-default-rtdb.europe-west1.firebasedatabase.app/clients789.json');
            const data = await response.json();
            clients.value = data;
        } catch (e) {
            console.error(e);
        }
    };

    return {
        clients,
        getClients,
        invoices,
        showOptionsModal,
        items
    };
});
