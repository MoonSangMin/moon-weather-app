import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import propTypes from 'prop-types'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from "@expo/vector-icons"

const WeatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "천둥번개가"
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ["#89F7FE", "66A6FF"],
        title: "Drizzle",
        subtitle: "보슬비"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rainy",
        subtitle: "비"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "눈"
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny",
        subtitle: "맑음"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "구름"
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "안개"
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "미세먼지"
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "실안개"
      }
}

export default function Weather({ temp, condition }){
    return (
        <LinearGradient
            colors={WeatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons color="white"
                        size={96} name={WeatherOptions[condition].iconName} />
                    <Text style={styles.temp}>{temp}°C</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{WeatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{WeatherOptions[condition].subtitle}</Text>
                </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere"
        , "Clear", "Clouds", "Haze", "Mist", "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'left'
    },
    subtitle: {
        fontWeight: '600',
        color: 'white',
        fontSize: 24,
        textAlign: 'left'
    },
    textContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 40,
        justifyContent: 'center',
        flex: 1
    }
})