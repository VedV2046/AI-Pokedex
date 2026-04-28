import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TypePage() {
  const { typeName } = useParams(); // gets type from URL
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      const typeRes = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
      const top20 = typeRes.data.pokemon.slice(0, 20);

      const details = await Promise.all(
        top20.map(({ pokemon }) => axios.get(pokemon.url))
      );

      setPokemons(details.map(res => res.data));
      setLoading(false);
    }

    fetchPokemons();
  }, [typeName]);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        ← Back
      </button>
      <h2 className="text-capitalize mb-4">{typeName} Pokémon</h2>
      <div className="row">
        {pokemons.map(pokemon => (
          <div key={pokemon.name} className="col-md-3 mb-4">
            <div className="card text-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                className="card-img-top p-3"
              />
              <div className="card-body">
                <h5 className="card-title text-capitalize">{pokemon.name}</h5>
                <p className="text-muted">#{pokemon.id}</p>
                <p>
                  {pokemon.types.map(t => t.type.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypePage;