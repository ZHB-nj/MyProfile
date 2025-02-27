import React from "react";
import styled from "styled-components";
import myImage1 from "../assets/my-image1.jpg";
import myImage2 from "../assets/my-image2.jpg";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  line-height: 1.6;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

function AboutMe() {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <ContentWrapper>
        <Text>
          Hi, I'm Houbo Zhang. I am a junior at Kean University, majoring in 
          Computer Science. I love playing basketball. I am full of vitality and 
          confidence in life. I like to record some beautiful moments in my life. Check out some of my favorite moments!
        </Text>
        <ImageWrapper>
          <Image src={myImage1} alt="My Image 1" />
          <Image src={myImage2} alt="My Image 2" />
        </ImageWrapper>
      </ContentWrapper>
    </AboutSection>
  );
}

export default AboutMe;
