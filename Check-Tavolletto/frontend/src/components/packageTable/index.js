import React from 'react'
import './packagetable.css'
const Index = () => {
  return (
    <div className='table-cont'>

    <table className='table package-table'>
  <thead>
    <tr>
      <th className='app-ad-head' scope = "col">App Advertising</th>
      <th className='ad-name-head' scope="col">Know me better on tuesday</th>
      <th className='ad-name-head' scope="col">Efficient for 3 days</th>
      <th className='ad-name-head' scope="col">Your golden week</th>
      <th className='ad-name-head' scope="col">Update everything in 2 weeks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='row-title'>Email Newsletter</td>
      <td>1 Email on Tuesday</td>
      <td>3 Emails in week</td>
      <td>7 Emails in 2 weeks</td>
      <td>14 Emails in 4 weeks</td>
    </tr>
    <tr>
      <td className='row-title'>Appear first on reels</td>
      <td >1 Day</td>
      <td>3 Days</td>
      <td>7 Days</td>
      <td>€ 36</td>
    </tr>
    <tr>
      <td className='row-title' >New Restaurant Label on Homepage</td>
      <td >1 Day</td>
      <td>3 Days</td>
      <td>7 Days</td>
      <td>14 Days</td>
    </tr>
    <tr>
      <td className='row-title' >Story Video</td>
      <td>-</td>
      <td>1 professional story</td>
      <td>5 professional stories</td>
      <td>Every day for 14 days</td>
    </tr>
    <tr>
      <td className='row-title' >Cover video & Blog</td>
      <td>-</td>
      <td>-</td>
     <td>-</td>
      <td>1 Blog & 1 Cover Video</td>
    </tr>
    <tr>
      <td className='row-title' >Price</td>
      <td>€ 49</td>
      <td>€ 130</td>
      <td>€ 699</td>
      <td>€ 1590</td>
    </tr>
  
  </tbody>
</table>

</div>
 
  )
}

export default Index