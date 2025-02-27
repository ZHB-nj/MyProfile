import React from "react";
import styled from "styled-components";


const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
   @media (max-width: 768px) {
    background-position: top;
    height: auto;
    padding: 80px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: black; /* ✅ 文字变白色 */
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8); 
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: black; /* ✅ 文字变白色 */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
`;
const IntroductionSection = styled.div`
  width: 80%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.6); /* 半透明背景 */
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px); /* 模糊背景 */
`;

const IntroductionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;
function Home() {
  return (
    <Container>
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>Explore my projects and feel free to reach out!</Subtitle>

      <IntroductionSection>
        <h2>About Me</h2>
        <IntroductionText>
          Hi, I'm Houbo Zhang. I am a junior in kean University. My major is computer science. I especially like playing basketball in my normal life. I am always full of vitality and confidence in life.
        </IntroductionText>
      </IntroductionSection>
    </Container>
  );
}

export default Home;

