import { useState } from "react";

const UrlForm = ({ onSubmit }) => {
  const [urls, setUrls] = useState([
    { longUrl: "", validity: "", shortcode: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleAdd = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: "", validity: "", shortcode: "" }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = urls.every(u =>
      u.longUrl.startsWith("http://") || u.longUrl.startsWith("https://")
    );
    if (!isValid) return alert("Invalid URL format.");
    onSubmit(urls);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {urls.map((url, idx) => (
        <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Long URL"
            className="border p-2 rounded"
            value={url.longUrl}
            onChange={(e) => handleChange(idx, "longUrl", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Validity (minutes)"
            className="border p-2 rounded"
            value={url.validity}
            onChange={(e) => handleChange(idx, "validity", e.target.value)}
          />
          <input
            type="text"
            placeholder="Preferred Shortcode"
            className="border p-2 rounded"
            value={url.shortcode}
            onChange={(e) => handleChange(idx, "shortcode", e.target.value)}
          />
        </div>
      ))}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add URL
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Shorten URLs
        </button>
      </div>
    </form>
  );
};

export default UrlForm;
