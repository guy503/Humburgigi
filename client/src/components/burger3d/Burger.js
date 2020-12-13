import { Canvas, useFrame } from "react-three-fiber";

import burgerModel from "../../resorces/hamburger/burger.glb";

import styled from "styled-components";
import React, { Suspense } from "react";

import { useGLTF } from "@react-three/drei/";

import space from "../../resorces/space.svg";

const Container = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  height: inherit;
  width: inherit;

  background-image: url(${space});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Burger = (props) => {
  const gltf = useGLTF(burgerModel, true);
  useFrame(() => {
    gltf.scene.rotateX(0.01);
    gltf.scene.rotateZ(0.009);
  });
  return (
    <mesh>
      <primitive {...props} object={gltf.scene} />
    </mesh>
  );
};

const Render = () => {
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <spotLight color="#fae3ff" intensity={0.3} position={[10, 10, 10]} />
          <Burger position={[0, 0.5, 0]} />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Render;
useGLTF.preload(burgerModel);
