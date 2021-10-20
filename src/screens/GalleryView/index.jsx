import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,

  // Animated,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const API_KEY = "563492ad6f91700001000001ce8222bba19048078c5f88706456ae66";
const API_URL =
  "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20";

const IMAGE_SIZE = 80;
const SPACING = 10;

const handleFetchImages = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const { photos } = await data.json();

  return photos;
};

export function GalleryView() {
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await handleFetchImages();

      setImages(images);
    };
    fetchImages();
  }, []);

  const topRef = React.useRef();
  const thumbRef = React.useRef();

  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollToActiveIndex = (index) => {
    //
    setActiveIndex(index);

    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (!images) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={(e) => {
          setActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({ item }) => (
          <View style={{ width, height }}>
            <Image
              source={{ uri: item.src.portrait }}
              style={[StyleSheet.absoluteFillObject]}
            />
          </View>
        )}
      />
      <FlatList
        ref={thumbRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={{ position: "absolute", bottom: IMAGE_SIZE }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
            <Image
              source={{ uri: item.src.portrait }}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: 12,
                margin: SPACING,
                borderWidth: 2,
                borderColor: activeIndex === index ? "#fff" : "transparent",
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
