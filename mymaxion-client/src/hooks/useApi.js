import { useEffect, useState } from 'react';

export default function useApi(request, dependencies = []) {
  const [state, setState] = useState({ data: null, loading: true, error: '' });

  useEffect(() => {
    let active = true;

    request()
      .then((data) => {
        if (active) setState({ data, loading: false, error: '' });
      })
      .catch((error) => {
        if (active) {
          setState({
            data: null,
            loading: false,
            error: error.response?.data?.error || error.response?.data?.message || 'Unable to load data.',
          });
        }
      });

    return () => {
      active = false;
    };
  }, dependencies);

  return state;
}
