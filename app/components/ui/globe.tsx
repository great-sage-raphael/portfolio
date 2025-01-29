// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";

// // Define the type for arcs data
// type ArcData = {
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   initialPosition?: { lat: number; lng: number };
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: ArcData[];
// }

// export function Globe({ globeConfig, data }: WorldProps) {
//   const globeRef = useRef<ThreeGlobe | null>(null);

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;
//     const globeMaterial = globeRef.current.globeMaterial() as unknown as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(globeConfig.globeColor || "#1d072e");
//     globeMaterial.emissive = new Color(globeConfig.emissive || "#000000");
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(globeConfig.showAtmosphere ?? true)
//         .atmosphereColor(globeConfig.atmosphereColor ?? "#ffffff")
//         .atmosphereAltitude(globeConfig.atmosphereAltitude ?? 0.1)
//         .hexPolygonColor(() => globeConfig.polygonColor || "rgba(255,255,255,0.7)");
//     }
//   }, []);

//   return <primitive ref={globeRef} object={new ThreeGlobe()} />;
// }

// export function WebGLRendererConfig() {
//   const { gl, size } = useThree();

//   useEffect(() => {
//     gl.setPixelRatio(window.devicePixelRatio);
//     gl.setSize(size.width, size.height);
//     gl.setClearColor(0xffaaff, 0);
//   }, []);

//   return null;
// }

// export function World(props: WorldProps) {
//   const { globeConfig } = props;
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);

//   return (
//     <Canvas scene={scene} camera={new PerspectiveCamera(50, 1.2, 180, 1800)}>
//       <WebGLRendererConfig />
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[-400, 100, 400]} intensity={0.5} />
//       <directionalLight position={[-200, 500, 200]} intensity={0.8} />
//       <pointLight position={[-200, 500, 200]} intensity={0.8} />
//       <Globe {...props} />
//       <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1} />
//     </Canvas>
//   );
// }