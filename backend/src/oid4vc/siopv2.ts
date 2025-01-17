/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "oid4vc";

export interface SIOPV2RequestConfig {
  nonce?: string | undefined;
  state?: string | undefined;
}

export interface SIOPV2Request {
  uri: string;
  request: string;
}

export const OID4VC_PACKAGE_NAME = "oid4vc";

export interface SIOPV2Client {
  createRequest(request: SIOPV2RequestConfig): Observable<SIOPV2Request>;
}

export interface SIOPV2Controller {
  createRequest(request: SIOPV2RequestConfig): Promise<SIOPV2Request> | Observable<SIOPV2Request> | SIOPV2Request;
}

export function SIOPV2ControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createRequest"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("SIOPV2", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("SIOPV2", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const S_IO_PV2_SERVICE_NAME = "SIOPV2";
