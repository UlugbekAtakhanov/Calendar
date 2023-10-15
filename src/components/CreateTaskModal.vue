<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <!-- title -->
                            <DialogTitle as="h3" class="leading-6 text-emerald-600 font-semibold text-lg">
                                {{ clickedDate.toLocaleDateString("en-GB", {
                                    month: "short", day: "numeric",
                                    weekday: "long", year: "numeric"
                                }) }}
                            </DialogTitle>

                            <!-- events -->
                            <div class="my-4 flex items-center gap-2">
                                <button v-for="item in eventsList" @click="isActive = item.id"
                                    class="text-sm text-green-700 py-1 px-2 block cursor-pointer hover:text-green-700 relative focus:outline-none">
                                    {{ item.label }}
                                    <div v-show="isActive === item.id"
                                        class="absolute inset-0 outline-2 outline-emerald-500 bg-emerald-300 -z-10 rounded-full" />
                                </button>
                            </div>

                            <!-- input -->
                            <div class="mt-2">
                                <input type="text"
                                    class="p-2 text-sm focus:ring-0 border border-black/50 rounded w-full text-black"
                                    placeholder="Create a task">
                            </div>

                            <div class="mt-4">
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Save
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { Ref, inject, ref } from 'vue';

const isOpen = inject<Ref<boolean>>("isOpen")!
const clickedDate = inject<Ref<Date> | null>("clickedDate")!
const isActive = ref(1)

function closeModal() {
    isOpen.value = false
}

const eventsList = [
    { id: 1, label: "Birthday" },
    { id: 2, label: "Task" },
    { id: 3, label: "Event" },
]



</script>
