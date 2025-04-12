import Layout from '../components/Layout';
import { AboutWrapper } from '../styles/pages/about/styles';

export default function About() {
  return (
    <Layout>
      <AboutWrapper>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien nec odio euismod posuere.</p>
      </AboutWrapper>
    </Layout>
  );
}
