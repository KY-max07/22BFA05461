
import React from "react";

function StatisticsPage({ data }) {
  if (!data) return null;

  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-xl font-bold mb-4">📊 URL Statistics</h2>
      <p><strong>Short URL:</strong> <a href={data.shortUrl} target="_blank" rel="noreferrer">{data.shortUrl}</a></p>
      <p><strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}</p>
      <p><strong>Expires At:</strong> {new Date(data.expiryAt).toLocaleString()}</p>
      <p><strong>Total Clicks:</strong> {data.totalClicks}</p>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Click Data:</h3>
        {data.clicks && data.clicks.length > 0 ? (
          <ul className="space-y-3">
            {data.clicks.map((click, idx) => (
              <li key={idx} className="border p-3 rounded">
                <p><strong>Time:</strong> {new Date(click.timestamp).toLocaleString()}</p>
                <p><strong>Source:</strong> {click.referrer || "Direct"}</p>
                <p><strong>Location:</strong> {click.location || "Unknown"}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No clicks recorded yet.</p>
        )}
      </div>
    </div>
  );
}

export default StatisticsPage;
