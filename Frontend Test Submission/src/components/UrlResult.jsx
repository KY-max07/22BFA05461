const UrlResult = ({ results }) => (
  <div className="mt-6 space-y-4">
    {results.map((item, idx) => (
      <div key={idx} className="bg-gray-100 p-4 rounded shadow">
        <p><strong>Original:</strong> {item.original}</p>
        <p><strong>Shortened:</strong> <a className="text-blue-600" href={item.short} target="_blank" rel="noreferrer">{item.short}</a></p>
        <p><strong>Expires At:</strong> {item.expiry || "∞"}</p>
      </div>
    ))}
  </div>
);

export default UrlResult;
