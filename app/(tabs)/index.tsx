import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton';

export default function HomeScreen() {
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const emptySlots = Array.from({ length: 4 }, (_, i) => `empty-${i}`);
  const calendarSlots = [...emptySlots, ...days];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Bem-vindo(a)</Text>
          <View style={styles.headerLine} />
        </View>

        {/* Seção Identifique Emoções */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Identifique emoções</Text>
          <Text style={styles.description}>
            Para descobrir o que a pessoa está sentindo utilize a nossa câmera, 
            assim descubra se ele está sentindo fome, sede, dor, medo, tristeza 
            ou se ele está apertado ou enjoado e sua sensação térmica.
          </Text>
          <View style={styles.buttonRow}>
            <PrimaryButton title="Descubra aqui" onPress={() => {}} width="48%" />
            <SecondaryButton title="Acessar histórico" onPress={() => {}} />
          </View>
        </View>

        {/* Calendário - Removendo todas as margens possíveis */}
        <View style={[styles.section, { marginBottom: 0 }]}> 
          <Text style={styles.sectionTitle}>Histórico de anotações</Text>
          <View style={styles.instructionBox}>
            <Text style={styles.instructionText}>Clique em qualquer dia para visualizar as anotações registradas.</Text>
          </View>

          <View style={styles.calendarHeader}>
            <View style={styles.monthSelector}>
              <Text style={styles.monthText}>Fevereiro</Text>
            </View>
            <View style={styles.arrowButton}>
              <Ionicons name="chevron-down" size={24} color="#555" />
            </View>
          </View>

          <View style={styles.weekDaysContainer}>
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day) => (
              <Text key={day} style={styles.weekDayText}>{day}</Text>
            ))}
          </View>

          <View style={styles.calendarGrid}>
            {calendarSlots.map((item, index) => {
              const isDay = !item.startsWith('empty');
              return (
                <TouchableOpacity 
                  key={index} 
                  disabled={!isDay}
                  style={[
                    styles.dayBox, 
                    !isDay ? styles.dayBoxEmpty : (item === '04' ? styles.dayBoxActive : styles.dayBoxInactive)
                  ]}
                >
                  <Text style={styles.dayLabel}>{isDay ? item : ''}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* AJUSTE MÁXIMO DE PROXIMIDADE */}
        <View style={{ marginTop: -25, marginBottom: 20 }}>
          <PrimaryButton title="Adicionar Anotação" onPress={() => {}} />
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
    paddingTop: 0, 
    marginTop: 10, 
    paddingBottom: 20, // Reduzido para não sobrar espaço no fim
  },
  headerContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  headerLine: {
    width: 200,
    height: 1.5,
    backgroundColor: '#000',
  },
  section: {
    marginBottom: 25,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C68911',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    color: '#333',
    lineHeight: 18,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  instructionBox: {
    backgroundColor: '#FDEBD0',
    padding: 12,
    borderRadius: 15,
    width: '100%',
    marginBottom: 15,
  },
  instructionText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  monthSelector: {
    backgroundColor: '#F2A31B',
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  monthText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowButton: {
    backgroundColor: '#E0E0E0',
    padding: 4,
    borderRadius: 8,
    marginLeft: 10,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  weekDayText: {
    width: '13%',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 0,
  },
  dayBox: {
    width: '13%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 8, 
  },
  dayBoxEmpty: { backgroundColor: 'transparent' },
  dayBoxInactive: { backgroundColor: '#D9D9D9' },
  dayBoxActive: { backgroundColor: '#F2A31B' },
  dayLabel: { fontSize: 13, fontWeight: '600' },
});