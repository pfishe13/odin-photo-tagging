import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import db from '../firebase-config';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'leaderboard'), orderBy('time', 'asc'));
      const querySnapshot = await getDocs(q);
      let dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });
      setLeaderboardData([...dataArray]);
    };
    fetchData();
  }, []);

  return (
    <div className="leaderboard-container">
      <table className="leaderboard-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item) => {
            return (
              <tr key={item.name + item.time}>
                <td>{item.name}</td>
                <td>
                  <Timer timer={item.time} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
