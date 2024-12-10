'use client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { AuthenticationContextProvider } from '@/contexts/AuthenticationContext';

// console.log({ theme });

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 60 * 1000, // 60 Seconds
            staleTime: 10 * 1000, // 10 Seconds
          },
        },
      })
  );
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
