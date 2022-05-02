import React, { useMemo, useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
export default function Test() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
    <div
        style={{
            height: '750px',
            width: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}
    >
        <Viewer
            fileUrl={`/test.pdf`}
            plugins={[defaultLayoutPluginInstance]}
        />
    </div>
</Worker>
  );
}