import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Data from '../../assets/450DSAFinal';

function Array() {
    const filteredData = Data.filter((topic) => topic.position === 0);

    return (
        <React.Fragment>
            <Navbar />
            <div className="abtusheading">Array</div>
            <div id="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Problem</th>
                            <th>Done</th>
                            <th>Bookmark</th>
                            <th>Notes</th>
                            <th>URL</th>
                            <th>URL2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((topic) =>
                            topic.questions.map((question, index) => (
                                <tr key={index}>
                                    <td>{question.Topic}</td>
                                    <td>{question.Problem}</td>
                                    <td>{question.Done ? 'Yes' : 'No'}</td>
                                    <td>{question.Bookmark ? 'Yes' : 'No'}</td>
                                    <td>{question.Notes}</td>
                                    <td>
                                        <a href={question.URL} target="_blank" rel="noopener noreferrer">
                                            Link 1
                                        </a>
                                    </td>
                                    <td>
                                        <a href={question.URL2} target="_blank" rel="noopener noreferrer">
                                            Link 2
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
        </React.Fragment>
    );
}
export default Array;
