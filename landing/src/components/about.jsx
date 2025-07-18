// pages/AboutPage.jsx or about.jsx
const AboutPage = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(to bottom, #000000ff, #000000ff)',
        minHeight: '100vh',
        padding: '60px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#fff3f3ff', marginBottom: '20px' }}>
        About CLI
      </h1>

      <p style={{ fontSize: '1.25rem', color: '#fff3f3ff', maxWidth: '800px' }}>
        <strong>What is CLI?</strong><br />
        CLI stands for Command Line Interface. It's a text-based interface used to interact with software or OS by typing commands.<br /><br />

        <strong>GUI vs CLI:</strong><br />
        GUI (Graphical User Interface) uses visual elements like buttons and windows.<br />
        CLI uses only text and commands for navigation and operations.<br /><br />

        <strong>Why CLI is important:</strong><br />
        - Faster for repetitive or scripted tasks<br />
        - Lightweight (uses less memory)<br />
        - Works over remote connections (SSH)<br />
        - Powerful for automation<br /><br />

        <strong>Examples:</strong><br />
        - Developers using Git CLI<br />
        - DevOps teams running Docker or Kubernetes commands<br />
        - Linux users managing systems<br />
        - You installing a React app with <code>npx create-react-app</code>
      </p>
    </section>
  );
};

export default AboutPage;
