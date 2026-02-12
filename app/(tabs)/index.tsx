import ContadorTexto from '@/components/ContadorTexto';
import FAB from '@/components/FAB';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
export default function CounterScreen() {
  // Estado que almacena el valor del contador
  const [count, setCount] = useState(10);
  return (
    <View style={styles.container}>
      <ContadorTexto count={count} />
      <FAB
        label="+1"
        position="right"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      <FAB
        label="-1"
        position="center"
        onPress={() =>{
          if (count > 0){
            setCount(count - 1)
          }
        }}
        onLongPress={() => setCount(0)}
      />
      <FAB
        label="Reset"
        position="left"
        onPress={() => setCount(0)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
