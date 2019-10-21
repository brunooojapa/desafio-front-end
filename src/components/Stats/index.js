import React from 'react';

export const Stats = ({ stats }) => {
  const renderStats = items => {
    if (!stats) return;

    let statsList = [];
    items.map(item => {
      statsList.push(
        <div key={item.stat.name}>
          {item.stat.name} - {item.base_stat} <br />
          <progress
            class='nes-progress is-success'
            value={item.base_stat}
            max='100'
          ></progress>
        </div>
      );
    });

    return statsList;
  };

  return <div>{renderStats(stats)}</div>;
};
