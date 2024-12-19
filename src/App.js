import React, { useState, useEffect } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Markdown default untuk di-load saat pertama kali
    const defaultMarkdown = `
# Heading 1
## Heading 2
[Google](https://www.google.com)
\`kode inline\`
\`\`\`javascript
console.log('Blok kode');
\`\`\`
- Item daftar 1
- Item daftar 2
> Blockquote
![Gambar](https://via.placeholder.com/150)
**Teks Tebal**
    `;
    setMarkdown(defaultMarkdown);
  }, []);

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Editor</h2>
            <textarea
              id="editor"
              className="form-control"
              rows="20"
              value={markdown}
              onChange={handleEditorChange}
            />
          </div>
          <div className="col-6">
            <h2>Preview</h2>
            <div
              id="preview"
              className="preview"
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
