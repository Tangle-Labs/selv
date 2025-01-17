import { Module } from '@nestjs/common';

import { join } from 'path';

import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { OID4VCIService, OID4VPService, SIOPV2Service } from './oid4vc.service';
import { OID4VC_PACKAGE_NAME } from './siopv2';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';

@Module({
  imports: [ConfigModule.forFeature(configuration)], //TODO: figure out https://docs.nestjs.com/fundamentals/dynamic-modules#config-module-example
  controllers: [],
  providers: [
    SIOPV2Service,
    OID4VPService,
    OID4VCIService,
    {
      provide: OID4VC_PACKAGE_NAME,
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: ['oid4vc'],
            url: configService.getOrThrow('oid4vc_grpc_service_url'),
            protoPath: [
              join(
                configService.getOrThrow('oid4vc_grpc_service_protopath'),
                'siopv2.proto',
              ),
              join(
                configService.getOrThrow('oid4vc_grpc_service_protopath'),
                'oid4vp.proto',
              ),
              join(
                configService.getOrThrow('oid4vc_grpc_service_protopath'),
                'oid4vci.proto',
              ),
            ],
          },
        }),
      inject: [ConfigService],
    },
  ],
  exports: [SIOPV2Service, OID4VPService, OID4VCIService],
})
export class OID4VCModule {}
