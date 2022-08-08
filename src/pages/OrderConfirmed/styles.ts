import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  @media (max-width: 1000px) {
    margin-top: 3.5rem;
  }

  @media (max-width: 550px) {
    margin-top: 2rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
      width: 80%;
      display: block;
    }

    @media (max-width: 550px) {
      width: 100%;
      display: block;

      img {
        width: 100%;
      }
    }
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors["base-background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 550px) {
    min-width: 25rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
