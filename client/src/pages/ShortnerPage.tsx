import { useState } from 'react';
import { shortenUrl } from '../services/api';

export default function ShortnerPage() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    try {
      setIsLoading(true);
      setError(null);
      setShortUrl(null);
      setIsCopied(false);
      
      const result = await shortenUrl(url);
      setShortUrl(result);
    } catch (err) {
      const error = err as { response?: { data?: { error?: string } } };
      setError(error.response?.data?.error || 'Failed to shorten URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="app-container">
      <h1 className="hero-title">NanoLink</h1>
      <p className="hero-subtitle">Shorten your long, messy links into neat, shareable URLs in seconds.</p>
      
      <div className="glass-card">
        <form className="url-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="url"
              className="url-input"
              placeholder="Paste your long URL here... (e.g. https://example.com/very/long/path)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            {error && <span className="error-msg">{error}</span>}
          </div>
          
          <button type="submit" className="submit-btn" disabled={isLoading || !url.trim()}>
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>

        {shortUrl && (  
          <div className="result-container">
            <span className="result-label">Your Shortened URL</span>
            <div className="result-actions">
              <a
                href={shortUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="short-url-link"
              >
                {shortUrl}
              </a>
              <button 
                className="copy-btn" 
                style={{ 
                  backgroundColor: isCopied ? '#10b981' : undefined
                }}
                onClick={handleCopy}
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
