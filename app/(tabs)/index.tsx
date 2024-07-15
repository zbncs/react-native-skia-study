import { StyleSheet, View } from "react-native";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  return (
    <SafeAreaView>
      <Canvas style={styles.canvas}>
        <Group blendMode={"multiply"}>
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={width - r} cy={r} r={r} color="magenta" />
          <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: 256,
    height: 256,
  },
});
