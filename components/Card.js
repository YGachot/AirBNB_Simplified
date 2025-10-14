import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Card({ item, onPress, style }) {
    if (!item) return null;

    const cardWidth = Math.min(SCREEN_WIDTH * 0.8, 420);

    return (
        <TouchableOpacity style={[styles.card, { width: cardWidth }, style]} activeOpacity={0.8} onPress={onPress}>
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.price}>{item.price} €</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#000000',
    },
    info: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '800',
        color: '#000000',
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        color: '#000000',
    },
});