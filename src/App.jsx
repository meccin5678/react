import { useEffect, useState } from 'react';
import './App.css';
import { getAllPoekemon, getPokemon } from './utils/pokemon.jsx';
import Card from './components/Card/Card.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [prevURL, setPrevURL] = useState('');

  useEffect(() => {
    const fetchPokemonDate = async () => {
      let res = await getAllPoekemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous); // 修正: data を res に変更
      setLoading(false);
    };
    fetchPokemonDate();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPoekemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPoekemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className='App'>
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <p className='info'>
              このポケモン図鑑は、<a href="https://pokeapi.co/" target='_blank'>非公式のPokeAPI</a> を利用して作成しました<br />
              Pokémon は Nintendo, Game Freak, The Pokémon Company の登録商標であり、本サイトはそれらの企業とは一切関係ありません。
            </p>
            <div className='pokemonCardContainer'>
              {pokemonData.map((pokemon, i) => (
                <Card key={i} pokemon={pokemon} />
              ))}
            </div>
            <div className='btn'>
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
