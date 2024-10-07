import React from 'react';

const ControlPanel = ({
    numSwatches,
    setNumSwatches,
    baseSaturation,
    setBaseSaturation,
    baseBrightness,
    setBaseBrightness,
    prefix,
    setPrefix
}) => {
    return (
        <div className='w-72'>
            <h2 className="text-xl mb-4">Control Panel</h2>

            <label className="block mb-2">
                Number of Swatches:
                <input
                    type="number"
                    value={numSwatches}
                    onChange={(e) => setNumSwatches(Number(e.target.value))}
                    min="1"
                    className="input input-bordered w-full max-w-xs"
                />
            </label>

            <label className="block mb-2">
                Saturation:
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={baseSaturation}
                    onChange={(e) => setBaseSaturation(e.target.value)}
                    className="w-full"
                />
            </label>

            <label className="block mb-2">
                Brightness:
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={baseBrightness}
                    onChange={(e) => setBaseBrightness(e.target.value)}
                    className="w-full"
                />
            </label>

            <label className="block mb-4">
                Prefix:
                <input
                    type="text"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </label>
        </div>
    );
};

export default ControlPanel;
