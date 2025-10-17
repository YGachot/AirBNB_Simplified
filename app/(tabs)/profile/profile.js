import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Profile() {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.info}>
                    <View style={styles.topRow}>
                        <View style={styles.avatarCircle}>
                            <Text style={styles.initials}>CS</Text>
                        </View>

                        <View style={styles.meta}>
                            <Text style={styles.name}>Clément Salouet</Text>
                            <View style={styles.row}>
                                <Ionicons name="location" size={14} color="#666" />
                                <Text style={styles.locationText}>  Rennes, France</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.bio}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </Text>

                    <View style={styles.stats}>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>?</Text>
                            <Text style={styles.statLabel}>Reviews</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>?</Text>
                            <Text style={styles.statLabel}>Trips</Text>
                        </View>
                        <View style={styles.stat}>
                            <Text style={styles.statNumber}>6.7</Text>
                            <Text style={styles.statLabel}>Rating</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#f6f7fb' },
    container: { flexGrow: 1, justifyContent: 'center', paddingVertical: 40 }, // centre la card verticalement
    info: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 18,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    topRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    avatarCircle: {
        width: 84,
        height: 84,
        borderRadius: 42,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#8b5cf6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    initials: { color: '#fff', fontSize: 24, fontWeight: '700' },
    meta: { flex: 1 },
    name: { fontSize: 18, fontWeight: '700', color: '#111', marginBottom: 4 },
    row: { flexDirection: 'row', alignItems: 'center' },
    locationText: { color: '#666' },
    bio: { color: '#444', lineHeight: 20, marginBottom: 14 },
    stats: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
    stat: { alignItems: 'center', flex: 1 },
    statNumber: { fontWeight: '700', fontSize: 16 },
    statLabel: { color: '#777', fontSize: 12 },
});