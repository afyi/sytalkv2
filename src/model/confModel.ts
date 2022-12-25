/**
 * 配置文件的结构体
 */
export interface confModel {
  appId: string,
  appKey: string,
  serverURL: string,
  pageSize: number,
  emojiServer: string,
  bgImg: string,
  cssUrl: string,
  shuoPla: string,
  avatarUrl: string,
  osName: {[key: string]: string},
  isZan: number,
  zanIntval: number,
  onLoad(): void,
  onLogin(): void,
  onPublished: void,
}