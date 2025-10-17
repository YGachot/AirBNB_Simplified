import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="indextabs"
                options={{ title: "Tab1", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                )}}
            />
            <Tabs.Screen
                name="indextabs2"
                options={{ title: "Tab2", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search" size={size} color={color} />
                )}}
            />
            <Tabs.Screen
                name="indextabs3"
                options={{ title: "Tab3", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                )}}
            />
        </Tabs>
    );
}