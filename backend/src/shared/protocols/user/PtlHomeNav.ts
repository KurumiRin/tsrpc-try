import { BaseRequest, BaseResponse, BaseConf } from "../base"

export interface ReqHomeNav extends BaseRequest {}

export interface ResHomeNav extends BaseResponse {
  id: number
  title?: string
  img: string
}

export const conf: BaseConf = {}
