import axiosInstance from '@/services/api';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function useUpdate(
  apiEndpointUrl,
  updateId,
  step,
  routeUrl,
  refetch
) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const updateMutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.put(`${apiEndpointUrl}${updateId}`, formData);
    },
    onSuccess: data => {
      toast.success(`step ${step} Updated successfully`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 500,
      });
      queryClient.invalidateQueries({ queryKey: ['getAllStepsData'] });

      router.push(`${routeUrl}`);
      router.refresh();
      if (refetch) {
        refetch();
      }
    },
    onError: error => {
      toast.error(
        'An error occurred while processing your request. Please try again later.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 500,
        }
      );
    },
    enabled: !!updateId,
  });

  return updateMutation;
}
