import React from 'react';

const SwatchPreview = ({ hexColor, index, isSelected, onClick }) => {
    return (
        <div
            onClick={() => onClick(index)}
            className="w-12 h-12 rounded-lg"
            style={{
                backgroundColor: hexColor,
                border: isSelected ? '3px solid #000' : '1px solid #ccc',
                cursor: 'pointer',
                marginBottom: '10px',
            }}
        />
    );
};

export default SwatchPreview;
