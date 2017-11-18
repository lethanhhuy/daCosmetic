import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        return  await AsyncStorage.getItem('@cart');
    } catch (error) {
        return [];
    }
};

export default getCart;