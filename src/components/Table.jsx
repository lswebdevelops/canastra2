import React, { useState } from 'react';

import "../styles/Table.css";

const Table = () => {
  const [user1Scores, setUser1Scores] = useState([0, 0, 0, 0, 0]);
  const [user2Scores, setUser2Scores] = useState([0, 0, 0, 0, 0]);

  const handleInputChange = (event, index, user) => {
    const value = event.target.value;
    if (user === "user1") {
      setUser1Scores([...user1Scores.slice(0, index), parseInt(value), ...user1Scores.slice(index + 1)]);
    } else {
      setUser2Scores([...user2Scores.slice(0, index), parseInt(value), ...user2Scores.slice(index + 1)]);
    }
  };

  const calculateTotal = (scores) => {
    return scores.reduce((total, score) => total + score, 0);
  };

  const resetScores = () => {
    setUser1Scores([0, 0, 0, 0, 0]);
    setUser2Scores([0, 0, 0, 0, 0]);
  };

  const user1Total = calculateTotal(user1Scores);
  const user2Total = calculateTotal(user2Scores);

  return (
    <div className="table-container">
      <table>
        
        <tbody>
          {user1Scores.map((score, index) => (
            <tr key={index}>
              <td className="indexTD">{index + 1}</td>
              <td>
                <input
                  type="number"
                  placeholder="0"
                  value={score}
                  onChange={(e) => handleInputChange(e, index, "user1")}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="0"
                  value={user2Scores[index]}
                  onChange={(e) => handleInputChange(e, index, "user2")}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td className="total">Total:</td>
            <td className="total-user1">{user1Total}</td>
            <td className="total-user2">{user2Total}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <button className='buttonRestartPoints' onClick={resetScores}>Zerar pontos</button>
      <a
href='https://lswebdevelops.github.io/canastra/'>
<button 
className='button3Players' >Três Jogadores</button>
</a>
    </div>
  );
};

export default Table;
