import React from "react";

const Recommendations = () => (
  <section className="bg-white rounded-lg shadow p-6 mb-6">
    <h2 className="text-2xl font-bold mb-2">Recommendations</h2>
    <div className="mb-4">
      <h3 className="font-semibold">Book</h3>
      <p className="text-gray-700">"The Hard Thing About Hard Things" by Ben Horowitz</p>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold">Article</h3>
      <p className="text-gray-700">"How Great Leaders Inspire Action" - Harvard Business Review</p>
    </div>
    <div>
      <h3 className="font-semibold">Podcast</h3>
      <p className="text-gray-700">"Masters of Scale" with Reid Hoffman</p>
    </div>
  </section>
);

export default Recommendations; 