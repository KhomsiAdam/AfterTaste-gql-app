import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants';
import { PrimaryButton } from '../components/Button';
import CartContext, { CartItemType } from '../context/CartContext';

const CartScreen = ({ navigation }: any) => {
  const { cartItems, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);

  const orderItems = () => {
    console.log(cartItems);
  };

  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount * item.price,
      0,
    );
  };

  const CartCard = ({ item }: any) => {
    return (
      <View style={style.cartCard}>
        <Image
          source={{
            uri: item.images[0],
          }}
          style={{ height: 80, width: 80 }}
        />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text
            style={{ fontWeight: 'bold', color: COLORS.primary, fontSize: 16 }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>
            {item.ingredients}
          </Text>
          <Text
            style={{ fontSize: 17, color: COLORS.dark, fontWeight: 'bold' }}>
            ${item.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text
            style={{ fontWeight: 'bold', color: COLORS.primary, fontSize: 18 }}>
            {item.amount}
          </Text>
          <View style={style.actionBtn}>
            <Icon
              name="remove"
              size={25}
              color={COLORS.white}
              onPress={() => handleRemoveFromCart(item._id)}
            />
            <Icon
              name="add"
              size={25}
              color={COLORS.white}
              onPress={() => handleAddToCart(item)}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cartItems}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.dark,
                  fontWeight: 'bold',
                }}>
                Total Price
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.primary,
                  fontWeight: 'bold',
                }}>
                ${calculateTotal(cartItems).toFixed(2)}
              </Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryButton title="ORDER" onPress={orderItems} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 90,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
});

export default CartScreen;
