import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';

export default function AnotacaoScreen() {
  const [nota, setNota] = useState('');
  const [listaNotas, setListaNotas] = useState<{id: string, texto: string}[]>([]);

  const adicionarNota = () => {
    if (nota.trim().length > 0) {
      setListaNotas([...listaNotas, { id: Math.random().toString(), texto: nota }]);
      setNota(''); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Removemos a View de 100px de altura que criava o buraco */}
      
      <View style={styles.content}>
        <Text style={styles.titleText}>Anotações</Text>
        <View style={styles.headerLine} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escreva uma nova nota..."
            value={nota}
            onChangeText={setNota}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.addButton} onPress={adicionarNota} activeOpacity={0.7}>
            <Ionicons name="add" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={listaNotas}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.notaItem}>
              <Ionicons name="document-text-outline" size={20} color="#F2A31B" />
              <Text style={styles.notaTexto}>{item.texto}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhuma nota anotada ainda.</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    // AJUSTE DE ESPAÇO: Igual ao que fizemos no Index
    paddingTop: 0,
    marginTop: 10, 
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  headerLine: {
    width: 150, // Linha preta embaixo do título igual à home
    height: 1.5,
    backgroundColor: '#000',
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#333',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#F2A31B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  notaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F0',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#F2A31B',
    elevation: 1,
  },
  notaTexto: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
    fontWeight: '500',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 14,
  }
});