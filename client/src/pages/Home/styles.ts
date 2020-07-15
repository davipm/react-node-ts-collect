import styled from "styled-components/macro";
import imageBg from "../../assets/home-background.svg";

export const Container = styled.section`
  min-height: 100vh;
  background: url("${imageBg}") no-repeat 700px bottom;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  header {
    margin: 48px 0 0;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    max-width: 560px;

    h1 {
      font-size: 54px;
      color: var(--title-color);
    }

    p {
      font-size: 24px;
      margin-top: 24px;
      line-height: 38px;
    }

    a {
      display: flex;
      overflow: hidden;
      align-items: center;
      margin-top: 40px;
      width: 100%;
      max-width: 360px;
      height: 72px;
      background-color: var(--primary-color);
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.15s ease-in-out;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 72px;
        height: 72px;
        background-color: rgba(0, 0, 0, 0.08);
        transition: background-color 0.2s;

        svg {
          width: 20px;
          height: 20px;
          color: #fff;
        }
      }

      strong {
        flex: 1;
        text-align: center;
        color: #fff;
      }

      :hover {
        background-color: #2fb86e;
      }
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;

    header {
      margin: 48px auto 0;
    }

    main {
      align-items: center;

      h1 {
        font-size: 42px;
      }

      p {
        font-size: 24px;
      }
    }
  }
`;
