import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import data from '../data/mockData';
import Details from '../components/Details';

export default function DetailsPage() {
  
  const params = useLocalSearchParams();
  const idRaw = params?.id ?? null;
  const id = idRaw != null ? parseInt(String(idRaw), 10) : null;
  const item = id != null ? data.find((d) => d.id === id) ?? null : null;

  return <Details route={{ params: { item, id } }} />;
}