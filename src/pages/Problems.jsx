// import React from 'react'
// import Navbar from '../components/Navbar'
// import data from '../assets/450DSAFinal.js'
// import Footer from '../components/Footer'
// function Problems() {
//   return (
//     <React.Fragment>
//       <Navbar />
//       <div id="problemsContainer">
//         {data.map(topicName, position) => (
//         <div className='card-problem'>
//           <h1>
//             {topicName}
//           </h1>
//           <h2>
//             {position}
//           </h2>
//         </div>
//           )}
//       </div>
//       <Footer />
//     </React.Fragment>
//   )
// }

// export default Problems
import React from 'react';
import Navbar from '../components/Navbar';
import data from '../assets/450DSAFinal';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Problems() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="abtusheading">
        Best Problems to Achieve Your Dream Placement
      </div>
      <div id="problemsContainer">
        {data.map((topic) => (
          <div className='card-problem' key={topic.topicName}>
            <Link to={`/${topic.topicName.replace(/\s/g, '').replace(/[^a-zA-Z]/g, '')}`}>
            <h1>{topic.position+1}-{topic.topicName}</h1>
            </Link>
            <h2>Total Questions:-&nbsp;{topic.questions.length}</h2>
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Problems;
