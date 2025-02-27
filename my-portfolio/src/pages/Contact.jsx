import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  min-height: 100vh;
  background: #f9f9f9;  /* ✅ 浅色背景 */
  color: #333; /* ✅ 深色字体 */
  text-align: center;
  @media (max-width: 600px) {
    padding: 80px 15px;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #222; /* ✅ 让标题更突出 */
   @media (max-width: 600px) {
    font-size: 2rem;
`;

const Info = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #555; /* ✅ 让信息更柔和 */
`;

const Button = styled.a`
  background: #2563eb;
  color: white;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;
  margin-top: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #1e40af;
    transform: scale(1.05);
    @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <Info>Email: zhanghou@kean.edu</Info>
      <Info>Phone: +908 875 2958</Info>
      <Button href="mailto:zhanghou@kean.edu">Send an Email</Button>
    </ContactContainer>
  );
}

export default Contact;
