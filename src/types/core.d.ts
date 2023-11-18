export default Strophe;
/**
 * A container for all Strophe library functions.
 *
 * This object is a container for all the objects and constants
 * used in the library.  It is not meant to be instantiated, but to
 * provide a namespace for library objects, constants, and functions.
 *
 * @namespace Strophe
 * @property {Handler} Handler
 * @property {Builder} Builder
 * @property {Request} Request Represents HTTP Requests made for a BOSH connection
 * @property {Bosh} Bosh Support for XMPP-over-HTTP via XEP-0124 (BOSH)
 * @property {Websocket} Websocket Support for XMPP over websocket
 * @property {WorkerWebsocket} WorkerWebsocket Support for XMPP over websocket in a shared worker
 * @property {number} TIMEOUT=1.1 Timeout multiplier. A waiting BOSH HTTP request
 *  will be considered failed after Math.floor(TIMEOUT * wait) seconds have elapsed.
 *  This defaults to 1.1, and with default wait, 66 seconds.
 * @property {number} SECONDARY_TIMEOUT=0.1 Secondary timeout multiplier.
 *  In cases where Strophe can detect early failure, it will consider the request
 *  failed if it doesn't return after `Math.floor(SECONDARY_TIMEOUT * wait)`
 *  seconds have elapsed. This defaults to 0.1, and with default wait, 6 seconds.
 * @property {SASLAnonymous} SASLAnonymous SASL ANONYMOUS authentication.
 * @property {SASLPlain} SASLPlain SASL PLAIN authentication
 * @property {SASLSHA1} SASLSHA1 SASL SCRAM-SHA-1 authentication
 * @property {SASLSHA256} SASLSHA256 SASL SCRAM-SHA-256 authentication
 * @property {SASLSHA384} SASLSHA384 SASL SCRAM-SHA-384 authentication
 * @property {SASLSHA512} SASLSHA512 SASL SCRAM-SHA-512 authentication
 * @property {SASLOAuthBearer} SASLOAuthBearer SASL OAuth Bearer authentication
 * @property {SASLExternal} SASLExternal SASL EXTERNAL authentication
 * @property {SASLXOAuth2} SASLXOAuth2 SASL X-OAuth2 authentication
 * @property {Status} Status
 * @property {Object.<string, string>} NS
 * @property {XHTML} XHTML
 */
declare const Strophe: {
    XHTML: {
        validTag: typeof utils.validTag;
        validCSS: typeof utils.validCSS;
        validAttribute: typeof utils.validAttribute;
        tags: string[];
        attributes: {
            a: string[];
            blockquote: string[];
            br: never[];
            cite: string[];
            em: never[];
            img: string[];
            li: string[];
            ol: string[];
            p: string[];
            span: string[];
            strong: never[];
            /** @constant: VERSION */
            ul: string[];
            body: never[];
        };
        css: string[];
    };
    /**
     * This function is used to extend the current namespaces in
     * Strophe.NS. It takes a key and a value with the key being the
     * name of the new namespace, with its actual value.
     * @example: Strophe.addNamespace('PUBSUB', "http://jabber.org/protocol/pubsub");
     *
     * @param {string} name - The name under which the namespace will be
     *     referenced under Strophe.NS
     * @param {string} value - The actual namespace.
     */
    addNamespace(name: string, value: string): void;
    /**
     * _Private_ function that properly logs an error to the console
     * @private
     * @param {Error} e
     */
    _handleError(e: Error): void;
    /**
     * User overrideable logging function.
     *
     * This function is called whenever the Strophe library calls any
     * of the logging functions.  The default implementation of this
     * function logs only fatal errors.  If client code wishes to handle the logging
     * messages, it should override this with
     * > Strophe.log = function (level, msg) {
     * >   (user code here)
     * > };
     *
     * Please note that data sent and received over the wire is logged
     * via {@link Strophe.Connection#rawInput|Strophe.Connection.rawInput()}
     * and {@link Strophe.Connection#rawOutput|Strophe.Connection.rawOutput()}.
     *
     * The different levels and their meanings are
     *
     *   DEBUG - Messages useful for debugging purposes.
     *   INFO - Informational messages.  This is mostly information like
     *     'disconnect was called' or 'SASL auth succeeded'.
     *   WARN - Warnings about potential problems.  This is mostly used
     *     to report transient connection errors like request timeouts.
     *   ERROR - Some error occurred.
     *   FATAL - A non-recoverable fatal error occurred.
     *
     * @param {number} level - The log level of the log message.
     *     This will be one of the values in Strophe.LogLevel.
     * @param {string} msg - The log message.
     */
    log(level: number, msg: string): void;
    /**
     * Log a message at the Strophe.LogLevel.DEBUG level.
     * @param {string} msg - The log message.
     */
    debug(msg: string): void;
    /**
     * Log a message at the Strophe.LogLevel.INFO level.
     * @param {string} msg - The log message.
     */
    info(msg: string): void;
    /**
     * Log a message at the Strophe.LogLevel.WARN level.
     * @param {string} msg - The log message.
     */
    warn(msg: string): void;
    /**
     * Log a message at the Strophe.LogLevel.ERROR level.
     * @param {string} msg - The log message.
     */
    error(msg: string): void;
    /**
     * Log a message at the Strophe.LogLevel.FATAL level.
     * @param {string} msg - The log message.
     */
    fatal(msg: string): void;
    /**
     * _Private_ variable that keeps track of the request ids for connections.
     * @private
     */
    _requestId: number;
    /**
     * _Private_ variable Used to store plugin names that need
     * initialization on Strophe.Connection construction.
     * @private
     * @type {Object.<string, Object>}
     */
    _connectionPlugins: {
        [x: string]: Object;
    };
    /**
     * Extends the Strophe.Connection object with the given plugin.
     * @param {string} name - The name of the extension.
     * @param {Object} ptype - The plugin's prototype.
     */
    addConnectionPlugin(name: string, ptype: Object): void;
    utf16to8(str: string): string;
    xorArrayBuffers(x: ArrayBufferLike, y: ArrayBufferLike): ArrayBufferLike;
    arrayBufToBase64(buffer: ArrayBufferLike): string;
    base64ToArrayBuf(str: string): ArrayBufferLike;
    stringToArrayBuf(str: string): ArrayBufferLike;
    addCookies(cookies: {
        [x: string]: string;
    } | {
        [x: string]: {
            [x: string]: string;
        };
    }): void;
    xmlGenerator(): Document;
    xmlTextNode(text: string): Text;
    xmlHtmlNode(html: string): XMLDocument;
    xmlElement(name: string, attrs?: string | number | string[][] | {
        [x: string]: string | number;
    }, text?: string | number): Element;
    validTag(tag: string): boolean;
    validAttribute(tag: string, attribute: string): boolean;
    validCSS(style: string): boolean;
    createHtml(node: Node): Node;
    copyElement(node: Node): Element | Text;
    xmlescape(text: string): string;
    xmlunescape(text: string): string;
    serialize(elem: Builder | Element): string;
    forEachChild(elem: Element, elemName: string, func: Function): void;
    isTagEqual(el: Element, name: string): boolean;
    getText(elem: Element): string;
    escapeNode(node: string): string;
    unescapeNode(node: string): string;
    getNodeFromJid(jid: string): string;
    getDomainFromJid(jid: string): string;
    getResourceFromJid(jid: string): string;
    getBareJidFromJid(jid: string): string;
    default: {
        utf16to8: typeof utils.utf16to8;
        xorArrayBuffers: typeof utils.xorArrayBuffers;
        arrayBufToBase64: typeof utils.arrayBufToBase64;
        base64ToArrayBuf: typeof utils.base64ToArrayBuf;
        stringToArrayBuf: typeof utils.stringToArrayBuf;
        addCookies: typeof utils.addCookies;
    };
    /** @constant: VERSION */
    VERSION: string;
    TIMEOUT: number;
    SECONDARY_TIMEOUT: number;
    shims: typeof shims;
    Request: typeof Request;
    Bosh: typeof Bosh;
    Websocket: typeof Websocket;
    WorkerWebsocket: typeof WorkerWebsocket;
    SASLAnonymous: typeof SASLAnonymous;
    SASLPlain: typeof SASLPlain;
    SASLSHA1: typeof SASLSHA1;
    SASLSHA256: typeof SASLSHA256;
    SASLSHA384: typeof SASLSHA384;
    SASLSHA512: typeof SASLSHA512;
    SASLOAuthBearer: typeof SASLOAuthBearer;
    SASLExternal: typeof SASLExternal;
    SASLXOAuth2: typeof SASLXOAuth2;
    Builder: typeof Builder;
    Connection: typeof Connection;
    ElementType: {
        NORMAL: number;
        TEXT: number;
        CDATA: number;
        FRAGMENT: number;
    };
    ErrorCondition: {
        BAD_FORMAT: string;
        CONFLICT: string;
        MISSING_JID_NODE: string;
        NO_AUTH_MECH: string;
        UNKNOWN_REASON: string;
    };
    Handler: typeof Handler;
    LogLevel: {
        DEBUG: number;
        INFO: number;
        WARN: number;
        ERROR: number;
        FATAL: number;
    };
    /** @type {Object.<string, string>} */
    NS: {
        [x: string]: string;
    };
    SASLMechanism: typeof SASLMechanism;
    /** @type {Status} */
    Status: Status;
    TimedHandler: typeof TimedHandler;
};
import * as utils from './utils.js';
import Builder from './builder.js';
import * as shims from './shims.js';
import Request from './request.js';
import Bosh from './bosh.js';
import Websocket from './websocket.js';
import WorkerWebsocket from './worker-websocket.js';
import SASLAnonymous from './sasl-anon.js';
import SASLPlain from './sasl-plain.js';
import SASLSHA1 from './sasl-sha1.js';
import SASLSHA256 from './sasl-sha256.js';
import SASLSHA384 from './sasl-sha384.js';
import SASLSHA512 from './sasl-sha512.js';
import SASLOAuthBearer from './sasl-oauthbearer.js';
import SASLExternal from './sasl-external.js';
import SASLXOAuth2 from './sasl-xoauth2.js';
import Connection from './connection.js';
import Handler from './handler.js';
import SASLMechanism from './sasl.js';
import { Status } from './constants.js';
import TimedHandler from './timed-handler.js';
//# sourceMappingURL=core.d.ts.map