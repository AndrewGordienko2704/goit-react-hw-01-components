import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 350px;
  height: 70px;
  padding: 0 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;
export const Status = styled.span`
  width: 18px;
  height: 18px;
  background-color: ${({ isOnlines }) => {
    return isOnlines ? '#03fd07' : '#ff0000';
  }};
  border-radius: 50%;
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  background-color: #fafafa;
  border-radius: 8px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #505050;
`;