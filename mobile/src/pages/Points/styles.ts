import styled, { css } from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";

interface Selected {
  isSelected: boolean;
}

export const Container = styled.View.attrs({
  paddingTop: 20 + Constants.statusBarHeight,
})`
  flex: 1;
  padding-right: 32px;
  padding-left: 32px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 24px;
  font-family: "Poppins_400Regular";
`;

export const Description = styled.Text`
  margin-top: 4px;
  color: #6c6c80;
  font-size: 14px;
  font-family: "Poppins_400Regular";
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker)`
  width: 90px;
  height: 80px;
`;

export const MapMarkerContainer = styled.View`
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  width: 90px;
  height: 70px;
  background-color: #34cb79;
`;

export const MapMarkerImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 90px;
  height: 45px;
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  font-family: "Poppins_400Regular";
  font-size: 13px;
  line-height: 23px;
  color: #fff;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const Item = styled.TouchableOpacity<Selected>`
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 120px;
  text-align: center;
  margin-right: 8px;
  padding-top: 20px;
  padding-bottom: 16px;
  border: 2px solid #eee;
  border-radius: 8px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: #34cb79;
    `}
`;

export const ItemTitle = styled.Text`
  font-size: 13px;
  text-align: center;
  font-family: "Poppins_400Regular";
`;
