import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import * as Location from "expo-location";

import api from "../../services/api";

import {
  Container,
  Description,
  Title,
  Item,
  ItemContainer,
  ItemTitle,
  Map,
  MapContainer,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
} from "./styles";

interface Item {
  id: number;
  title: number;
  image_url: string;
}

interface Point {
  id: number;
  name: string;
  image: string;
  image_url: string;
  latitude: number;
  longitude: number;
}

interface Params {
  uf: string;
  city: string;
}

function Points() {
  const navigation = useNavigation();
  const route = useRoute();
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItem, setSelectedItem] = useState<number[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const routeParams = route.params as Params;

  useEffect(() => {
    (async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Oooops...",
          "Precisamos de sua permissão para obter a localização"
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    })();
  }, []);

  useEffect(() => {
    api
      .get("/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/points", {
        params: {
          city: routeParams.city,
          uf: routeParams.uf,
          items: selectedItem,
        },
      })
      .then((response) => {
        setPoints(response.data);
      });
  }, [selectedItem]);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateDetails(id: number) {
    navigation.navigate("Details", { point_id: id });
  }

  function handleSelectedItem(id: number) {
    const alreadySelected = selectedItem.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItem.filter((item) => item! == id);
      setSelectedItem(filteredItems);
    } else {
      setSelectedItem([...selectedItem, id]);
    }
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Title>Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>

        <MapContainer>
          {initialPosition[0] !== 0 && (
            <Map
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map((point: Point) => (
                <MapMarker
                  key={String(point.id)}
                  onPress={() => handleNavigateDetails(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                >
                  <MapMarkerContainer>
                    <MapMarkerImage source={{ uri: point.image_url }} />
                    <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  </MapMarkerContainer>
                </MapMarker>
              ))}
            </Map>
          )}
        </MapContainer>
      </Container>

      <ItemContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map((item) => (
            <Item
              key={String(item.id)}
              isSelected={selectedItem.includes(item.id)}
              onPress={() => handleSelectedItem(item.id)}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ScrollView>
      </ItemContainer>
    </>
  );
}

export default Points;
