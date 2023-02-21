import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // Camera controls
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'; // Font 
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'; // Make the shape bigger 


const Coin = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setClearColor(0x000000, 0) // sets a transparent background
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const geometry = new THREE.CircleGeometry(3, 40)
    const material = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 1, roughness: 0.5 })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, 0, 1)
    scene.add(light)

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.rotateSpeed = 0.5 // adjust the speed of the rotation

    const animate = () => {
      requestAnimationFrame(animate)

      controls.update() // updates the controls on each animation frame

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      renderer.dispose()
    }
  }, [])

  return (
    <canvas ref={canvasRef} />
  )
}

export default Coin
