import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#640C0C",
  },
  logo: {
    width: 220,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#9A9A9A",
    backgroundColor: "#D9D9D9",
    color: "#000000",
  },
  errorText: {
    color: "red",
    marginTop: 16,
    fontSize: 16,
  },
});

export default styles;
