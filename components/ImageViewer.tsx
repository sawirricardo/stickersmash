import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSource;
  image?: string;
};
export default function ImageViewer({ imgSource, image }: Props) {
  const imageSource = image ? { uri: image } : imgSource;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
