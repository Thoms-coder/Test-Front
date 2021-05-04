import React from 'react';
import { SafeAreaView, Text, View, Button} from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}>
          Hello Tailwind 👋
        </Text>
      </View>
      <Button title='Test Button' style={tailwind('text-black font-semibold text-lg')}>
      </Button>
    </SafeAreaView>
  );
}
