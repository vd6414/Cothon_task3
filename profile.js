import React, { useState } from 'react';
import './ProfilePage.css'; // Externalize the styles into a CSS file

const ProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture-container">
          <img src="profile.jpg" alt="Profile" className="profile-picture" />
        </div>
        <div className="profile-info">
          <h1>Sarah Johnson</h1>
          <p>"Lost in books, found in stories..."</p>
          <div className="reading-stats">
            <div className="stat-box">
              <div className="stat-number">127</div>
              <div className="stat-label">Books Read</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4.2</div>
              <div className="stat-label">Avg Rating</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">32K</div>
              <div className="stat-label">Pages Read</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">286</div>
              <div className="stat-label">Reviews</div>
            </div>
          </div>
          <div className="profile-actions">
            <button
              className={`btn btn-primary ${isFollowing ? 'following' : ''}`}
              onClick={toggleFollow}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            <button className="btn btn-secondary">Compare Books</button>
          </div>
        </div>
      </div>

      <div className="reading-challenge">
        <h2>2025 Reading Challenge</h2>
        <p>75 of 100 books read</p>
        <div className="challenge-progress">
          <div className="progress-bar-challenge" style={{ width: '75%' }}></div>
        </div>
      </div>

      <div className="reading-lists">
        <div className="list-section">
          <h2 className="section-title">Currently Reading</h2>
          <div className="book-list">
            <div className="book-item">
              <img src="free3.jpg" alt="Book Cover" className="book-cover" />
              <div className="book-info">
                <h3>The Oath of the Vayuputras</h3>
                <p>Amish Tripathi</p>
                <p>45% complete</p>
                <div className="progress-indicator">
                  <div className="progress-bar" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
            <div className="book-item">
              <img src="free4.jpg" alt="Book Cover" className="book-cover" />
              <div className="book-info">
                <h3>Samsara: Enter the Valley of the Gods</h3>
                <p>Saksham Garg</p>
                <p>23% complete</p>
                <div className="progress-indicator">
                  <div className="progress-bar" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list-section">
          <h2 className="section-title">Recently Finished</h2>
          <div className="book-list">
            <div className="book-item">
              <img src="free.jpg" alt="Book Cover" className="book-cover" />
              <div className="book-info">
                <h3>The Making of a Matchmaker</h3>
                <p>Book by Tess Thompson</p>
                <div className="rating">★★★★★</div>
              </div>
            </div>
            <div className="book-item">
              <img src="free2.jpg" alt="Book Cover" className="book-cover" />
              <div className="book-info">
                <h3>I Loved You First</h3>
                <p>By Cate Beauman</p>
                <div className="rating">★★★★☆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
