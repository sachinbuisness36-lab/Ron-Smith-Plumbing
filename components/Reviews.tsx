
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const reviews = [
  {
    quote: "Leaking hot water tank at 11. New water tank at 1. Thanks for your help.",
    author: "Satisfied Customer",
  },
  {
    quote: "You completely solved the plumbing situation in our very old building this week!",
    author: "Happy Homeowner",
  },
  {
    quote: "I was worried about a possible plumbing issue. Had a talk and he helped me out.",
    author: "Relieved Client",
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: typeof reviews[0], delay: number }> = ({ review, delay }) => {
    const { ref, animationClass } = useScrollAnimation<HTMLDivElement>('slide-up');
    
    return (
        <div ref={ref} style={{ animationDelay: `${delay}ms` }} className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${animationClass}`}>
            <p className="text-gray-700 italic mb-6">"{review.quote}"</p>
            <div>
                <StarRating rating={5} />
                <p className="font-semibold text-blue-900 mt-2">{review.author}</p>
            </div>
        </div>
    );
};

const Reviews: React.FC = () => {
    const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation<HTMLDivElement>('slide-up');
    
    return (
        <section id="reviews" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className={`text-center mb-12 ${titleAnimation}`}>
                    <h2 className="text-4xl font-extrabold text-blue-900">What Our Customers Say</h2>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <StarRating rating={5} />
                        <p className="text-lg text-gray-600">5.0 Average Rating</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
