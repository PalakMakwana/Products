import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store'
import CartItems from './components/CartItems';
export default function App() {

const stack = createStackNavigator();

  return (
   <>
<Provider store={store}>
<SafeAreaProvider>
<NavigationContainer>
<stack.Navigator  initialRouteName='Home' >
<stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
<stack.Screen name='Products' component={Products}/>
<stack.Screen name='CartItems' component={CartItems} />

</stack.Navigator>
</NavigationContainer>
</SafeAreaProvider>
</Provider>
   </>
  );
}


