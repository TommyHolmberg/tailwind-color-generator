import React, { useState, useEffect, useRef } from 'react';
import SwatchPreview from './SwatchPreview';

const ColorSwatchGrid = ({
    swatchData,
    handleSwatchSelection,
    handleIndividualChange,
}) => {
    const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(null);
    const settingsRef = useRef(null);
    const swatchContainerRef = useRef(null);

    const handleDocumentClick = (event) => {
        if (
            settingsRef.current &&
            !settingsRef.current.contains(event.target) &&
            swatchContainerRef.current &&
            !swatchContainerRef.current.contains(event.target)
        ) {
            setSelectedSwatchIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleSwatchClick = (index) => {
        setSelectedSwatchIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            <div
                ref={swatchContainerRef}
                className="grid grid-cols-5 gap-2 gap-x-4 items-start justify-items-center h-min"
            >
                {swatchData.map((swatch, index) => (
                    <div key={index}>
                        <SwatchPreview
                            hexColor={swatch.hexColor}
                            index={index}
                            isSelected={selectedSwatchIndex === index}
                            onClick={() => handleSwatchClick(index)}
                        />
                    </div>
                ))}
            </div>

            {selectedSwatchIndex !== null && (
                <div ref={settingsRef} className="mt-4 p-4  rounded w-72">
                    <label className="block mb-2">
                        Individual Saturation Offset:
                        <input
                            type="range"
                            min="-50"
                            max="50"
                            value={swatchData[selectedSwatchIndex].saturationOffset}
                            onChange={(e) =>
                                handleIndividualChange(selectedSwatchIndex, 'saturationOffset', e.target.value)
                            }
                            className="w-full"
                        />
                    </label>
                    <label className="block">
                        Individual Brightness Offset:
                        <input
                            type="range"
                            min="-50"
                            max="50"
                            value={swatchData[selectedSwatchIndex].brightnessOffset}
                            onChange={(e) =>
                                handleIndividualChange(selectedSwatchIndex, 'brightnessOffset', e.target.value)
                            }
                            className="w-full"
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default ColorSwatchGrid;