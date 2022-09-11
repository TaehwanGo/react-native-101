import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

/**
 * API키는 서버에 저장하는 것이 안전함
 */
const API_KEY = "f0b3d43e2e0ebdfbcbac3507e3f75424";

const weatherIcons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Thunderstorm: "lightning",
  Drizzle: "rain",
  Rain: "rain",
  Snow: "snow",
  Atmosphere: "fog",
  Haze: "day-haze",
  Mist: "dust",
  Dust: "dust",
};

export default function App() {
  const [region, setRegion] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [ok, setOk] = useState(false);
  const askLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      setOk(true);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
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
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alert&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setWeatherList(json.daily);
  };
  useEffect(() => {
    askLocation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
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
        {weatherList.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          weatherList.map((day, index) => {
            // console.log("day.weather", day.weather);
            const [weatherObject] = day.weather;
            const { main: mainWeather, description } = weatherObject;
            return (
              <View key={index} style={styles.day}>
                <Text style={styles.date}>
                  {new Date(day.dt * 1000).toString().substring(0, 10)}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <Text style={styles.temp}>
                    {parseFloat(day.temp.day).toFixed(1)}°C
                  </Text>
                  <Fontisto name={weatherIcons[mainWeather]} size={52} />
                </View>
                <Text style={styles.description}>{mainWeather}</Text>
                <Text style={styles.tinyText}>{description}</Text>
              </View>
            );
          })
        )}
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
  date: {
    fontSize: 32,
  },
  temp: {
    fontSize: 60,
    marginTop: 20,
  },
  description: {
    marginTop: 20,
    fontSize: 48,
  },
  tinyText: {
    fontSize: 24,
  },
});
