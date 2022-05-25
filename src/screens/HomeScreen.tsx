import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, CATEGORIES } from '../constants';
import { Product, useGetAllProductsQuery } from '../graphql/generated/graphql';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }: any) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const { data, loading } = useGetAllProductsQuery();

  const ListCATEGORIES = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.CATEGORIESListContainer}>
        {CATEGORIES.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex === index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...styles.categoryBtn,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 35, width: 35, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({ food }: any) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/aftertaste-images.appspot.com/o/images%2Famirali-mirhashemian-sc5sTPMrVfk-unsplash.jpgc3eb25d1-ebc2-47f7-8975-2254cded3d62?alt=media&token=0e3842de-c8ce-49da-a50b-39180808c7ca',
              }}
              style={{ height: 120, width: '100%', resizeMode: 'cover' }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.primary,
                fontWeight: 'bold',
              }}>
              {food.name}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {food.description}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{ fontSize: 18, color: COLORS.dark, fontWeight: 'bold' }}>
              ${food.price}
            </Text>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 24, color: COLORS.dark }}>
              Hello, Welcome to
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              AfterTaste
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            What do you want for today ?
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCATEGORIES />
      </View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={FOODS}
        renderItem={({ item }) => <Card food={item} />}
      /> */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          paddingHorizontal: 7.5,
        }}>
        {data &&
          data?.getAllProducts?.__typename === 'Products' &&
          data?.getAllProducts?.entities.map((product: Product) => (
            <Card food={product} key={product._id} />
          ))}
      </View>
      {loading && (
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 20,
            height: '50%',
          }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CATEGORIESListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 260,
    width: cardWidth,
    marginHorizontal: 6,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'space-between',
    paddingBottom: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
