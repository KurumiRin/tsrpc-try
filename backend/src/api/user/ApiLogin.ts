import { ApiCall } from "tsrpc"
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin"

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
  if (call.req.username == "rin" && call.req.password === "123") {
    call.succ({
      user: {
        id: 1,
      },
    })
    return
  }
  call.error("用户名密码不对")
}
