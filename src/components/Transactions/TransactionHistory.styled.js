import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  width: 100%;
  max-width: 768px;
  text-align: center;
  border-radius: 8px;
  border-collapse: collapse;
  overflow: hidden;
`;
export const Cap = styled.thead`
  font-size: 16px;
  text-transform: uppercase;
  color: #fafafa;
`;
export const ItemCap = styled.tr`
  height: 50px;
  background-color: #808080;
`;
export const TitleItemCap = styled.th`
  border: 1px solid #e0e0e0;
`;
export const Body = styled.tbody`
  font-size: 16px;
  color: #808080;
`;
export const BodyRow = styled.tr`
  height: 50px;
  background-color: ${({ index }) => {
    return index % 2 === 0 ? '#fafafa' : '#f0f0f0';
  }};
  `;
export const BodyRowItem = styled.th`
  font-weight: 500;
  border: 1px solid #e0e0e0;
`;