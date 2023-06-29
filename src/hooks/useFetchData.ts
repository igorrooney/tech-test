import { useEffect, useState } from 'react';
import { CustomPatient } from '@/types/custom-fhir';

export const useFetchData = () => {
  const [data, setData] = useState<CustomPatient[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('api/patients');
        const { patients } = await response.json();
        setData(patients);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading
  }
}
