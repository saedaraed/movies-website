import styled from "styled-components";
import { FlexRow } from "../../Global.Styles";

export const CardContainer = styled(FlexRow)
`
  width: 280px;
  height: 150px;
  background: #353535;
  justify-content: start;
  align-items: start;
  margin: 0 30px 30px 0px;
  padding :10px;
`;

export const ActorImage = styled.img `
  width: 50px;
  height: 50%;
  object-fit: cover;
  
`;