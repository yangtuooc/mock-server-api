declare namespace API {
  type Application = {
    createdAt?: string;
    updatedAt?: string;
    id: string;
    name?: string;
    endpoint?: string;
    description?: string;
    enabled: boolean;
    schemaDescriptions: SchemaDescription[];
  };

  type ApplicationCreate = {
    /** 应用名称 */
    name: string;
    /** 应用描述 */
    description: string;
  };

  type ApplicationView = {
    /** 应用名称 */
    name: string;
    /** 应用ID */
    id: string;
    /** 创建时间 */
    createdAt: string;
    /** 应用是否启用 */
    enabled: boolean;
    /** 应用端点 */
    endpoint: string;
    /** 应用描述 */
    description: string;
  };

  type findApplicationSchemasParams = {
    id: string;
    pageable: Pageable;
  };

  type findApplicationsParams = {
    pageable: Pageable;
  };

  type getApplicationParams = {
    id: string;
  };

  type HttpMethod = true;

  type JsonNode = true;

  type Pageable = {
    page?: number;
    size?: number;
    sort?: string[];
  };

  type PageableObject = {
    offset?: number;
    sort?: SortObject[];
    pageNumber?: number;
    pageSize?: number;
    unpaged?: boolean;
    paged?: boolean;
  };

  type PageApplicationView = {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ApplicationView[];
    number?: number;
    sort?: SortObject[];
    pageable?: PageableObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
  };

  type PageSchemaView = {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: SchemaView[];
    number?: number;
    sort?: SortObject[];
    pageable?: PageableObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
  };

  type SchemaDescription = {
    createdAt?: string;
    updatedAt?: string;
    id: string;
    app?: Application;
    tag?: string;
    summary?: string;
    description?: string;
    path?: string;
    httpMethod?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    requestSchema?: JsonNode;
    responseSchema?: JsonNode;
    enabled: boolean;
  };

  type SchemaView = {
    /** schema 名称 */
    name: string;
    /** id */
    id: string;
    /** schema 路径 */
    path: string;
    httpMethod: HttpMethod;
    /** schema 是否启用 */
    enabled: boolean;
    /** schema 描述 */
    description?: string;
  };

  type SortObject = {
    direction?: string;
    nullHandling?: string;
    ascending?: boolean;
    property?: string;
    ignoreCase?: boolean;
  };

  type switchStatusParams = {
    id: Application;
  };
}
