import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/family.jpeg')}
          style={{ width: '100%', height: '100%' }} // Esto hará que llene todo el encabezado
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Informacion Personal
        </ThemedText>
      </ThemedView>
      <Collapsible title="Nombre y edad">
        <ThemedText>Alan Joesen Morales Velasco</ThemedText>
        <ThemedText>edad: 21 años</ThemedText>
      </Collapsible>
      <Collapsible title="Programa De Formacion">
        <ThemedText>
          Analisis y desarrollo de software
          ADSO 26 
        </ThemedText>
      </Collapsible>
      <Collapsible title="Mensaje Creativo">
        <ThemedText>
          Deja de intentar encajar en habitaciones que no fueron construidas para ti. No eres una pieza defectuosa de un rompecabezas ajeno, eres el arquitecto de tu propio paisaje. Tu única responsabilidad es ser fiel al plano original de tu esencia.
        </ThemedText>
      </Collapsible>
      
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
