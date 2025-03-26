<script setup lang="ts">
import type { ContainerOptions } from 'smooth-dnd'
import { dropHandlers, smoothDnD } from 'smooth-dnd'
import { onMounted, ref } from 'vue'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

interface SmoothDnDWrapperProps<T extends any = any> {
  sortKey?: string
  data: T
  options?: ContainerOptions
}

const props = withDefaults(defineProps<SmoothDnDWrapperProps>(), {
  sortKey: 'id',
  data: []
})
console.log('🚀 ~ file: SmoothDndContainer.vue:17 ~ props ~ props:', props.data)

const containerRef = ref()

onMounted(() => {
  smoothDnD(containerRef.value, props.options)
})
</script>

<template>
  <div ref="containerRef" class="smooth-dnd-wrapper">
    <slot v-for="(d, i) in data" :key="d" :name="i" :data="d"></slot>
    <div></div>
  </div>
</template>
