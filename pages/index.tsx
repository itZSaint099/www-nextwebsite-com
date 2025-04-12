import { Carousel } from 'react-bootstrap';
import Layout from '../components/Layout';
import { HomeWrapper } from '../styles/pages/home/styles';
import Image from 'next/image';
import SlideOne from "/public/images/slide1.jpg";
import SlideTwo from "/public/images/slide2.jpg";

export default function Home() {
  return (
    <Layout>
      <HomeWrapper>
        <Carousel>
          <Carousel.Item>
            <Image src={SlideOne} alt='slide-1' className='img-responsive' width={900} height={500}/>
            <Carousel.Caption>
              <h3>Welcome to Website</h3>
              <p>Experience the divine with us.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image src={SlideTwo} alt='slide-2' className='img-responsive' width={900} height={500}/>
            <Carousel.Caption>
              <h3>Join Our Events</h3>
              <p>Spiritual gatherings and celebrations.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section className="mt-5">
          <h2>About Website</h2>
          <p>We are a global community dedicated to the teachings</p>
        </section>
      </HomeWrapper>
    </Layout>
  );
}
