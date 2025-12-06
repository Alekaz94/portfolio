import '../styling/hero.css';

const Hero = () => {

    return (
        <section className="hero-section">
            <img
                src="/profile.jpg"
                alt="Alexandros Kazalis"
            />
            <h1>Alexandros Kazalis</h1>
            <p className='subtitle'>Fullstack Developer</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sit temporibus delectus impedit nobis corporis hic quas blanditiis nulla voluptatem ut, voluptates repudiandae, natus magnam. Quia consequatur nam alias quos!</p>
            <p></p>
        </section>
    )
}

export default Hero;