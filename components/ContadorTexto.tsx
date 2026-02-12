import { Text, StyleSheet } from 'react-native';

interface Props {
  count: number;
}

export default function ContadorTexto({ count }: Props) {
  return (
    <Text style={[
      styles.counterText,
      count > 20 && { color: 'red' } // Aquí incluimos la lógica del Reto 1
    ]}>
      {count}
    </Text>
  );
}

const styles = StyleSheet.create({
  counterText: {
    fontSize: 120,
    fontWeight: '100',
    color: '#461d70', // Tu color original
  },
});