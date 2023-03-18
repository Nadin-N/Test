import styled from 'styled-components';

export const UserList = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    grid-gap: 48px;
  }
`;
