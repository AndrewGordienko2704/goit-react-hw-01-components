import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  border-radius: 8px;
  overflow: hidden;
  `;

export const Description = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 120px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #505050;
`;
export const Tag = styled.p`
  color: #black;
`;
export const Location = styled.p`
  color: #black;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
`;
export const Label = styled.span`
  color: #black;
`;
export const Quantity = styled.span`
  font-weight: 700;
  color: #505050;
`;