import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '../components/Layout';
import { LibraryWrapper, DocsWrapper } from '../styles/pages/library/styles';

const docs = [
  { title: 'Dummy PDF 1', file: '/pdfs/dummy.pdf' },
  { title: 'Dummy PDF 2', file: '/pdfs/dummy2.pdf' },
];

export default function Library() {
  return (
    <Layout>
      <LibraryWrapper>
        <h1>Library</h1>
        <DocsWrapper>
          {docs.map((doc, idx) => (
            <Card key={idx} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{doc.title}</Card.Title>
                <Link href={`/pdf-viewer?file=${encodeURIComponent(doc.file)}`} className="btn btn-primary">Read</Link>
              </Card.Body>
            </Card>
          ))}
        </DocsWrapper>
      </LibraryWrapper>
    </Layout>
  );
}
