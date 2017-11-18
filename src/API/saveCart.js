import { AsyncStorage } from 'react-native';

export async function saveCartToLocal(cartArray){
    await AsyncStorage.setItem('@cart', JSON.stringify(cartArray));
};
