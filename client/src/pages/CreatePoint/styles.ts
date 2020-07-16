import styled, { css } from "styled-components/macro";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    a {
      display: flex;
      align-items: center;
      color: var(--title-color);
      font-weight: bold;
      text-decoration: none;

      svg {
        margin-right: 16px;
        color: var(--primary-color);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background-color: #fff;
    border-radius: 8px;

    h1 {
      font-size: 36px;
    }

    fieldset {
      margin-top: 64px;
      min-inline-size: auto;
      border: 0;
    }

    legend {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;

      h2 {
        font-size: 24px;
      }

      span {
        font-size: 14px;
        font-weight: normal;
        color: var(--text-color);
      }
    }

    button {
      align-self: flex-end;
      margin-top: 40px;
      width: 260px;
      height: 56px;
      background-color: var(--primary-color);
      border-radius: 8px;
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      border: 0;
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;

      :hover {
        background-color: #2fb86e;
      }
    }
  }
`;

export const Fields = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input[type="text"],
  input[type="email"],
  input[type="number"],
  select {
    flex: 1;
    width: 100%;
    padding: 16px 24px;
    font-size: 1rem;
    background-color: var(--main-bg-color);
    border: 0;
    border-radius: 8px;
    color: var(--text-color);

    ::placeholder {
      color: var(--placeholder-color);
    }
  }

  select {
    appearance: none;
    cursor: pointer;
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export const FieldsGroup = styled.div`
  flex: 1;
  display: flex;

  ${Fields}:not(:last-child) {
    margin-right: 24px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding-left: 0;
  list-style: none;
`;

export const ListItem = styled.li<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: #f5f5f5;
  border: 2px solid #f5f5f5;
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;

  span {
    display: flex;
    align-items: center;
    color: var(--title-color);
    flex: 1;
    margin-top: 12px;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #e1faec;
      border: 2px solid #34cb79;
    `}
`;
