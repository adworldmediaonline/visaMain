import { loadStripe } from '@stripe/stripe-js';
import axiosInstance from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function usePostPayment(
  apiEndpointUrl,
  successMessage,
  routeUrl,
  queryKey
) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.put(apiEndpointUrl, formData);
    },
    onSuccess: async data => {
      console.log(data);
      // const stripe = await loadStripe(
      //   'pk_test_51OU6joSGkBrkiDgGtNPMd58UeCSY5BFPpK8shnjeLTqzQPQRqxePAbOf7zv5qTIrfQp2XVc7fjgyzdW5xFF4TNew00V3FULH6b'
      // );
      const stripe = await loadStripe(
        'pk_live_51OU6joSGkBrkiDgGCr3XoYqAjaKlX7DfvDpofM2jaMn0x4LbMLrDpPumYm1sXrUSe7su8LObOO1wRaPqWAvESlsf00kqcCssdx'
      );
      // console.log(data.data.id);

      const result = stripe.redirectToCheckout({
        sessionId: data.data.id,
      });

      console.log(result);

      if (result.error) {
        console.log(result.error);
      }

      queryClient.invalidateQueries({ queryKey: [queryKey] });

      toast.success(successMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });

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
