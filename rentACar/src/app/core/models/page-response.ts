export interface PageResponse<TListItemDto>{
    
    pageSize: number;
    pageIndex: number;
    count: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    items: TListItemDto[];
}
