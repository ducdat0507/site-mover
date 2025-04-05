if (window.top == window)
    window.location.href = "//ducdat0507.github.io";

window.addEventListener("message", (e) => {
    if (e.origin != "https://ducdat0507.github.io") return;
    let source = e.source;
    let data = e.data;
    let type = e.data?.type;
    if (type == "duducat-set-local-storage") {
        localStorage.setItem(data.key, data.value);
        source.postMessage({
            type: "duducat-set-local-storage",
            key: data.key,
            success: true,
        }, {
            targetOrigin: "https://ducdat0507.github.io"
        })
    }
});