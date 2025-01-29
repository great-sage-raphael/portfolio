"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [object, setObject] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(-5, 1, 6);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 0.6;
    controls.maxDistance = 0.5;   
    controls.enableDamping = false;
    controlsRef.current = controls;

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load(
      "/models/macbook_pro_2021.glb", 
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
        setObject(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("Error loading the GLB model:", error);
      }
    );

    // Cleanup function
    return () => {
      // Store reference to mountRef.current before cleanup
      const mountElement = mountRef.current;
      
      // Clean up event listeners
      window.removeEventListener("resize", handleResize);
      
      // Clean up Three.js resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
        mountElement?.removeChild(rendererRef.current.domElement);
      }
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      
      // Clean up scene
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, []); // Empty dependency array is fine here as we're setting up the scene once

  // Handle window resizing
  const handleResize = () => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  };

  // Add resize listener in a separate effect
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation loop in a separate effect
  useEffect(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !controlsRef.current) return;

    const animate = () => {
      const animationId = requestAnimationFrame(animate);

      if (object) {
        object.rotation.y += 0.01;
      }

      controlsRef.current?.update();
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);

      // Cleanup animation frame on unmount
      return () => cancelAnimationFrame(animationId);
    };

    animate();
  }, [object]);

  return <div ref={mountRef} className="h-24" />;
};

export default ThreeScene;