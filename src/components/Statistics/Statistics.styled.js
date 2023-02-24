import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor.js'

export const CardStatistics = styled.section`
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  width: 1000;
`;
export const Title = styled.h2`
  font-size: 18px;
  line-height: 3em;
  font-weight: 500;
  color: #505050;
  text-transform: uppercase;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
  font-size: 16px;
  color: #fafafa;
`;
export const Percentage = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #fafafa;
`;