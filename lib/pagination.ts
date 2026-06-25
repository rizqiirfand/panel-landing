export type PaginationResponseMetaType = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
type PaginationResponseType<T> = {
  data: T[];
  meta: PaginationResponseMetaType;
};
export function paginateResponse<T>(
  data: T[],
  totalItems: number,
  page: number,
  perPage: number,
): PaginationResponseType<T> {
  const totalPages = Math.ceil(totalItems / perPage);

  return {
    data,
    meta: {
      page,
      perPage,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
}
