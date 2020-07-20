import React, { useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather as Icon } from "@expo/vector-icons";

import {
  Container,
  ButtonText,
  Button,
  Title,
  Input,
  ButtonIcon,
  Description,
  Main,
} from "./styles";

function Home() {
  const navigation = useNavigation();
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  function handleNavigationPoints() {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Container
        source={require("../../assets/home-background.png")}
        imaStyle={{ width: 274, height: 268 }}
      >
        <Main>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Title>Seu marketplace de coleta de resíduos</Title>
            <Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </Description>
          </View>
        </Main>

        <View>
          <Input
            placeholder="Digite a UF"
            value={uf}
            maxLenght={2}
            autoCapitalize="characters"
            autoCorrect={false}
            onChangeText={setUf}
          />

          <Input
            placeholder="Digite a cidade"
            value={city}
            autoCapitalize="characters"
            autoCorrect={false}
            onChangeText={setCity}
          />

          <Button onPress={handleNavigationPoints}>
            <ButtonIcon>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </ButtonIcon>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Home;
