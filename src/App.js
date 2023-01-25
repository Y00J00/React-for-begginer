
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
//git 확인용
// git 확인용 두번째 
function App() {
  return (
 <Router>
  <Switch>
    <Route path="/movie">
      <Detail/>
    </Route>
    <Route path="/">
      <Home/>
    </Route>
  </Switch>
 </Router>
  );

}
export default App;


// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async() => {
//     const response = await fetch(
//       "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
//     );
//     const jsonData = await response.json();
//     setMovies(jsonData.data.movies);
//     setLoading(false);
//   };
//   useEffect(() => {getMovies();}, [])
//   // useEffect(() => {
//   //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
//   //   .then(response => response.json())
//   //   .then(jsonData => {
//   //     setMovies(jsonData.data.movies);
//   //     setLoading(false);
//   // })}, [])
//   console.log(movies);
//   return (
//     <div>
//     {loading ? <h1>loading...</h1> : null}
//     <ul>
//       {movies.map(movie => (
//         <Movie
//           key={movie.id}
//           medium_cover_image={movie.medium_cover_image}
//           title={movie.title}
//           summary={movie.summary}
//           genres={movie.genres}
//         />
//       ))}
//     </ul>
//     </div>);
// }
//   return (
//     <div>
//     {loading ? <h1>loading...</h1> : null}
//     <ul>
//       {movies.map(movie => (
//         <div key={movie.id}>
//             <img src={movie.medium_cover_image}></img>
//             <h3><a href={movies.url}>{movie.title}</a></h3>
//             <p>{movie.summary}</p>
//             <ul>
//               <li>
//                 {movie.genres.map(g => <li key={g}>{g}</li>)}
//               </li>
//             </ul>
//         </div>
//       ))}
//     </ul>
//     </div>);
// }


// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]); 
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers?limit=20")
//     .then(response => response.json())
//     .then((jsonData) => {
//       setCoins(jsonData);
//     setLoading(false)});
//   } ,[])
//   return (
//     <div>
//       <h1>the coins!! ({coins.length})</h1>
//       {loading ? <strong>Loading...</strong> : null}
//       <ul>
//         {coins.map((coin) => (<li key={coin.id}>{coin.name} ({coin.symbol} : {coin.quotes.USD.price} USD)</li>))}
//       </ul>
//     </div>);
// }




//forEach 메서드는 단순히 반복문을 대체하기 위한 함수이고, map 메서드는 요소값을 다른 값으로 mapping한 새로운 배열을 생성하기 위한 고차함수다. 

// function Hello(){
//   useEffect(() => {
//     console.log("hi");
//     return () => console.log("bye");}, []) //useEffec 언마운트 찾아보기
//   return <h1>hello</h1>
// }

// function App(){
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing(current => !current);
//   return <div>
//     {showing ? <Hello/> : null}
//     <button onClick={onClick}>{showing ? "hide" : "show"}</button>
//   </div>;
// }

// function App() {
//   const [counter,setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");

//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);

//   //useEffect(우리가 실행시키고 싶은 코드, dependency(변화하는 state))
//   useEffect(() => {console.log("i run only once")}, []); //state가 변해도 앞에 함수는 처음 렌더링 한번만 실행된다. 빈 []는 그냥 처음 한번만 실행됨
//   useEffect(() => {console.log("i run when 'keyword' changes")}, [keyword]); //keyword 가 변화할때만 코드를 실행하고 싶다. counter 가 변화할때는 실행 안돼
//   useEffect(() => {console.log("i run when 'counter' changes")}, [counter]); //counter 가 변화할때만 코드를 실행하고 싶다. keyword 가 변화할때는 실행 안돼
//   useEffect(() => {console.log("i run when key & counter changes")}, [keyword, counter]); // 둘중 하나가 변할때
//   return (
//     <div>
//       <input type="text" placeholder="search here.." onChange={onChange} value={keyword}/>
//       <h1 className={styles.title}>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

