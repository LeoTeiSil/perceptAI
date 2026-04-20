import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Título da Tela e Linha (Padrão das outras telas) */}
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Editar Perfil</Text>
          <View style={styles.headerLine} />
        </View>

        {/* Seção do Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={70} color="#F2A31B" />
            <TouchableOpacity style={styles.editBadge} activeOpacity={0.7}>
              <Ionicons name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Ana Clara</Text>
          <Text style={styles.userEmail}>ana@gmail.com</Text>
        </View>

        {/* Lista de Opções de Perfil */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          
          <View style={styles.card}>
            <ProfileItem icon="person-outline" label="Nome Completo" value="Ana Clara da Silva" />
            <View style={styles.separator} />
            <ProfileItem icon="mail-outline" label="E-mail" value="ana@gmail.com" />
            <View style={styles.separator} />
            <ProfileItem icon="call-outline" label="Telefone" value="(11) 99999-9999" />
          </View>

          <Text style={styles.sectionTitle}>Conta</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.actionItem} activeOpacity={0.6}>
              <Ionicons name="shield-checkmark-outline" size={22} color="#333" />
              <Text style={styles.actionText}>Alterar Senha</Text>
              <Ionicons name="chevron-forward" size={20} color="#CCC" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
            <Text style={styles.logoutText}>Sair da Conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Componente auxiliar para os itens de informação
function ProfileItem({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <View style={styles.itemRow}>
      <Ionicons name={icon} size={22} color="#F2A31B" />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemLabel}>{label}</Text>
        <Text style={styles.itemValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Fundo branco para combinar com o header
  },
  scrollContent: {
    paddingHorizontal: 20,
    // AJUSTE DE ESPAÇO: Igual ao Index e Anotação
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: '#F2A31B',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFF',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
  },
  infoSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#C68911', // Cor de destaque padrão das seções
    marginBottom: 10,
    marginTop: 15,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemTextContainer: {
    marginLeft: 15,
  },
  itemLabel: {
    fontSize: 12,
    color: '#999',
  },
  itemValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 5,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#FFE5E5',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF4D4D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});