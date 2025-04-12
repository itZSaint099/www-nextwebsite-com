import { Document, Page, pdfjs } from 'react-pdf';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';
import Layout from '../components/Layout';

// Use direct relative path from node_modules
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer() {
  const router = useRouter();
  const { file } = router.query;
  const [numPages, setNumPages] = useState<number | null>(null);

  // Memoize the options object to avoid unnecessary reloads
  const options = useMemo(() => ({ disableRange: true }), []);

  if (!file || typeof file !== 'string') return <p>Loading...</p>;

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          options={options} // Use the memoized options
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false}/>
          ))}
        </Document>
      </div>
    </Layout>
  );
}
