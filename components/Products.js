import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import axios from "axios";
import { Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// import { add_to_cart } from "../Redux/Reducer/cartReducer";
import { FlatList } from "react-native-gesture-handler";
import { Add_cart } from "../Redux/Action/cartAction";

const Products = ({navigation}) => {
  const [viewModal, setViewModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [showProducts, setShowProducts] = useState(null);
  const dispatch = useDispatch();
//   const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error, "error finding products");
      });
  }, []);

  const handleProductView = (products) => {
    setShowProducts(products);
    setViewModal(true);
  };

  const handleAddToCart = (product) => {
    dispatch(Add_cart(product));
    setViewModal(false);
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View><TouchableOpacity onPress={()=>navigation.navigate('CartItems')}><Text>View Cart</Text></TouchableOpacity></View>
        <FlatList
          data={product}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => handleProductView(item)}
            >
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
              </View>
              <TouchableOpacity style={styles.readButton} onPress={() => handleProductView(item)}>
                <Text style={styles.readButtonText}>View Details</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />

        <Modal
          visible={viewModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setViewModal(false)}
        >
          {showProducts && (
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Image
                  source={{ uri: showProducts.image }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{showProducts.title}</Text>
                <Text style={styles.modalPrice}>${showProducts.price}</Text>
                <Text style={styles.modalDescription}>
                  {showProducts.description}
                </Text>
                <View style={styles.modalActions}>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => handleAddToCart(showProducts)}
                  >
                    <Text style={styles.actionButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.closeButton]}
                    onPress={() => setViewModal(false)}
                  >
                    <Text style={styles.actionButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 10,
  },
  productContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  productImage: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "#F9FAFB",
  },
  productInfo: {
    padding: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },
  productPrice: {
    fontSize: 14,
    color: "#4B5563",
    marginTop: 5,
  },
  readButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  readButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    textAlign: "center",
  },
  modalDescription: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#EF4444",
    marginBottom: 15,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#10B981",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  closeButton: {
    backgroundColor: "#F87171",
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Products;
