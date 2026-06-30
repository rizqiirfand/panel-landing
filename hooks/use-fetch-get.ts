import React, { useState } from "react";

const useFetchGet = <T extends (...args: any[]) => Promise<any>>(api: T) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  return {
    isFetching,
    fetchGet: async (...param: Parameters<T>) => {
      setIsFetching(true);
      const res = await api(...param);
      setIsFetching(false);
      return res;
    },
  };
};

export default useFetchGet;
