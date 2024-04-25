import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{ color: "#000000", fontSize: 20, fontWeight: "700" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ECE57D",
    width: "100%",
    borderRadius: 24,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
