import { useFormContext } from '@/context/formContext';
import axiosInstance from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function usePost(
  apiEndpointUrl,
  step,
  routeUrl,
  isDispatch = false,
  queryKey
) {
  const queryClient = useQueryClient();
  const { dispatch } = useFormContext();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpointUrl, formData);
    },
    onSuccess: data => {
      console.log(data);
      if (isDispatch) {
        dispatch({
          type: 'SET_FORM_ID',
          payload: data?.data?._id,
        });
      }

      toast.success(`step ${step} completed successfully`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });

      queryClient.invalidateQueries({ queryKey: [queryKey] });
      if (routeUrl) {
        router.push(`${routeUrl}`);
      }
    },
    onError: error => {
      toast.error(
        'An error occurred while processing your request. Please try again later.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        }
      );
    },
  });

  return mutation;
}
