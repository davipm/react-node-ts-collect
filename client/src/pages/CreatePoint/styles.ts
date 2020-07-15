import styled from "styled-components/macro";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

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
      color: #a0a0b2;
    }
  }

  select {
    appearance: none;
    cursor: pointer;
  }
`;

export const FieldsGroup = styled.div`
  flex: 1;
  display: flex;

  ${Fields}:not(:last-child) {
    margin-right: 24px;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
