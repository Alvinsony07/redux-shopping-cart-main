import React, { useMemo, useState } from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
    const [query, setQuery] = useState('');
    const [sortBy, setSortBy] = useState('featured');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = productsData.filter(p => p.title.toLowerCase().includes(q));
        switch (sortBy) {
            case 'price-asc':
                list = [...list].sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                list = [...list].sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                list = [...list].sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break; // featured = original order
        }
        return list;
    }, [query, sortBy]);

    return (
        <>
            <section id="home">
                <div className="container">
                    <div id="filters">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Search products"
                        />
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort products">
                            <option value="featured">Sort: Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name-asc">Name: A to Z</option>
                        </select>
                    </div>
                    <div className="home_content">
                        {filtered.length === 0 ? (
                            <div style={{ 
                                gridColumn: '1 / -1', 
                                textAlign: 'center', 
                                padding: '4rem 1rem',
                            }}>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                                    🔍 No products found
                                </h2>
                                <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
                                    Try adjusting your search or filters
                                </p>
                                <button 
                                    className="btn-gradient"
                                    style={{ padding: '0.7rem 1.5rem' }}
                                    onClick={() => { setQuery(''); setSortBy('featured'); }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            filtered.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;