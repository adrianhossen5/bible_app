import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View className="flex flex-row justify-evenly py-10">
        <TouchableOpacity className='border'>
          <Text>Press Here</Text>
        </TouchableOpacity>
        <TouchableOpacity className='border'>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
