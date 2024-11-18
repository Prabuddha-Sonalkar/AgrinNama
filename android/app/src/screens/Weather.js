// Weather.js
import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';

// Create a Weather Context
const WeatherContext = createContext();

// Weather Provider to manage state and fetch data
const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('Kolhapur'); // Default city
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = useCallback(() => {
    setLoading(true);
    fetch(`https://api.weatherapi.com/v1/current.json?key=92f6871c8ff942819d820715240510&q=${encodeURIComponent(city)}&aqi=no`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the weather data:', error);
        setLoading(false);
      });
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  useEffect(() => {
    fetchWeather();
  }, [city, fetchWeather]); // Added fetchWeather to the dependency array

  return (
    <WeatherContext.Provider value={{ weather, loading, setCity, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Main Weather Component
const Weather = () => {
  const { weather, loading, setCity, fetchWeather } = useContext(WeatherContext);
  const [inputCity, setInputCity] = useState('');

  const handleSearch = () => {
    if (inputCity) {
      setCity(inputCity);
      setInputCity('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AgriNama Weather Updates: </Text>
      <Text style={styles.subHeader}>Real-Time Climate Insights for Farmers</Text>

      <TextInput
        style={styles.input}
        value={inputCity}
        onChangeText={(text) => setInputCity(text)}
        placeholder="Enter city"
        placeholderTextColor="black" 
      />
      <Button title="Search" onPress={handleSearch} />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        weather && (
          <View style={styles.weatherInfo}>
            <Text style={styles.weatherText}>Location: {weather.location.name}</Text>
            <Text style={styles.weatherText}>Region: {weather.location.region}</Text>
            <Text style={styles.weatherText}>Country: {weather.location.country}</Text>
            <Text style={styles.weatherText}>Last Updated: {weather.current.last_updated}</Text>
            <Text style={styles.weatherText}>Temperature: {weather.current.temp_c}°C</Text>
            <Text style={styles.weatherText}>Condition: {weather.current.condition.text}</Text>
          </View>
        )
      )}

      <Button title="Refresh" onPress={fetchWeather} />
    </View>
  );
};

// Main App Component
const App = () => {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black', // Set text color to black
    },
    subHeader: {
      fontSize: 16,
      marginBottom: 20,
      color: 'black', // Set text color to black
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 20,
      width: '80%',
      paddingLeft: 10,
      color: 'black', // Set text color to black
    },
    loader: {
      marginTop: 20,
    },
    weatherInfo: {
      marginTop: 20,
      alignItems: 'center',
    },
    weatherText: {
      fontSize: 16,
      marginVertical: 5,
      color: 'black', // Set text color to black
    },
  });
  

export default App;
