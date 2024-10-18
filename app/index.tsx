// index.tsx
import { Stack } from 'expo-router';

const App = () => {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="thirdPage" />
    </Stack>
  );
};

export default App;
