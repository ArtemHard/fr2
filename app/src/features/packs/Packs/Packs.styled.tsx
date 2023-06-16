import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 7% 0 7%;
  /* max-width: 1008px; */
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ParamContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */

  color: #000000;
`

const ParamsName = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #000000;
`
export const P = {
  Wrapper,
  Container,
  ParamContainer,
  Title,
  ParamsName,
}
