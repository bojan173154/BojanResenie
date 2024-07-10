<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
    labelText: string;
    inputValue?: string;
    inputType?: string;
}>(), {
    inputValue: '',
    inputType: 'text'
});

const emit = defineEmits<{
    'value-change': [{
        name: string;
        value: string;
    }]
}>();

const scopedInputValue = props.inputValue ? ref(props.inputValue) : ref('');
</script>

<template>
    <div class="form-field">
        <label for="form-input">
            {{ labelText }}
        </label>
        <br>
        <input :type="inputType" name="form-input" v-model="scopedInputValue" @change="emit('value-change', { name: labelText, value: scopedInputValue })">
    </div>
</template>
