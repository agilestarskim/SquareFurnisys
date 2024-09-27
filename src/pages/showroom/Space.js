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

function ShowroomSpace() {
  const models = [
    { name: 'Space layout A', size: 'small' },
    { name: 'Space layout B', size: 'small' },
    { name: 'Space layout C', size: 'medium' },
    { name: 'Space layout D', size: 'large' },
    { name: 'Space layout E', size: 'large' },
    { name: 'Space layout F', size: 'small' }
  ];

  return (
    <Layout>
      <Container fluid className="p-0">
        {models.map((model) => (
          <React.Fragment key={model.name}>                    
            <Row className="model-container">
              <Col xl={12}>
                <h1 className="model-title">{model.name}</h1>
              </Col>                        
              <Col md={6} className="mb-5">                            
                  <Canvas style={{ height: '800px' }} camera={{ position: [5, 10, 20] }}>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[0, 10, 5]} intensity={1} />
                      <pointLight position={[10, 10, 10]} intensity={1} />
                      <Model path={`/models/space/${model.name}.gltf`} size={model.size} />
                      <OrbitControls target={[0, 0, 0]} enableZoom={false} />
                  </Canvas>                            
              </Col>  
              <Col md={6}>
                <img src={`/models/space/${model.name}.png`} alt={`${model} model`} style={{ width: '100%' }} />
              </Col>                      
            </Row>                    
          </React.Fragment>
        ))}
      </Container>
    </Layout>
  )
}

export default ShowroomSpace;