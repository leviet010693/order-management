import {
  QueryClientProvider,
  MutationCache,
  QueryClient,
  matchQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    },
  },
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      if (_data?.isSuccess) {
        queryClient.invalidateQueries({
          predicate: (query) => {
            return (
              mutation?.meta?.invalidates?.some((queryKey) =>
                matchQuery({ queryKey }, query)
              ) ?? false
            );
          },
        });
      }
    },
  }),
});

const Provider__Query = (props) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider__Query;
