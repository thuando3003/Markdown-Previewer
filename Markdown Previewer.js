document.addEventListener("DOMContentLoaded", function() {
    const editorContent = document.getElementById("editorContent");
    const previewerContent = document.getElementById("previewerContent");

    editorContent.addEventListener("input", function() {
        const markdownText = editorContent.innerText;
        const htmlText = marked(markdownText);
        previewerContent.innerHTML = htmlText;
    });
});
