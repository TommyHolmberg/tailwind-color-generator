import React, { useState, useEffect } from 'react';
import ControlPanel from './ControlPanel';
import ColorSwatchGrid from './ColorSwatchGrid';
import HexList from './HexList';
import { generateHex } from '../utils/colors';
import ColorSentencePreview from './ColorSentencePreview';

const ColorGenerator = () => {
    const [numSwatches, setNumSwatches] = useState(5);
    const [baseSaturation, setBaseSaturation] = useState(50);
    const [baseBrightness, setBaseBrightness] = useState(50);
    const [prefix, setPrefix] = useState('');
    const [swatchData, setSwatchData] = useState([]);

    // Recalculate swatchData when numSwatches changes
    useEffect(() => {
        const newSwatchData = Array.from({ length: numSwatches }, (_, index) => ({
            hue: (index * 360) / numSwatches,
            saturationOffset: 0,
            brightnessOffset: 0,
            selected: false,
        }));
        setSwatchData(newSwatchData);
    }, [numSwatches]);

    const handleSwatchSelection = (index) => {
        setSwatchData((prev) =>
            prev.map((swatch, idx) => ({
                ...swatch,
                selected: idx === index ? !swatch.selected : swatch.selected,
            }))
        );
    };

    const handleIndividualChange = (index, type, value) => {
        setSwatchData((prev) =>
            prev.map((swatch, idx) =>
                idx === index ? { ...swatch, [type]: value } : swatch
            )
        );
    };

    const updatedSwatchData = swatchData.map((swatch, index) => {
        const finalSaturation = parseInt(baseSaturation) + parseInt(swatch.saturationOffset);
        const finalBrightness = parseInt(baseBrightness) + parseInt(swatch.brightnessOffset);
        const hexColor = generateHex(swatch.hue, finalSaturation, finalBrightness);

        return { ...swatch, hexColor };
    });

    return (
        <div className="flex p-5 justify-between">
            <ControlPanel
                numSwatches={numSwatches}
                setNumSwatches={setNumSwatches}
                baseSaturation={baseSaturation}
                setBaseSaturation={setBaseSaturation}
                baseBrightness={baseBrightness}
                setBaseBrightness={setBaseBrightness}
                prefix={prefix}
                setPrefix={setPrefix}
            />
            <ColorSwatchGrid
                swatchData={updatedSwatchData}
                handleSwatchSelection={handleSwatchSelection}
                handleIndividualChange={handleIndividualChange}
            />
            <ColorSentencePreview swatchData={updatedSwatchData} />
            <HexList prefix={prefix} swatchData={updatedSwatchData} />
        </div>
    );
};

export default ColorGenerator;
