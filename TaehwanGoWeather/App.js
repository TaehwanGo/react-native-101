import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(false);
  const askLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      setOk(true);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    console.log(latitude, longitude);
    const [location] = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      {
        useGoogleMaps: false,
      }
    );
    const { region } = location;
    setRegion(region);
  };
  useEffect(() => {
    askLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{region}</Text>
      </View>
      <ScrollView
        style={styles.weather}
        horizontal
        contentContainerStyle
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ca24",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 48,
    fontWeight: "500",
  },
  weather: {
    // backgroundColor: "blue",
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 150,
  },
  description: {
    marginTop: -20,
    fontSize: 48,
  },
});
