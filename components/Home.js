import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Our Store</Text>
        <Text style={styles.subText}>Your one-stop shop for everything!</Text>
      </View>

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1523475496153-3e28891f1f8c",
        }}
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 20 }}
      >
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={styles.exploreButtonText}>Explore Products</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Why Shop With Us?</Text>
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.emojiicon}>🚚</Text>
            <Text style={styles.emoji}>Free Shipping</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.emojiicon}>💳</Text>
            <Text style={styles.emoji}>Secure Payment</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.emojiicon}>⭐</Text>
            <Text style={styles.emoji}>Quality Products</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
  },
  subText: {
    fontSize: 16,
    color: "#666666",
    marginTop: 5,
  },
  backgroundImage: {
    height: 250,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  exploreButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  featuresContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
    textAlign: "center",
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featureItem: {
    alignItems: "center",
  },
  emojiicon: {
    fontSize: 28,
    marginBottom: 10,
  },
  emoji: {
    fontSize: 10,
    color: "#666666",
  },
});

export default Home;
