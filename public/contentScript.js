__inject__({
    type: "text/javascript",
    text: `(${String(__inject__)})({
		type: 'module',
		src: '${chrome.runtime.getURL("real_content_script.js")}',
	})`,
});

const onExtensionMessage = (message, sender, sendResponse) => {
    if (!message || !message.type) return;
    document.dispatchEvent(
        new CustomEvent("onMyExtensionMessage", { detail: message })
    );
};

chrome.runtime.onMessage.addListener(onExtensionMessage);

document.addEventListener("onMyWebpageMessage", function (e) {
    const data = e.detail;
    if (!data) return;
    chrome.runtime.sendMessage({
        type: "export_response",
        source: "content_script.js",
        data,
    });
});
