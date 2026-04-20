import { CustomDrawer } from '@/components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons'; 
import { Drawer } from 'expo-router/drawer';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerShown: true,
          headerTransparent: false, // Mantém o fundo sólido
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0, 
            shadowOpacity: 0,
            // REMOVEMOS o 'height: 100' para o header não ocupar espaço excessivo
          },
          // Ajusta o alinhamento vertical dos itens do header
          headerTitleAlign: 'left', 
          headerTitleContainerStyle: {
            marginLeft: -10, // Aproxima o título do ícone de menu
          },
          headerTitle: ({ children }) => (
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{children}</Text>
              <View style={styles.underline} />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 20 }}
            >
              <Ionicons name="menu-outline" size={35} color="black" />
            </TouchableOpacity>
          ),
        })} 
      >
        <Drawer.Screen 
          name="index" 
          options={{ 
            drawerLabel: "Início",    
            headerTitle: "Início", 
          }} 
        />

        <Drawer.Screen 
          name="anotacao" 
          options={{ 
            drawerLabel: "Anotação", 
            headerTitle: "Anotações",
          }} 
        />

        <Drawer.Screen 
          name="perfil" 
          options={{ 
            drawerLabel: "Meu Perfil",
            headerTitle: "Perfil",
          }} 
        />

        <Drawer.Screen 
          name="configuracoes" 
          options={{ 
            drawerLabel: "Configurações",
            headerTitle: "Configurações",
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'flex-start',
    paddingBottom: 5, // Pequeno ajuste para a linha não colar no fundo do header
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginTop: 2,
  },
});