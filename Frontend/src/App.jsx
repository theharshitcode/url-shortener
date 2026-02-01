// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [url, setUrl] = useState('');
//   const [shortenedUrl, setShortenedUrl] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setShortenedUrl('');

//     if (!url) {
//       setError('Please enter a URL');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/url', { originalUrl: url });
//       setShortenedUrl(response.data.shorturl);
//     } catch (err) {
//       setError('Failed to shorten URL. Please try again.');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>URL Shortener</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="url"
//             placeholder="Enter URL to shorten"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//           />
//           <button type="submit">Shorten</button>
//         </form>
//         {shortenedUrl && (
//           <div className="result">
//             <p>Shortened URL:</p>
//             <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
//               {shortenedUrl}
//             </a>
//           </div>
//         )}
//         {error && <p className="error">{error}</p>}
//       </header>
//     </div>
//   );
// }

// export default App;



import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortenedUrl("");
    setCopied(false);

    if (!url) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/url", {
        originalUrl: url,
      });
      setShortenedUrl(response.data.shorturl);
    } catch (err) {
      setError("Failed to shorten URL. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🔗 URL Shortener</h1>
        <p className="subtitle">
          Paste a long URL and get a short, shareable link
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {shortenedUrl && (
          <div className="result">
            <span>{shortenedUrl}</span>
            <button onClick={handleCopy}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

