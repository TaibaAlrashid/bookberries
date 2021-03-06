import React from "react";
import { HomeBackground, Title, TopStyling } from "../styles";
import { View } from "react-native";

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri: "https://images.unsplash.com/photo-1585521550659-64a7cafb39e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxsaWJyYXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      }}
    >
      <TopStyling>
        <Title>BOOKBERRIES</Title>
      </TopStyling>
    </HomeBackground>
  );
};

export default Home;
