import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import data from '../data/mockData';

export default function DetailsScreen({ route }) {
    const params = route?.params ?? {};
    const idRaw = params?.id ?? null;
    const id = idRaw != null ? parseInt(String(idRaw), 10) : null;

    let item = params?.item ?? null;
    if (!item && id != null) {
        item = data.find((d) => d.id === id) ?? null;
    }
    const image = item?.image;
    const title = item?.title ?? 'Titre non renseigné';
    const location = item?.location ?? item?.city ?? 'Ville inconnue';
    const price = item?.price;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {image ? (
                <Image source={{ uri: image }} style={styles.image} />
            ) : (
                <View style={[styles.image, styles.placeholder]}></View>
            )}

            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.metaRow}>
                    <Text style={styles.location}>{location}</Text>
                    <Text style={styles.price}>
                        {price != null ? `Prix : ${price} €` : 'Prix non renseigné'}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        padding: 16,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        marginBottom: 16,
        resizeMode: 'cover',
    },
    placeholder: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        color: '#7d8794',
    },
    card: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 12,
        color: '#000000',
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#059669',
    },
    location: {
        fontSize: 14,
        color: '#6b7280',
    },
});