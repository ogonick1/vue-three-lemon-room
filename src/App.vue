<template>
  <div>
    <section class="spacer">
      <h1>Прокручуй вниз, щоб увійти в кімнату →</h1>
    </section>

    <section ref="pinSection" class="pin-section">
      <VirtualRoom />
    </section>

    <section class="spacer" style="height:140vh">
      <h1>Кінець. Можна прокрутити назад ⤴</h1>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VirtualRoom from './components/VirtualRoom.vue'

gsap.registerPlugin(ScrollTrigger)
const pinSection = ref(null)

onMounted(() => {
  ScrollTrigger.create({
    trigger: pinSection.value,
    start: 'top top',
    end: '+=2400',     // довжина скрол-маршруту
    scrub: true,
    pin: true
  })
})

onBeforeUnmount(() => {
  // При демонтажі компонента прибираємо тригери
  ScrollTrigger.getAll().forEach(st => st.kill())
})
</script>

<style scoped>
.pin-section{
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: radial-gradient(1200px 600px at 50% 120%, #151517 0%, #0f0f11 60%, #0b0b0d 100%);
  border-top: 1px solid rgba(255,255,255,.05);
  border-bottom: 1px solid rgba(255,255,255,.05);
}
</style>
