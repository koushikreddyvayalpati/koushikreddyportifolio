import emailjs from '@emailjs/browser';
import { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import useAlert from '../hooks/useAlert';
import Alert from '../components/alert';
import Snowdragon from '../components/Snowdragon';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [currentAnimation, setCurrentAnimation] = useState("stand");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("atk01");
  const handleBlur = () => setCurrentAnimation("stand");


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("skill02");
setTimeout(() => {
    emailjs
      .send(
        'service_k28wzwt',
        'template_t9vzd4s',
        {
          from_name: form.name,
          to_name: 'Koushik reddy',
          from_email: form.email,
          to_email: 'koushikreddyvayalpati@gmail.com',
          message: form.message,
        },
        'Z1IiKqd9FNW9gq0SQ',
      )
      .then(
        () => {
          setLoading(false);
          setCurrentAnimation("stand");
          showAlert({
            show: true,
            text: 'Thank you, I have received your message! 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          setCurrentAnimation("deaddown");
          console.error(error);

          showAlert({
            show: true,
            text: "Sorry, I didn't receive your message 😢",
            type: 'danger',
          });
        },
        
      );
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="contact-container">
        {/* Left: 3D Model */}
        <div className="contact-canvas">
          <Canvas>
          
            <ambientLight intensity={0.6} />
            <hemisphereLight intensity={0.3} color="#ffffff" groundColor="#ffffff" />
            <directionalLight
        castShadow
        intensity={2.7} // Direct intensity
        color="#ffffff" // Direct color
        position={[10, 10, 10]} // Position of the light source
      />
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 1, 5]} />
              <OrbitControls
                autoRotate={false}
                autoRotateSpeed={2.0}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                enablePan={false}
              />
              <Snowdragon currentAnimation={currentAnimation} scale={1.5} position={[-0.3, -1, 0]} rotation={[0, 0, 0]}/>
            </Suspense>
          </Canvas>
        </div>

        {/* Right: Form */}
        <div className="contact-form">
          <h3 className="head-text mt-10">Reach me</h3>
          <p className="text-lg text-white-600 mt-3">
          Send a message, and let's embark on a collaborative journey toward new beginnings!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="field-input"
                placeholder="ex., mahesh"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="field-input"
                placeholder="ex., maheshbabu@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Thoughts</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading} onFocus={handleFocus}
            onBlur={handleBlur}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
