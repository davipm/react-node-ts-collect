import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, Linking } from "react-native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailCompose from "expo-mail-composer";

import api from "../../services/api";
import {
  Container,
  Address,
  AddressContent,
  AddressTitle,
  Button,
  ButtonText,
  Footer,
  PointImage,
  PointItems,
  PointName,
} from "./styles";

interface Params {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };

  items: {
    title: string;
  }[];
}

function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState<Data>({} as Data);

  const routeParams = route.params as Params;

  useEffect(() => {
    (async function loadPoints() {
      try {
        const response = await api.get(`/points/${routeParams.point_id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse sobre coleta de resíduos`
    );
  }

  function handleComposeEmail() {
    MailCompose.composeAsync({
      subject: "Interesse na coleta de resíduos",
      recipients: [data.point.email],
    });
  }

  if (!data.point) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity onPress={handleNavigationBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <PointImage source={{ uri: data.point.image_url }} />

        <PointName>{data.point.name}</PointName>
        <PointItems>
          {data.items.map((item) => item.title).join(", ")}
        </PointItems>

        <Address>
          <AddressTitle>Address</AddressTitle>
          <AddressContent>
            {data.point.city}, {data.point.uf}
          </AddressContent>
        </Address>
      </Container>

      <Footer>
        <Button onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <ButtonText>Whatsapp</ButtonText>
        </Button>

        <Button onPress={handleComposeEmail}>
          <FontAwesome name="mail" size={20} color="#FFF" />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </SafeAreaView>
  );
}

export default Details;
