import { ServiceProto } from "tsrpc-proto"
import { ReqHomeNav, ResHomeNav } from "./user/PtlHomeNav"
import { ReqLogin, ResLogin } from "./user/PtlLogin"

export interface ServiceType {
  api: {
    "user/HomeNav": {
      req: ReqHomeNav
      res: ResHomeNav
    }
    "user/Login": {
      req: ReqLogin
      res: ResLogin
    }
  }
  msg: {}
}

export const serviceProto: ServiceProto<ServiceType> = {
  version: 3,
  services: [
    {
      id: 2,
      name: "user/HomeNav",
      type: "api",
      conf: {},
    },
    {
      id: 3,
      name: "user/Login",
      type: "api",
      conf: {},
    },
  ],
  types: {
    "user/PtlHomeNav/ReqHomeNav": {
      type: "Interface",
      extends: [
        {
          id: 0,
          type: {
            type: "Reference",
            target: "base/BaseRequest",
          },
        },
      ],
    },
    "base/BaseRequest": {
      type: "Interface",
    },
    "user/PtlHomeNav/ResHomeNav": {
      type: "Interface",
      extends: [
        {
          id: 0,
          type: {
            type: "Reference",
            target: "base/BaseResponse",
          },
        },
      ],
      properties: [
        {
          id: 0,
          name: "id",
          type: {
            type: "Number",
          },
        },
        {
          id: 1,
          name: "title",
          type: {
            type: "String",
          },
          optional: true,
        },
        {
          id: 2,
          name: "img",
          type: {
            type: "String",
          },
        },
      ],
    },
    "base/BaseResponse": {
      type: "Interface",
    },
    "user/PtlLogin/ReqLogin": {
      type: "Interface",
      extends: [
        {
          id: 0,
          type: {
            type: "Reference",
            target: "base/BaseRequest",
          },
        },
      ],
      properties: [
        {
          id: 0,
          name: "username",
          type: {
            type: "String",
          },
        },
        {
          id: 1,
          name: "password",
          type: {
            type: "String",
          },
        },
      ],
    },
    "user/PtlLogin/ResLogin": {
      type: "Interface",
      extends: [
        {
          id: 0,
          type: {
            type: "Reference",
            target: "base/BaseResponse",
          },
        },
      ],
      properties: [
        {
          id: 0,
          name: "user",
          type: {
            type: "Interface",
            properties: [
              {
                id: 0,
                name: "id",
                type: {
                  type: "Number",
                },
              },
            ],
          },
        },
      ],
    },
  },
}
