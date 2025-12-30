import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles?.slice(0, 12) || []);
      } catch (error) {
        console.error('Failed to fetch news:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">
        Latest <span className="badge bg-danger">{category.charAt(0).toUpperCase() + category.slice(1)} News</span>
      </h2>

      {loading && <p className="text-center">Loading...</p>}
      {!loading && articles.length === 0 && <p className="text-center">No articles found.</p>}

      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {!loading &&
          articles.map((news, index) => (
            <NewsItems
              key={news.url || index}
              title={news.title || 'No title available'}
              description={news.description || 'No description available'}
              src={news.urlToImage || 'https://via.placeholder.com/345x200?text=No+Image'}
              url={news.url}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsBoard;
