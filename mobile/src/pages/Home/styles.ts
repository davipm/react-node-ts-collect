import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #322153;
  font-size: 32px;
  font-family: "Poppins_400Regular";
  max-width: 260px;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin-top: 16px;
  font-family: "Poppins_400Regular";
  max-width: 260px;
  line-height: 24px;
`;

export const Input = styled.TextInput`
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 24px;
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  background-color: #34cb79;
  height: 60px;
  border-radius: 10px;
  margin-top: 8px;
`;

export const ButtonIcon = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
  position: relative;
  right: 20px;
`;
