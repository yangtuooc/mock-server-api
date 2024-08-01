declare namespace API {
  type ApiTag = {
    /** 对应openapi的tag，通常是一个controller */
    name?: string;
    /** tag的描述 */
    description?: string;
  };

  type Application = {
    createdAt?: string;
    updatedAt?: string;
    id: string;
    name?: string;
    endpoint?: string;
    description?: string;
    enabled: boolean;
    apiSetting?: OpenApiSetting;
    environments: ApplicationEnvironment[];
  };

  type ApplicationEdit = {
    /** 应用名称 */
    name: string;
    /** 应用描述 */
    description: string;
  };

  type ApplicationEnvironment = {
    createdAt?: string;
    updatedAt?: string;
    id: string;
    application?: Application;
    name?: string;
    value?: string;
    desc?: string;
    enabled: boolean;
  };

  type ApplicationEnvironmentView = {
    /** 变量名 */
    name: string;
    /** 变量值 */
    value: string;
    /** 变量ID */
    id: string;
    /** 变量描述 */
    desc: string;
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

  type findApplicationApiListParams = {
    /** 应用ID */
    id: any;
  };

  type findApplicationEnvironmentsParams = {
    /** 应用ID */
    id: any;
  };

  type findApplicationSchemasParams = {
    id: string;
    pageable: Pageable;
  };

  type findApplicationsParams = {
    pageable: Pageable;
  };

  type findOpenApiSettingParams = {
    id: string;
  };

  type getApplicationParams = {
    id: string;
  };

  type getSchemaModelParams = {
    id: Application;
    hash: string;
  };

  type JsonNode = true;

  type OpenApiSetting = {
    createdAt?: string;
    updatedAt?: string;
    id: string;
    app?: Application;
    loadMode: 'FILE' | 'URL';
    url?: string;
    file?: JsonNode;
    cache?: JsonNode;
    autoUpdate: boolean;
    cron?: string;
    enabled: boolean;
    isFileMode: boolean;
  };

  type OpenApiSettingEdit = {
    /** 加载模式 URL: 从URL加载, FILE: 从文件加载 */
    loadMode: 'FILE' | 'URL';
    /** URL URL加载模式下的URL */
    url?: string;
    file?: JsonNode;
    /** 自动更新 是否自动更新 */
    autoUpdate: boolean;
    /** CRON表达式 CRON表达式 */
    cron?: string;
  };

  type Pageable = {
    page?: number;
    size?: number;
    sort?: string[];
  };

  type PagedModel = {
    content?: Record<string, any>[];
    page?: PageMetadata;
  };

  type PageMetadata = {
    size?: number;
    number?: number;
    totalElements?: number;
    totalPages?: number;
  };

  type SchemaModel = {
    jsonSchema?: JsonNode;
    mockSchema?: JsonNode;
  };

  type setOpenApiParams = {
    /** 应用ID */
    id: any;
  };

  type switchStatusParams = {
    /** 应用ID */
    id: any;
  };

  type syncApiDocParams = {
    /** 应用ID */
    id: any;
  };
}
