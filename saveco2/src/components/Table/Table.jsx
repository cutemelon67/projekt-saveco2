import React from 'react';
import './table.css';

export const Table = () => {
  return (
    <>
      <thead>
        <tr>
          <th>
            Dopravní
            <br />
            prostředek
          </th>
          <th>
            kg&nbsp;CO<sub>2</sub>/km/
            <br />
            vozidlo
          </th>
          <th>
            kg&nbsp;CO<sub>2</sub>/km/
            <br />
            osoba
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Auto diesel (1&nbsp;-&nbsp;7&nbsp;osob)</td>
          <td>0,16660</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto diesel multivan (8&nbsp;-&nbsp;9&nbsp;osob)</td>
          <td>0,24527</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto benzín (1&nbsp;-&nbsp;7&nbsp;osob)</td>
          <td>0,17363</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto benzín multivan (8&nbsp;-&nbsp;9&nbsp;osob)</td>
          <td>0,21881</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto hybrid (1&nbsp;-&nbsp;9&nbsp;osob)*</td>
          <td>0,11433</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto CNG (1&nbsp;-&nbsp;7&nbsp;osob)</td>
          <td>0,17424</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto CNG multivan (8&nbsp;-&nbsp;9&nbsp;osob)</td>
          <td>0,24523</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto LPG (1&nbsp;-&nbsp;7&nbsp;osob)</td>
          <td>0,19707</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto LPG multivan (8&nbsp;-&nbsp;9&nbsp;osob)</td>
          <td>0,27104</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto průměr (1&nbsp;-&nbsp;7&nbsp;osob)</td>
          <td>0,17015</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto průměr multivan (8&nbsp;-&nbsp;9&nbsp;osob)</td>
          <td>0,24441</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto plug-in hybrid (1&nbsp;-&nbsp;9&nbsp;osob)*</td>
          <td>0,09433</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto elektro (1&nbsp;-&nbsp;7&nbsp;osob)</td>
          <td>0,05274</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Auto elektro multivan (8&nbsp;-&nbsp;9&nbsp;osob)</td>
          <td>0,05497</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Motorka (1&nbsp;-&nbsp;2&nbsp;osoby)</td>
          <td>0,11115</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Autobus</td>
          <td>-</td>
          <td>0,10231</td>
        </tr>
        <tr>
          <td>Vlak</td>
          <td>-</td>
          <td>0,03659</td>
        </tr>
        <tr>
          <td>Tramvaj / metro</td>
          <td>-</td>
          <td>0,02845</td>
        </tr>
        <tr>
          <td>Letadlo</td>
          <td>-</td>
          <td>0,09994</td>
        </tr>
        <tr>
          <td>Kolo</td>
          <td>-</td>
          <td>0,01808</td>
        </tr>
        <tr>
          <td>Plavání</td>
          <td>-</td>
          <td>0,05767</td>
        </tr>
        <tr>
          <td>Chůze</td>
          <td>-</td>
          <td>0,00833</td>
        </tr>
        <tr>
          <td>Trajekt</td>
          <td>-</td>
          <td>0,11131</td>
        </tr>
      </tbody>
    </>
  );
};
