import AppNavigation from './navigation/appNavigation';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { StatusBar, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  const loadCustomFont = async () => {
    await Font.loadAsync({
      exo: require('./assets/fonts/Exo/static/Exo-Regular.ttf'),
      exoSemibold: require('./assets/fonts/Exo/static/Exo-SemiBold.ttf'),
      roboto: require('./assets/fonts/Roboto/Roboto-Light.ttf'),
      robotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadCustomFont();
  }, []);

  // Render a loading spinner if the font hasn't loaded yet
  if (!isFontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <AppNavigation />
    </>
  );
}
