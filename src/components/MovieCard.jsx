import {Link} from 'react-router-dom';

function MovieCard({title, id}) {
  
  return (
    <article className='movie-card'>
        <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
        </Link>
        
    </article>
  );
};

export default MovieCard;