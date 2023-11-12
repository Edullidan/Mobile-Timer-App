import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Timers = () => {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (seconds === 59) {
      setSeconds(0);
      setMinute((prevMinute) => prevMinute + 1);
    }
  }, [seconds]);

  const restart = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
    setMinute(0);
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  return (
    <View style={styles.container}>
      <View style={styles.styledSection}>
        <Text style={styles.styledH1}>Timer</Text>
        <Text>
          {minute < 10 ? "0" + minute : minute}:
          {seconds < 10 ? "0" + seconds : seconds}
        </Text>
        <TouchableOpacity style={styles.styledButtonOne} onPress={restart}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.styledButtonTwo} onPress={stop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 300,
    
    alignItems: "center",
  },
  styledSection: {
    backgroundColor: "#0b7c9e",
    width: "40%", 
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
  },
  styledH1: {
    color: "black",
    fontSize: 20,
    marginBottom: 10,
  },
  styledButtonOne: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: "#0c3643",
  },
  styledButtonTwo: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: "#0c3643",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Timers;