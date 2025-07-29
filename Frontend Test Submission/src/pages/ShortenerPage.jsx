import { useState } from "react";
import UrlForm from "../components/UrlForm";
import UrlResult from "../components/UrlResult";

const ShortenerPage = () => {
  const [results, setResults] = useState([]);

  const handleFormSubmit = async (urls) => {
    // Replace with your backend API call
    const response = urls.map((url, index) => ({
      original: url.longUrl,
      short: `https://sho.rt/${url.shortcode || "auto" + index}`,
      expiry: url.validity ? `${url.validity} minutes` : null,
    }));
    setResults(response);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">URL Shortener</h1>
      <UrlForm onSubmit={handleFormSubmit} />
      <UrlResult results={results} />
    </div>
  );
};

export default ShortenerPage;
