import { Canvas, useFrame } from "react-three-fiber";

import burgerModel from "../../resorces/hamburger/burger.glb";

import styled from "styled-components";
import React, { Suspense } from "react";

import { useGLTF } from "@react-three/drei/";

const Container = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  height: inherit;
  width: inherit;
`;

const Burger = (props) => {
  const gltf = useGLTF(burgerModel, true);
  const rotate = props.rotate;

  useFrame(() => {
    gltf.scene.rotateX(rotate[0]);
    gltf.scene.rotateY(rotate[1]);
    gltf.scene.rotateZ(rotate[2]);
  });
  return (
    <mesh>
      <primitive {...props} object={gltf.scene} />
    </mesh>
  );
};

const Render = ({ position = [0, -0.2, 0], rotate = [0.01, 0, 0.01], ambientLight=undefined }) => {
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          { ambientLight ? <ambientLight intensity={0.2} color='#FFFFFF' /> : null }
          <spotLight color="#fae3ff" intensity={0.3} position={[10, 10, 10]} />
          <Burger position={position} rotate={rotate} />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Render;
useGLTF.preload(burgerModel);
