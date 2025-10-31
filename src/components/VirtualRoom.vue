<!-- src/components/VirtualRoom.vue -->
<template>
  <div ref="wrap" class="three-wrap">
    <div class="hud">
      <div class="hud-inner">
        <h2>Lemon Tree Room</h2>
        <p>Скроль, щоб увійти та обійти лимонне дерево по колу.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const wrap = ref(null)

let renderer, scene, camera, clock, rafId
let resizeObserver
let roomMesh, floorMesh, treeGroup
let timeline

/* -------------------------- helpers -------------------------- */
function fibonacciPoints(n, radius = 1, yClamp = [ -1, 1 ]) {
  // рівномірно розкидає точки по сфері (для листя/лимонів)
  const pts = []
  const offset = (yClamp[1] - yClamp[0]) / n
  const inc = Math.PI * (3 - Math.sqrt(5)) // золотий кут
  for (let i = 0; i < n; i++) {
    const y = yClamp[0] + i * offset + offset * 0.5
    const r = Math.sqrt(1 - y * y)
    const phi = i * inc
    const x = Math.cos(phi) * r
    const z = Math.sin(phi) * r
    pts.push(new THREE.Vector3(x * radius, y * radius, z * radius))
  }
  return pts
}

function rand(a, b) { return a + Math.random() * (b - a) }

// mouse tilt state
const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }
const MAX_TILT = 0.18; // ~10° у радіанах

function onMouseMove(e) {
  if (!wrap.value) return
  const r = wrap.value.getBoundingClientRect()
  // нормалізуємо позицію курсора в межах секції [-1..1]
  const nx = ((e.clientX - r.left) / r.width) * 2 - 1
  const ny = ((e.clientY - r.top) / r.height) * 2 - 1
  // обмеження на випадок виходу за межі
  pointer.targetX = Math.max(-1, Math.min(1, nx))
  pointer.targetY = Math.max(-1, Math.min(1, ny))
}

function onMouseLeave() {
  // плавно повертаємось у центр
  pointer.targetX = 0
  pointer.targetY = 0
}

onMounted(() => {
  // ...
  wrap.value.addEventListener('mousemove', onMouseMove)
  wrap.value.addEventListener('mouseleave', onMouseLeave)
  // ...
})

onBeforeUnmount(() => {
  // ...
  wrap.value?.removeEventListener('mousemove', onMouseMove)
  wrap.value?.removeEventListener('mouseleave', onMouseLeave)
  // ...
})


/* -------------------------- scene parts -------------------------- */
function createRoom() {
  // Розмір кімнати
  const W = 40, H = 14, D = 40;

  const loader = new THREE.TextureLoader();
  const paths = {
    px: '/textures/walls/px.jpg',
    nx: '/textures/walls/nx.jpg',
    py: '/textures/walls/py.jpg',
    ny: '/textures/walls/ny.jpg',
    pz: '/textures/walls/pz.jpg',
    nz: '/textures/walls/nz.jpg'
  };

  // Завантажуємо 6 текстур
  const tex = {};
  Object.entries(paths).forEach(([k, url]) => {
    const t = loader.load(url);
    t.colorSpace = THREE.SRGBColorSpace;         // коректна передача кольору
    t.anisotropy = Math.min(16, renderer.capabilities.getMaxAnisotropy?.() || 8);
    // приклад масштабу/повтору: t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1,1);
    tex[k] = t;
  });

  // Порядок груп у BoxGeometry: +X, -X, +Y, -Y, +Z, -Z
  const mats = [
    new THREE.MeshStandardMaterial({ map: tex.px, side: THREE.BackSide, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: tex.nx, side: THREE.BackSide, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: tex.py, side: THREE.BackSide, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: tex.ny, side: THREE.BackSide, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: tex.pz, side: THREE.BackSide, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: tex.nz, side: THREE.BackSide, roughness: 0.9 })
  ];

  const geo = new THREE.BoxGeometry(W, H, D);
  roomMesh = new THREE.Mesh(geo, mats);
  roomMesh.position.y = H * 0.5 - 0.5; // щоб підлога ~на y=0
  scene.add(roomMesh);
}



function createFloor() {
  const floorGeo = new THREE.CircleGeometry(12, 128)
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x232328, roughness: 0.95, metalness: 0.02
  })
  floorMesh = new THREE.Mesh(floorGeo, floorMat)
  floorMesh.rotation.x = -Math.PI / 2
  scene.add(floorMesh)

  // світна інкрустація
  const ringGeo = new THREE.RingGeometry(3.4, 3.8, 64)
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x35ff88, transparent: true, opacity: 0.18 })
  const ring = new THREE.Mesh(ringGeo, ringMat)
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.01
  scene.add(ring)
}

function createLemonTree() {
  treeGroup = new THREE.Group()

  /* --- trunk --- */
  const trunkGeo = new THREE.CylinderGeometry(0.3, 0.6, 3.6, 16)
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6f4a2b, roughness: 0.92, metalness: 0.03 })
  const trunk = new THREE.Mesh(trunkGeo, trunkMat)
  trunk.position.y = 1.8
  trunk.castShadow = true
  trunk.receiveShadow = false
  treeGroup.add(trunk)

  /* --- a few decorative branches --- */
  const branches = new THREE.Group()
  const branchMat = new THREE.MeshStandardMaterial({ color: 0x644123, roughness: 0.9 })
  for (let i = 0; i < 7; i++) {
    const len = 2 + Math.random() * 1.4
    const r1 = 0.3, r2 = 0.05
    const g = new THREE.CylinderGeometry(r2, r1, len, 20)
    const m = new THREE.Mesh(g, branchMat)
    m.castShadow = true
    m.position.y = 1.2 + Math.random() * 1.2
    m.rotation.y = Math.random() * Math.PI * 2
    m.rotation.z = -0.3 + Math.random() * 0.6
    m.translateY(len * 0.5)
    branches.add(m)
  }
  treeGroup.add(branches)

  /* --- crown layout helpers --- */
  const clusters = [
    { r: 2.1, y: 2.7, w: 0.5 },
    { r: 1.8, y: 3.5, w: 0.35 },
    { r: 1.3, y: 4.3, w: 0.15 }
  ]
  const pickCounts = (total) => {
    const sumW = clusters.reduce((s, c) => s + c.w, 0)
    let left = total
    return clusters.map((c, i) => {
      let n = Math.round(total * (c.w / sumW))
      if (i === clusters.length - 1) n = left
      left -= n
      return n
    })
  }

  /* --- LEAVES (Instanced, textured with alpha) --- */
  const LEAF_COUNT = 400
  const [aCount, bCount, cCount] = pickCounts(LEAF_COUNT)

  const leafTex = new THREE.TextureLoader().load('/textures/leaves/leaf.png')
  leafTex.colorSpace = THREE.SRGBColorSpace
  leafTex.anisotropy = Math.min(16, renderer.capabilities.getMaxAnisotropy?.() || 8)

  const leafGeo = new THREE.PlaneGeometry(0.24, 0.42)
  const leafMat = new THREE.MeshStandardMaterial({
    map: leafTex,
    transparent: true,
    alphaTest: 0.45,
    side: THREE.DoubleSide,
    roughness: 0.72,
    metalness: 0.05
  })
  const leafInst = new THREE.InstancedMesh(leafGeo, leafMat, LEAF_COUNT)
  leafInst.castShadow = true

  const dummy = new THREE.Object3D()
  const orientLeaf = (p) => {
    const dir = new THREE.Vector3(p.x, 0, p.z).normalize()
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,0,1), dir)
    dummy.quaternion.copy(quat)
    dummy.rotateX(-0.35 + Math.random()*0.3)
    dummy.rotateZ(-0.2 + Math.random()*0.4)
  }

  const placeLeavesCluster = (cluster, count, idxStart) => {
    // рівномірні точки по сферичній шапці (не 1 у циклі!)
    const pts = []
    const offset = (0.95 - (-0.7)) / count
    const inc = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = -0.7 + i*offset + offset*0.5
      const r = Math.sqrt(1 - y*y)
      const phi = i * inc
      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r
      const p = new THREE.Vector3(x, y, z)
      p.multiplyScalar(cluster.r * (1.2 + Math.random()*0.15))
      p.y += cluster.y + (-0.1 + Math.random()*0.2)
      pts.push(p)
    }
    for (let i = 0; i < count; i++) {
      const p = pts[i]
      dummy.position.copy(p)
      orientLeaf(p)
      const s = 0.9 + Math.random()*0.5
      dummy.scale.set(s, s, 1)
      dummy.updateMatrix()
      leafInst.setMatrixAt(idxStart + i, dummy.matrix)
    }
  }

  let cursor = 0
  placeLeavesCluster(clusters[0], aCount, cursor); cursor += aCount
  placeLeavesCluster(clusters[1], bCount, cursor); cursor += bCount
  placeLeavesCluster(clusters[2], cCount, cursor)

  leafInst.instanceMatrix.needsUpdate = true

  /* --- LEMONS (Instanced, stretched spheres) --- */
  const LEMON_COUNT = 50
  const lemonGeo = new THREE.SphereGeometry(0.085, 14, 14)
  const lemonMat = new THREE.MeshStandardMaterial({ color: 0xe7c83b, roughness: 0.5, metalness: 0.15 })
  const lemonInst = new THREE.InstancedMesh(lemonGeo, lemonMat, LEMON_COUNT)
  lemonInst.castShadow = true

  const placeLemonsCluster = (cluster, count, idxStart) => {
    const pts = []
    const offset = (0.95 - (-0.25)) / count
    const inc = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = -0.25 + i*offset + offset*0.5
      const r = Math.sqrt(1 - y*y)
      const phi = i * inc
      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r
      const p = new THREE.Vector3(x, y, z)
      p.multiplyScalar(cluster.r * (0.9 + Math.random()*0.2))
      p.y += cluster.y + (-0.12 + Math.random()*0.2)
      pts.push(p)
    }
    for (let i = 0; i < count; i++) {
      const p = pts[i]
      dummy.position.copy(p)
      dummy.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI*2, Math.random()*Math.PI)
      const s = 1.0 + Math.random()*0.6
      dummy.scale.set(0.8*s, 1.45*s, 0.8*s) // еліпсоїд
      dummy.updateMatrix()
      lemonInst.setMatrixAt(idxStart + i, dummy.matrix)
    }
  }

  const [la, lb, lc] = pickCounts(LEMON_COUNT)
  cursor = 0
  placeLemonsCluster(clusters[0], la, cursor); cursor += la
  placeLemonsCluster(clusters[1], lb, cursor); cursor += lb
  placeLemonsCluster(clusters[2], lc, cursor)
  lemonInst.instanceMatrix.needsUpdate = true

  /* --- small neon ring & underlay --- */
  const neon = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.02, 8, 64), new THREE.MeshBasicMaterial({ color: 0x35ff88 }))
  neon.position.y = 1.2
  treeGroup.add(neon)

  const under = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.06, 12, 64), new THREE.MeshStandardMaterial({ color: 0x295f3f, roughness: 0.8, metalness: 0.05 }))
  under.rotation.x = -Math.PI / 2
  under.position.y = 0.02
  treeGroup.add(under)

  const leavesGrp = new THREE.Group()
  leavesGrp.add(leafInst, lemonInst)
  treeGroup.add(leavesGrp)
  scene.add(treeGroup)

  // легке «дихання» крони
  gsap.to(leavesGrp.rotation, { z: 0.06, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' })
  gsap.to(leavesGrp.position, { y: "+=0.06", duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' })
}


function createLights() {
  const hemi = new THREE.HemisphereLight(0xddeeff, 0x101015, 0.8)
  scene.add(hemi)

  const key = new THREE.DirectionalLight(0xffffff, 1.2)
  key.position.set(6, 10, 6)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.bias = -0.0002
  scene.add(key)

  const rim = new THREE.DirectionalLight(0x9affcc, 0.45)
  rim.position.set(-6, 7, -8)
  scene.add(rim)

  const spot = new THREE.SpotLight(0x8affcc, 0.85, 35, Math.PI/6, 0.35, 1.0)
  spot.position.set(0, 9, 0)
  scene.add(spot)
}

function initThree() {
  scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x0e0e10, 35, 60)

  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
  camera.position.set(0, 1.7, 20)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(wrap.value.clientWidth, wrap.value.clientHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  wrap.value.appendChild(renderer.domElement)
  clock = new THREE.Clock()
}


function onResize() {
  if (!wrap.value) return
  const w = wrap.value.clientWidth
  const h = wrap.value.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

function buildTimeline() {
  const state = { radius: 20, angle: 0, height: 1.7 }

  const updateCam = () => {
    const x = Math.cos(state.angle) * state.radius
    const z = Math.sin(state.angle) * state.radius
    camera.position.set(x, state.height, z)
    camera.lookAt(0, 2.8, 0)
  }
  updateCam()

  timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: wrap.value,
      start: 'top top',
      end: '+=2400',
      scrub: true
    },
    onUpdate: updateCam
  })

  timeline.to(state, { radius: 8, height: 1.6, duration: 0.45 }, 0)
  timeline.to(roomMesh.material, { colorProps: { r: 0.12, g: 0.12, b: 0.14 }, duration: 0.45 }, 0)
  timeline.to(state, { angle: Math.PI * 2, duration: 0.55 }, 0.45)
}

function animate() {
  const t = clock.getElapsedTime()

  // згладжуємо рух курсора (інерція)
  pointer.x += (pointer.targetX - pointer.x) * 0.08
  pointer.y += (pointer.targetY - pointer.y) * 0.08

  if (floorMesh?.material) {
    const k = 0.96 + Math.sin(t * 1.2) * 0.02
    floorMesh.material.roughness = THREE.MathUtils.clamp(k, 0.9, 0.99)
  }

  camera.lookAt(0, 2.8, 0)
  camera.rotateX(-pointer.y * MAX_TILT)
  camera.rotateY(-pointer.x * MAX_TILT)

  renderer.render(scene, camera)
  rafId = requestAnimationFrame(animate)
}


/* -------------------------- lifecycle -------------------------- */
onMounted(() => {
  initThree()
  createRoom()
  createFloor()
  createLemonTree()
  createLights()
  onResize()

  resizeObserver = new ResizeObserver(onResize)
  resizeObserver.observe(wrap.value)

  buildTimeline()
  animate()
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  ScrollTrigger.getAll().forEach(st => st.kill())
  resizeObserver && resizeObserver.disconnect()

  renderer?.dispose()
  scene?.traverse(obj => {
    if (obj.isMesh) {
      obj.geometry?.dispose?.()
      if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose?.())
      else obj.material?.dispose?.()
    }
  })
  if (renderer?.domElement?.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
})
</script>

<style scoped>
.three-wrap{
  position: relative;
  width: 100%;
  height: 100vh;
  touch-action: pan-y;
}

.hud{
  position:absolute;inset:0;pointer-events:none;
  display:flex;align-items:flex-start;justify-content:center;
}
.hud-inner{
  margin-top:24px;padding:10px 14px;border-radius:12px;
  background: rgba(0,0,0,.35);
  backdrop-filter: blur(6px);
  border:1px solid rgba(255,255,255,.12);
  text-align:center
}
.hud-inner h2{margin:0 0 6px 0;font-size:18px;letter-spacing:.3px}
.hud-inner p{margin:0;font-size:14px;opacity:.8}
</style>
