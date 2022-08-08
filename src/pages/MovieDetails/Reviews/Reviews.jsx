import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from '../../../components/ReviewsList';
import { getMovieReviews } from '../../../api/getMovieReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return <>{reviews && <ReviewsList reviews={reviews} />}</>;
};

export default Reviews;
