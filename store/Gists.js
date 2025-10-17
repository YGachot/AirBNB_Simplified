import { createContext, useContext, useEffect, useState } from 'react';

const GISTS_URL =
  'https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json';

const LogementsContext = createContext(null);

export function LogementsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(GISTS_URL);
        if (!res.ok) {
          throw new Error(`Erreur: ${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        const payload = Array.isArray(json) ? json : json?.logements ?? [];
        if (mounted) setData(payload);
      } catch (err) {
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <LogementsContext.Provider value={{ data, loading, error }}>
      {children}
    </LogementsContext.Provider>
  );
}

export function useLogements() {
  const ctx = useContext(LogementsContext);
  if (ctx === null) {
    throw new Error();
  }
  return ctx;
}