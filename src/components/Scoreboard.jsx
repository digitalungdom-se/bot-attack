import ListElement from "./TopListElement";

const Scoreboard = ({ hallOfFame }) => {
  return (
    <div style={{ width: 380 }}>
      <h2>TOPPLISTA</h2>
      <table className="toplist">
        <tr>
          <th>#</th>
          <th></th>
          <th>Bot</th>
          <th>Kills</th>
        </tr>
        {hallOfFame.map((place, index) => (
          <ListElement
            place={index + 1}
            name={truncate(place.name, 30)}
            kills={place.kills}
          />
        ))}
      </table>
    </div>
  );
};

// Cool function to truncate long strings
function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

export default Scoreboard;
