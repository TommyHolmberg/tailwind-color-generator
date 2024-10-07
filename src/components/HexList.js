import React from 'react';

const HexList = ({ prefix, swatchData }) => {
    return (
        <div className="ml-10 text-left">
            <h3 className="text-lg mb-4">Generated Hex Colors</h3>
            <ul>
                {swatchData.map((swatch, index) => (
                    <li key={index} className="mb-2">
                        {`"${prefix ? '--' + prefix : '--color'}${index + 1}": "${swatch.hexColor}",`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HexList;