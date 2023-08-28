import RootNavigation from './navigation';
import { useFonts } from 'expo-font';
export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf')
  });
  if (!loaded) {
    return null;
  }

  return <RootNavigation />;
}
