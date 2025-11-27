import React from 'react'
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react'

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: 'Modern Villa with Ocean View',
      location: 'Malibu, California',
      price: '$2,850,000',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      beds: 4,
      baths: 3,
      area: 3200,
      type: 'Villa'
    },
    {
      id: 2,
      title: 'Luxury Downtown Apartment',
      location: 'Manhattan, New York',
      price: '$1,250,000',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      beds: 2,
      baths: 2,
      area: 1800,
      type: 'Apartment'
    },
    {
      id: 3,
      title: 'Charming Family House',
      location: 'Austin, Texas',
      price: '$675,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      beds: 3,
      baths: 2,
      area: 2400,
      type: 'House'
    },
    {
      id: 4,
      title: 'Contemporary Penthouse',
      location: 'Miami, Florida',
      price: '$3,200,000',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      beds: 3,
      baths: 3,
      area: 2800,
      type: 'Penthouse'
    },
    {
      id: 5,
      title: 'Cozy Suburban Home',
      location: 'Portland, Oregon',
      price: '$485,000',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      beds: 3,
      baths: 2,
      area: 1950,
      type: 'House'
    },
    {
      id: 6,
      title: 'Mountain Retreat Cabin',
      location: 'Aspen, Colorado',
      price: '$1,850,000',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      beds: 4,
      baths: 3,
      area: 2600,
      type: 'Cabin'
    }
  ]

  return (
    <section id="properties" className="section">
      <div className="container">
        <h2 className="section-title">Featured Properties</h2>
        <p className="section-subtitle">
          Discover our handpicked selection of exceptional properties across prime locations
        </p>

        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.image} alt={property.title} />
                <div className="property-badge">{property.type}</div>
                <button className="favorite-btn">
                  <Heart size={20} />
                </button>
              </div>

              <div className="property-content">
                <div className="property-header">
                  <h3 className="property-title">{property.title}</h3>
                  <div className="property-location">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>
                </div>

                <div className="property-features">
                  <div className="feature">
                    <Bed size={16} />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="feature">
                    <Bath size={16} />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="feature">
                    <Square size={16} />
                    <span>{property.area} sqft</span>
                  </div>
                </div>

                <div className="property-footer">
                  <div className="property-price">{property.price}</div>
                  <button className="btn btn-secondary view-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="properties-cta">
          <button className="btn btn-primary">View All Properties</button>
        </div>
      </div>

      <style jsx>{`
        .properties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .property-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .property-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .property-card:hover .property-image img {
          transform: scale(1.05);
        }

        .property-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .favorite-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #718096;
          transition: all 0.3s ease;
        }

        .favorite-btn:hover {
          background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
          color: white;
        }

        .property-content {
          padding: 1.5rem;
        }

        .property-header {
          margin-bottom: 1rem;
        }

        .property-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1a365d;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #718096;
          font-size: 0.875rem;
        }

        .property-features {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4a5568;
          font-size: 0.875rem;
        }

        .property-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .property-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ff6b6b;
        }

        .view-btn {
          padding: 8px 16px;
          font-size: 0.875rem;
        }

        .properties-cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .properties-grid {
            grid-template-columns: 1fr;
          }

          .property-features {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .property-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .view-btn {
            width: 100%;
            min-height: 44px;
          }
        }

        @media (max-width: 480px) {
          .properties-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .property-image {
            height: 200px;
          }

          .property-content {
            padding: 1.25rem;
          }

          .property-title {
            font-size: 1.125rem;
          }

          .property-features {
            gap: 0.75rem;
          }

          .feature {
            font-size: 0.8rem;
          }

          .property-price {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}

export default FeaturedProperties