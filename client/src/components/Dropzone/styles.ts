import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;
  height: 300px;
  background-color: var(--dopzone-bg-color);
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    color: #333;
    border: 1px dashed var(--dopzone-border-color);
    border-radius: 10px;
    cursor: pointer;

    svg {
      color: var(--dopzone-border-color);
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }
`;
