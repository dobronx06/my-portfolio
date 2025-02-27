import React, { useState, useRef } from 'react';
import { Upload, Code, Cpu, XCircle } from 'lucide-react';
import './RickComponent.css';

const RickCodeFixer = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const rickQuotes = [
    "*burp* Loading your pathetic code...",
    "Time to show you how we code in dimension C-137!",
    "What kind of Jerry wrote this?",
    "Processing... *burp* This might take a while in this dimension.",
  ];

  const getRandomQuote = () => {
    return rickQuotes[Math.floor(Math.random() * rickQuotes.length)];
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const content = await file.text();
      setCode(content);
      setError('');
    } catch (err) {
      setError("*burp* Can't read this file. What dimension is it from?");
    }
  };

  const handleAnalyze = async () => {
    if (!code.trim()) {
      setError("*burp* Hey genius, you need to provide some code first!");
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) throw new Error('Server error');
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("*burp* The server's acting like Jerry! Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rick-container">
      {/* Header */}
      <div className="rick-header">
        <h1 className="rick-title">Rick's Interdimensional Code Fixer</h1>
        <Cpu className={`h-8 w-8 text-white ${loading ? 'rick-loading' : ''}`} />
      </div>

      {/* File Upload */}
      <div className="rick-upload-zone">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".py,.js,.go,.java,.cpp"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="rick-upload-button"
        >
          <Upload className="h-5 w-5" />
          Upload Code File
        </button>
        <p className="text-gray-500">*burp* Drag and drop your garbage code here, or click to upload</p>
      </div>

      {/* Code Editor */}
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="// Paste your code here, Morty!"
          className="rick-code-editor"
        />
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="rick-analyze-button absolute bottom-4 right-4"
        >
          <Code className="h-5 w-5" />
          {loading ? getRandomQuote() : "Analyze Code"}
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="rick-error">
          <XCircle className="h-4 w-4" />
          <p>{error}</p>
        </div>
      )}

      {/* Results Display */}
      {result && (
        <div className="rick-results">
          <div className="rick-results-header">
            <h2 className="text-xl font-bold text-green-400">Analysis Results</h2>
            <p className="text-green-400">Language: {result.language}</p>
            <p className="text-green-400">Error Type: {result.error_type}</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-green-400">Original Garbage:</h3>
            <pre className="rick-code-block">
              {result.original_code}
            </pre>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-green-400">Superior Solution:</h3>
            <pre className="rick-code-block">
              {result.fixed_code}
            </pre>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-green-400">Rick's Explanation:</h3>
            <p className="text-green-400 whitespace-pre-wrap">{result.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RickCodeFixer;