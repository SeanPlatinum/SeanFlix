function LandingPage(props) {
    return (
      <div className="landing-page">
        <button className="get-started" onClick={props.onStart}>
          Get Started &gt;
        </button>
      </div>
    );
  }
  
  export default LandingPage;