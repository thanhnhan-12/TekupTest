import React from 'react'
import { VscChevronUp } from "react-icons/vsc";
import styled from 'styled-components';
import IconMessenger from '../../Images/IconMessenger';

const Wrapper = styled.div``

const Container = styled.div`
  border: 1px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #e9ecef;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  position: fixed;
  bottom: 30px;
  left: 30px;
  cursor: pointer;

  &:hover {
    background-color: #e0bd08;
    color: #212529;
  }
`

const IconMes = styled.div`
  width: 60px;
  height: 60px;
  background-color: #0A7CFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
`

function ArrowTop() {
  return (
    <Wrapper>
      <Container>
        <VscChevronUp/>
      </Container>
      <IconMes>
        <IconMessenger/>
      </IconMes>
    </Wrapper>
  )
}

export default ArrowTop