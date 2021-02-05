document.addEventListener("onMyExtensionMessage", function (e) {
    const message = e.detail;
    if (!message || !message.type) return;
    if (message.source !== "popup.js") return;
    if (message.type === "export_request") {
        const data = Entry.exportProject();
        document.dispatchEvent(
            new CustomEvent("onMyWebpageMessage", { detail: data })
        );
    }
});
