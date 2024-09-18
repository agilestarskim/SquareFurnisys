import * as React from "react"
import * as THREE from 'three'; // THREE 라이브러리 임포트
import Layout from "../../components/common/Layout"
import { Container, Row, Col } from 'react-bootstrap'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ path, size }) {
  const { scene } = useGLTF(path);
  const ref = React.useRef();
  var scale = 5;

  if (size === 'small') {
      scale = 10;
  } else if (size === 'medium') {
      scale = 8;
  } else if (size === 'large') {
      scale = 5;
  }

  React.useEffect(() => {
    // 모델의 전체 바운딩 박스를 계산
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());

    // 모델의 모든 메쉬를 한 번에 이동
    scene.position.sub(center);

    
    scene.scale.set(scale, scale, scale);
  }, [scene, size]);

  return <primitive ref={ref} object={scene} scale={[scale, scale, scale]} />;
}

function ShowroomBistro() {
  const models = [
    { name: 'bistro layout A', size: 'medium' },
    { name: 'bistro layout B', size: 'small' },
    { name: 'bistro layout C', size: 'large' }
  ];

  return (
    <Layout>
        <Container>
            {models.map((model) => (
                <React.Fragment key={model.name}>
                    <hr style={{ borderColor: 'gray', borderWidth: '2px', margin: '3rem 0' }} />
                    <Row className="mb-4 align-items-center">                        
                        <Col md={6} className="mb-5">
                            <h3>{model.name}</h3>
                            <Canvas style={{ height: '800px' }} camera={{ position: [5, 10, 20] }}>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[0, 10, 5]} intensity={1} />
                                <pointLight position={[10, 10, 10]} intensity={1} />
                                <Model path={`/models/bistro/${model.name}.gltf`} size={model.size} />
                                <OrbitControls target={[0, 0, 0]} enableZoom={false} />
                            </Canvas>                            
                        </Col>  
                        <Col md={6}>
                          <img src={`/models/bistro/${model.name}.png`} alt={`${model} model`} style={{ width: '100%' }} />
                        </Col>                      
                    </Row>                    
                </React.Fragment>
            ))}
        </Container>
    </Layout>
  )
}

export default ShowroomBistro;