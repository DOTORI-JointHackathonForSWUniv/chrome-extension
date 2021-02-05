"Drink Responsibly, Blackmagic lives here.";

/**
 * Inject custom script to main page's document.head.
 * Used for bypassing Chrome Extension's Content-Scripts Sandbox.
 */
/**
 * @param {{type?: string, src?: string, text?: string}} content
 * @see Microsoft/vscode#22980, "JSDoc comments are ignored for destructured parameters".
 * @see Microsoft/typescript#11597, "Intellisense for object properties defined in multi-line JSDOC comments".
 */
function __inject__({ type, src, text }) {
    if (src === undefined && text === undefined) return;
    const _ = document.createElement("script");
    _.async = true;
    if (type !== undefined) _.type = type;
    if (src !== undefined) _.src = src;
    if (text !== undefined) _.appendChild(document.createTextNode(text));
    if (document.head) {
        document.head.appendChild(_);
    } else {
        // XXX: Used for `run_at: document_start`.
        document.documentElement.appendChild(_);
    }
}
