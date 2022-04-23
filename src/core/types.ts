/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/13
 */

export type Identifier = string | number;


export interface UserIdentity {
    id: Identifier;
    fullName?: string;
    avatar?: string;
    [key: string]: any;
}

/**
 * authProvider types
 */
export type AuthProvider = {
    login: (params: any) => Promise<any>;
    logout: (params: any) => Promise<void | false | string>;
    checkAuth: (params: any) => Promise<void>;
    checkError: (error: any) => Promise<void>;
    getPermissions: (params: any) => Promise<any>;
    getIdentity?: () => Promise<UserIdentity | any>;
    [key: string]: any;
};

export interface Record {
    id: Identifier;
    [key: string]: any;
}
export interface RecordMap<RecordType = Record> {
    // Accept strings and numbers as identifiers
    [id: string]: RecordType;
    [id: number]: RecordType;
}

export interface PaginationPayload {
    page: number;
    perPage: number;
}
export interface SortPayload {
    field: string;
    order: string;
}
export interface FilterPayload {
    [k: string]: any;
}
export type ValidUntil = Date;

export interface GetListParams {
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: any;
}
export interface GetListResult<RecordType = Record> {
    data: RecordType[];
    total: number;
    validUntil?: ValidUntil;
}
export interface GetOneParams {
    id: Identifier;
}
export interface GetOneResult<RecordType = Record> {
    data: RecordType;
    validUntil?: ValidUntil;
}

export interface GetManyParams {
    ids: Identifier[];
}
export interface GetManyResult<RecordType = Record> {
    data: RecordType[];
    validUntil?: ValidUntil;
}

export interface GetManyReferenceParams {
    target: string;
    id: Identifier;
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: any;
}
export interface GetManyReferenceResult<RecordType = Record> {
    data: RecordType[];
    total: number;
    validUntil?: ValidUntil;
}

export interface UpdateParams<T = any> {
    id: Identifier;
    data: T;
    previousData: Record;
}
export interface UpdateResult<RecordType = Record> {
    data: RecordType;
    validUntil?: ValidUntil;
}

export interface UpdateManyParams<T = any> {
    ids: Identifier[];
    data: T;
}
export interface UpdateManyResult {
    data?: Identifier[];
    validUntil?: ValidUntil;
}

export interface CreateParams<T = any> {
    data: T;
}
export interface CreateResult<RecordType = Record> {
    data: RecordType;
    validUntil?: ValidUntil;
}

export interface DeleteParams {
    id: Identifier;
    previousData: Record;
}
export interface DeleteResult<RecordType = Record> {
    data?: RecordType;
}

export interface DeleteManyParams {
    ids: Identifier[];
}
export interface DeleteManyResult {
    data?: Identifier[];
}

export type DataProviderResult<RecordType = Record> =
    | CreateResult<RecordType>
    | DeleteResult<RecordType>
    | DeleteManyResult
    | GetListResult<RecordType>
    | GetManyResult<RecordType>
    | GetManyReferenceResult<RecordType>
    | GetOneResult<RecordType>
    | UpdateResult<RecordType>
    | UpdateManyResult;

export type MutationMode = 'pessimistic' | 'optimistic' | 'undoable';
export type OnSuccess = (response?: any) => void;
export type OnFailure = (error?: any) => void;

export interface UseDataProviderOptions {
    action?: string;
    fetch?: string;
    meta?: object;
    // @deprecated use mode: 'undoable' instead
    undoable?: boolean;
    mutationMode?: MutationMode;
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
    enabled?: boolean;
}

export type DataProviderProxy = {
    getList: <RecordType extends Record = Record>(
        resource: string,
        params: GetListParams,
        options?: UseDataProviderOptions
    ) => Promise<GetListResult<RecordType>>;

    getOne: <RecordType extends Record = Record>(
        resource: string,
        params: GetOneParams,
        options?: UseDataProviderOptions
    ) => Promise<GetOneResult<RecordType>>;

    getMany: <RecordType extends Record = Record>(
        resource: string,
        params: GetManyParams,
        options?: UseDataProviderOptions
    ) => Promise<GetManyResult<RecordType>>;

    getManyReference: <RecordType extends Record = Record>(
        resource: string,
        params: GetManyReferenceParams,
        options?: UseDataProviderOptions
    ) => Promise<GetManyReferenceResult<RecordType>>;

    update: <RecordType extends Record = Record>(
        resource: string,
        params: UpdateParams,
        options?: UseDataProviderOptions
    ) => Promise<UpdateResult<RecordType>>;

    updateMany: (
        resource: string,
        params: UpdateManyParams,
        options?: UseDataProviderOptions
    ) => Promise<UpdateManyResult>;

    create: <RecordType extends Record = Record>(
        resource: string,
        params: CreateParams,
        options?: UseDataProviderOptions
    ) => Promise<CreateResult<RecordType>>;

    delete: <RecordType extends Record = Record>(
        resource: string,
        params: DeleteParams,
        options?: UseDataProviderOptions
    ) => Promise<DeleteResult<RecordType>>;

    deleteMany: (
        resource: string,
        params: DeleteManyParams,
        options?: UseDataProviderOptions
    ) => Promise<DeleteManyResult>;

    [key: string]: any;
};

/**
 * dataProvider types
 */
export type DataProvider = {
    getList: <RecordType extends Record = Record>(
        resource: string,
        params: GetListParams
    ) => Promise<GetListResult<RecordType>>;

    getOne: <RecordType extends Record = Record>(
        resource: string,
        params: GetOneParams
    ) => Promise<GetOneResult<RecordType>>;

    getMany: <RecordType extends Record = Record>(
        resource: string,
        params: GetManyParams
    ) => Promise<GetManyResult<RecordType>>;

    getManyReference: <RecordType extends Record = Record>(
        resource: string,
        params: GetManyReferenceParams
    ) => Promise<GetManyReferenceResult<RecordType>>;

    update: <RecordType extends Record = Record>(
        resource: string,
        params: UpdateParams
    ) => Promise<UpdateResult<RecordType>>;

    updateMany: (
        resource: string,
        params: UpdateManyParams
    ) => Promise<UpdateManyResult>;

    create: <RecordType extends Record = Record>(
        resource: string,
        params: CreateParams
    ) => Promise<CreateResult<RecordType>>;

    delete: <RecordType extends Record = Record>(
        resource: string,
        params: DeleteParams
    ) => Promise<DeleteResult<RecordType>>;

    deleteMany: (
        resource: string,
        params: DeleteManyParams
    ) => Promise<DeleteManyResult>;

    [key: string]: any;
};


export interface ResourceDefinition {
    readonly name: string;
    readonly options?: any;
    readonly hasList?: boolean;
    readonly hasEdit?: boolean;
    readonly hasShow?: boolean;
    readonly hasCreate?: boolean;
    readonly icon?: any;
}


/**
 * Redux state type
 */
export interface ReduxState {
    admin: {
        ui: {
            automaticRefreshEnabled: boolean;
            optimistic: boolean;
            sidebarOpen: boolean;
            viewVersion: number;
        };
        resources: {
            [name: string]: {
                props: ResourceDefinition;
                data: RecordMap;
                list: {
                    cachedRequests?: {
                        ids: Identifier[];
                        total: number;
                        validity: Date;
                    };
                    expanded: Identifier[];
                    ids: Identifier[];
                    loadedOnce: boolean;
                    params: any;
                    selectedIds: Identifier[];
                    total: number;
                };
                validity: {
                    [key: string]: Date;
                    [key: number]: Date;
                };
            };
        };
        references: {
            oneToMany: {
                [relatedTo: string]: { ids: Identifier[]; total: number };
            };
        };
        loading: number;
        customQueries: {
            [key: string]: any;
        };
    };
    router: {
        location: Location;
    };

    // leave space for custom reducers
    [key: string]: any;
}
