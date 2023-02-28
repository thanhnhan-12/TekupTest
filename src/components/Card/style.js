import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em 1.5em;
  margin: auto;
`

export const Card = styled.div``

export const CardImg = styled.div`
  position: relative;
  
  img {
    width: 417px;
    height: auto;
  }
`

export const CardBox = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 12px 28px rgb(0 0 0 / 14%);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  position: absolute;
  bottom: 0%;
  width: 93%;
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -1px;
  }
`
