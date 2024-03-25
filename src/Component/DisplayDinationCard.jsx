
import PropTypes from 'prop-types';


const DisplayDinationCard = ({data}) => {
    const {picture, title,category,price}=data;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
        <figure className=' w-4/12'><img src={picture} alt="Movie"/></figure>
        <div className="px-4 space-y-3" >
        <span className='px-3 py-2 border-2 rounded-md bg-blue-50 text-lg font-medium   '>{category}</span>
          <h2 className="card-title">{title}</h2>
          <p>Donate :{price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Veiw Detals</button>
          </div>
        </div>
      </div>
    );
};

export default DisplayDinationCard;
DisplayDinationCard.propTypes = {
    data: PropTypes.object.isRequired,
  };