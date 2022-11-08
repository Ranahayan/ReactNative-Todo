import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Header() {
  return (
    <View style={styles.heaader}>
      <Text style={styles.title}>TO DO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heaader: {
    width: wp("100%"),
    height: hp("8%"),
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    textAlignVertical: "center",
  },
});
