declare namespace API {
  type ApplicationEdit = {
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

  type findOpenApiSettingParams = {
    id: string;
  };

  type getApplicationParams = {
    id: string;
  };

  type JsonNode = true;

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

  type setOpenApiParams = {
    /** 应用ID */
    id: any;
  };

  type switchStatusParams = {
    /** 应用ID */
    id: any;
  };
}
