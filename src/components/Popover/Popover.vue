<template>
  <div class="e-popover" ref="popover">
    <slot name="trigger" :isActive="isActive" :setActive="setActive" />
    <transition name="e-popover__fade">
      <div
        v-if="isActive"
        class="e-popover__content"
        :class="[
          `e-popover__content--position-${position}`,
        ]"
      >
        <slot name="default" :isActive="isActive" :setActive="setActive" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, onUnmounted, ref, watch } from 'vue';

type PopoverPosition = 'bottom' | 'right';

export default defineComponent({
  name: 'EPopover',

  props: {
    position: { type: String as PropType<PopoverPosition>, default: 'bottom' },
  },

  setup() {
    const isActive = ref(false);
    const popover = ref();

    function onGlobalClick(event: MouseEvent) {
      if (!(popover.value as HTMLElement).contains(event.target as HTMLElement)) {
        isActive.value = false;
      }
    }

    function setActive(value: boolean) {
      isActive.value = value;
    }

    watch(() => isActive.value, (newValue) => {
      if (newValue) {
        window.addEventListener('click', onGlobalClick);
      } else {
        window.removeEventListener('click', onGlobalClick);
      }
    });

    onUnmounted(() => {
      window.removeEventListener('click', onGlobalClick);
    });

    return {
      popover,
      isActive,
      setActive,
    };
  },
});
</script>
