import { rankinglists } from "./data";
import RankingList from "./RankingList";

const App = () => {
  return (
    <>
      <h1>官方榜</h1>
      <main>
        {rankinglists.map((rankinglist) => (
          <RankingList
            key={rankinglist.id}
            id={rankinglist.id}
            name={rankinglist.name}
            coverImgUrl={rankinglist.coverImgUrl}
            updateTime={rankinglist.updateTime}
            trackCount={rankinglist.trackCount}
          />
        ))}
      </main>
    </>
  );
};
export default App;
