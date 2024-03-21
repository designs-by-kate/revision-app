import React from 'react';
import Description from '../../components/Description/Description';
import CodeSection from '../../components/CodeSection/CodeSection';
import Tutorial from '../../components/Tutorial/Tutorial';
import '../ModulePage.css'

const HTML = () => {
  return (
    <div className="container-module">
      <div className="row">
        <div className="col description-section">
          <Description searchTerm={"html"} />
        </div>
      </div >
      <div className="row">
        <div className="col codesnippet-section">
          <CodeSection />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md tutorial-section">
              <Tutorial />
            </div>
            <div className="col-md cheatsheet-section">
              <h1>Cheat Sheets</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HTML