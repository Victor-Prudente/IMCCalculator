import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [result, setResult] = useState("");
  const [classification, setClassification] = useState("");
  const [degree, setDegree] = useState("");

  const calculateBMI = () => {
    if (weight && heightCm) {
      // Converter altura de centímetros para metros
      const heightM = heightCm / 100;

      // Calcular o IMC
      const bmi = weight / Math.pow(heightM, 2);

      let currentClassification = "";
      let currentDegree = "";

      if (bmi < 18.5) {
        currentClassification = "Magreza";
        currentDegree = "0";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        currentClassification = "Normal";
        currentDegree = "0";
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        currentClassification = "Sobrepeso";
        currentDegree = "I";
      } else if (bmi >= 30.0 && bmi <= 39.9) {
        currentClassification = "Obesidade";
        currentDegree = "II";
      } else {
        currentClassification = "Obesidade Grave";
        currentDegree = "III";
      }

      setResult(`Seu IMC: ${bmi.toFixed(2)}`);
      setClassification(`Classificação: ${currentClassification}`);
      setDegree(`Grau: ${currentDegree}`);
    } else {
      setResult("Por favor, preencha todos os campos.");
      setClassification("");
      setDegree("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={heightCm}
        onChangeText={setHeightCm}
      />
      <Button title="Calcular" onPress={calculateBMI} />
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.classification}>{classification}</Text>
      <Text style={styles.degree}>{degree}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5", // Cor de fundo leve
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  classification: {
    marginTop: 8,
    fontSize: 16,
  },
  degree: {
    marginTop: 4,
    fontSize: 16,
  },
});
