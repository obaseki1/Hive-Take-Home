import React, { useState, useRef } from 'react';
import {
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaTimes,
} from 'react-icons/fa';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import { useDispatch } from 'react-redux';
import {
  addSkill,
  removeSkill,
  addAllSkills,
  removeAllSkills,
} from '../../actions/skillsActions';
import './Dropdown.css';

function Dropdown({ values, title, selectedValues }) {

  const dispatch = useDispatch();
  const [closed, setClosed] = useState(true);

  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 40,
    })
  );

  const toggleDropdown = () => {
    values ? setClosed(!closed) : window.alert('No values given');
  };

  const handleValueClick = (selected) => {
    if (selectedValues.indexOf(selected) === -1) {
      dispatch(addSkill(selected));
    } else {
      dispatch(removeSkill(selected));
    }
  };

  const selectAll = () => {
    dispatch(addAllSkills(values));
  };

  const deselectAll = () => {
    dispatch(removeAllSkills());
  };

  const renderRow = ({ index, key, parent, style }) => (
    <CellMeasurer
      key={key}
      cache={cache.current}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <div
        className="dropdown-value-div"
        onClick={() => handleValueClick(values[index])}
        style={style}
      >
        {selectedValues.indexOf(values[index]) !== -1 ? (
          <FaCheckCircle color="grey" size="15" />
        ) : (
          <div style={{ width: 15 }}></div>
        )}

        <span className="value-text">{values[index]}</span>
        <div style={{ width: 15 }} />
      </div>
    </CellMeasurer>
  );

  return (
    <div data-testid="dropdown-test" className="main">
      <div className="buttons-div">
        <span onClick={() => selectAll()}>Select All</span>
        <span onClick={() => deselectAll()}>Deselect All</span>
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          
          {selectedValues.length < 1 ? (
            <span className="title">{title ? title : 'Select Values'}</span>
          ) : (
            <div className="selected-values-container">
              {selectedValues.map((value) => {
                return (
                  <div key={value} className="selected-value">
                    {' '}
                    <span className="selected-value-text">{value}</span>{' '}
                    <FaTimes onClick={() => handleValueClick(value)} />{' '}
                  </div>
                );
              })}
            </div>
          )}

          {closed ? (
            <FaChevronDown
              style={{ cursor: 'pointer' }}
              size="16"
              onClick={() => toggleDropdown()}
            />
          ) : (
            <FaChevronUp
              style={{ cursor: 'pointer' }}
              size="16"
              onClick={() => toggleDropdown()}
            />
          )}
        </div>

        {!closed && (
          <div
            className="dropdown-values-container"
            onBlur={() => toggleDropdown()}
          >
            <div style={{ width: '100%', height: 300 }}>
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    width={width}
                    height={height}
                    rowRenderer={renderRow}
                    rowCount={values.length}
                    rowHeight={50}
                    deferredMeasurementCache={cache.current}
                  />
                )}
              </AutoSizer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
