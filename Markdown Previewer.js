function convertMarkdownToHTML(markdown) {
    markdown = markdown.replace(/^#\s(.*)$/gm, '<h1>$1</h1>');
    markdown = markdown.replace(/^##\s(.*)$/gm, '<h2>$1</h2>');
    markdown = markdown.replace(/^###\s(.*)$/gm, '<h3>$1</h3>');
    return markdown;
}

document.addEventListener('DOMContentLoaded', function() {
    const editorContent = document.getElementById('editorContent');
    const previewerContent = document.getElementById('previewerContent');
    document.getElementById('editor').addEventListener('input', function() {
        // Lấy nội dung từ phần editor
        const markdown = editorContent.innerText;
        previewerContent.innerHTML = convertMarkdownToHTML(markdown);
    });
});