import React from 'react';

const ColorSentencePreview = ({ swatchData }) => {
    return (
        <div className="space-y-1">
            {swatchData.map((swatch, index) => (
                <p key={index} style={{ color: swatch.hexColor }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            ))}
        </div>
    );
};

export default ColorSentencePreview;