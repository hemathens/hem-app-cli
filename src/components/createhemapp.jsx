const CreateHemApp = () => {
  return (
    <section
      style={{
        backgroundColor: '#000000ff',
        color: '#fff3f3ff',
        minHeight: '100vh',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        create-hem-app
      </h1>

      <p style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '40px', lineHeight: '1.8' }}>
        <strong>What is create-hem-app?</strong><br />
        It’s a CLI tool that helps you scaffold full-stack or front-end projects instantly.<br /><br />

        <strong>Why use it?</strong><br />
        – Saves time by setting up boilerplate in seconds<br />
        – Custom options to pick framework (React, Next.js, etc.)<br />
        – Automatically installs dependencies and initializes git<br />
        – Designed to kickstart personal and professional ideas with ease<br />
        – Perfect for beginners and solo devs starting out
      </p>
      
      {/* Image Placeholder */}
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '40px' }}>
        <img
          src="/demo-placeholder.png" // ← Replace with your actual image path or URL
          alt="create-hem-app interface or usage example"
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
          }}
        />
      </div>
    </section>
  );
};

export default CreateHemApp;