import { useSuperheroData } from "../hooks/useSuperheroData";

import { Link, useNavigate, useParams } from "react-router-dom";

import Loader from "./Loader";

function SuperheroDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading } = useSuperheroData(id);

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className="superhero-box">
      <Link to=".." onClick={(e) => goBack(e)}>
        Go back to Superheros
      </Link>

      {isLoading ? (
        <Loader />
      ) : (
        isSuccess && (
          <div>
            <h3>Name: {data?.data?.name}</h3>
            <h3>Alter Ego: {data?.data?.alterEgo}</h3>
          </div>
        )
      )}
    </div>
  );
}

export default SuperheroDetail;
