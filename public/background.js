const onExtensionMessage = (message, sender, sendResponse) => {
    if (!message || !message.type) return;
    if (message.source !== "content_script.js") return;

    if (message.type === "export_response") {
        chrome.storage.local.set(
            { export_response_display: message.data },
            () => {}
        );
    }
};

chrome.runtime.onMessage.addListener(onExtensionMessage);
