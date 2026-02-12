import { Pressable, StyleSheet, Text } from 'react-native';
// Definimos una interfaz para tipar las propiedades del componente
interface Props {
    label: string; // Texto que mostrará el botón
    position?: 'left' | 'right' | 'center'; // Posición horizontal del botón
    onPress?: () => void; // Acción al presionar
    onLongPress?: () => void; // Acción al mantener presionado
}
export default function FAB({
    label,
    onPress,
    onLongPress,
    position = 'right',
}: Props) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.floatingButton,
                position === 'right' && styles.positionRight, //si la posicion es igual a right se aplica el estilo positionRight
                position === 'left' && styles.positionLeft, //si la posicion es igual a left se aplica el estilo positionLeft
                position === 'center' && styles.positionCenter, //si la posicion es igual a center se aplica el estilo positionCenter
                pressed ? { opacity: 0.7 } : { opacity: 1 },
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#461d70',
        padding: 20,
        borderRadius: 15,
        elevation: 3,
    },
    positionRight: {
        right: 20,
    },
    positionLeft: {
        left: 20,
    },
    positionCenter: {
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});