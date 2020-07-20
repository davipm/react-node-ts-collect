import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  padding: 20px 23px;
`;

export const PointImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`;

export const PointName = styled.Text`
  margin-top: 24px;
  font-size: 28px;
  color: #322153;
  font-family: "Poppins_400Regular";
`;

export const PointItems = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  color: #6c6c80;
`;

export const Address = styled.View`
  margin-top: 32px;
`;

export const AddressTitle = styled.Text`
  font-size: 16px;
  color: #322153;
  font-family: "Poppins_400Regular";
`;

export const AddressContent = styled.Text``;

export const Footer = styled.View``;

export const Button = styled(RectButton)``;

export const ButtonText = styled.Text``;
