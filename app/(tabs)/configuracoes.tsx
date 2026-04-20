import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Título da Tela e Linha (Padrão das outras telas) */}
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Configurações</Text>
          <View style={styles.headerLine} />
        </View>

        {/* Aqui você pode adicionar suas opções de configuração futuramente */}
        <View style={styles.content}>
          <Text style={styles.placeholderText}>
            As opções de ajustes e preferências aparecerão aqui.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    // AJUSTE DE ESPAÇO: Mantendo o padrão de 10px abaixo da faixa branca
    paddingTop: 0,
    marginTop: 10,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 25,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  headerLine: {
    width: 150,
    height: 1.5,
    backgroundColor: '#000',
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  }
});