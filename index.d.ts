// Type definitions for Glue 4.1.0
// Project: https://github.com/hapijs/glue
// Definitions by: San Nguyen <https://github.com/sandangel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="hapi" />

import Hapi = require('hapi');

interface IGlueManifest {
  server: Hapi.IServerOptions;
  connections: Hapi.IServerConnectionOptions;
  registrations: Hapi.IDictionary<any>;
}

interface IGlueManifestOptions {
  relativeTo?: string;
  preConnections?: (server: Hapi.Server, next: () => void) => void;
  preRegister?: (server: Hapi.Server, next: () => void) => void;
}

/**
 *
 *
 * @param {IGlueManifest} manifest
 * @param {IGlueManifestOptions} options
 * @param {(err: any, server: Hapi.Server) => void} callback
 * @returns {*}
 */
declare function compose(
    manifest: IGlueManifest, options: IGlueManifestOptions,
    callback: (err: any, server: Hapi.Server) => void): any;

    /**
     *
     *
     * @param {IGlueManifest} manifest
     * @param {IGlueManifestOptions} options
     * @returns {Hapi.IPromise<any>}
     */
    declare function compose(
        manifest: IGlueManifest,
        options: IGlueManifestOptions): Hapi.IPromise<any>;

    /**
     *
     *
     * @param {IGlueManifest} manifest
     * @returns {Hapi.IPromise<any>}
     */
    declare function compose(manifest: IGlueManifest): Hapi.IPromise<any>;

    /**
     *
     *
     * @param {IGlueManifest} manifest
     * @param {(err: any, server: Hapi.Server) => void} callback
     * @returns {*}
     */
    declare function compose(
        manifest: IGlueManifest,
        callback: (err: any, server: Hapi.Server) => void): any;
