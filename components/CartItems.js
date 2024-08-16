import { View, Text,Image, FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease_quantity, increase_quantity, Remove_cart } from '../Redux/Action/cartAction'

const CartItems = () => {
    const carts = useSelector(state => state.cart.items);
    const dispatch = useDispatch()
    const handleRemovecart =(productid)=>{
        dispatch(Remove_cart(productid))
    }
    const handleIncrementQuantity = (productId) => {
        dispatch(increase_quantity(productId));
      };
    
      const handleDecrementQuantity = (productId) => {
        dispatch(decrease_quantity(productId));
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Shopping Cart</Text>
          {carts.length === 0 ? (
            <Text>Your cart is empty</Text>
          ) : (
            <FlatList
              data={carts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Image source={{uri: item.image}} style={{height:200,width:"100%", resizeMode:"contain"}}/>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemPrice}>${item.price} x {item.quantity}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => handleDecrementQuantity(item.id)}>
                      <Text style={styles.quantityButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleIncrementQuantity(item.id)}>
                      <Text style={styles.quantityButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => handleRemovecart(item.id)}>
                    <Text style={styles.removeButton}>Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      itemContainer: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        elevation: 1,
      },
      itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      itemPrice: {
        fontSize: 16,
        color: '#6c757d',
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      quantityButton: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: '#007bff',
      },
      quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
      },
      removeButton: {
        color: '#d9534f',
        marginTop: 10,
        textAlign: 'right',
      },
    });

export default CartItems