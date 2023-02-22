import { ApiCall } from "tsrpc"
import { ReqHomeNav, ResHomeNav } from "../../shared/protocols/user/PtlHomeNav"

export default async function (call: ApiCall<ReqHomeNav, ResHomeNav>) {
  call.succ({
    id: 1,
    title: "navImage",
    img: "xxxxxxxx",
  })
}
