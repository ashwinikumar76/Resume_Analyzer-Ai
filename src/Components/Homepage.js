import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const stars = document.getElementById("stars-animation");
    if (!stars) return;
    const ctx = stars.getContext("2d");
    let width = (stars.width = window.innerWidth);
    let height = (stars.height = window.innerHeight);

    const starsArray = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
    }));

    const symbolsArray = Array.from({ length: 8 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 20 + Math.random() * 20,
      speed: 0.2 + Math.random() * 0.3,
      opacity: 0.05 + Math.random() * 0.1,
    }));

    const resumeSymbol = "📄";

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      starsArray.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();

        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      symbolsArray.forEach((symbol) => {
        ctx.font = `${symbol.size}px Arial`;
        ctx.fillStyle = `rgba(255,255,255,${symbol.opacity})`;
        ctx.fillText(resumeSymbol, symbol.x, symbol.y);
        symbol.y += symbol.speed;
        if (symbol.y > height) {
          symbol.y = -20;
          symbol.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = stars.width = window.innerWidth;
      height = stars.height = window.innerHeight;

      // Redistribute stars and symbols on resize
      starsArray.forEach((star) => {
        if (star.x > width) star.x = Math.random() * width;
        if (star.y > height) star.y = Math.random() * height;
      });

      symbolsArray.forEach((symbol) => {
        if (symbol.x > width) symbol.x = Math.random() * width;
        if (symbol.y > height) symbol.y = Math.random() * height;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      <canvas id="stars-animation" style={styles.canvas}></canvas>
      <header style={styles.header}>
        <h1 style={styles.title}>Jobready AI</h1>
        <p style={styles.subtitle}>Your AI-powered resume assistant</p>
        <button
          onClick={() => navigate("/ResumeUpload")}
          style={styles.ctaButton}
          onMouseOver={(e) => (e.target.style.background = "#1e90ff")}
          onMouseOut={(e) => (e.target.style.background = "#00bfff")}>
          Get Started
        </button>
      </header>

      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <div style={styles.cardsContainer}>
          <div
            style={styles.card}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }>
            <h3 style={styles.cardTitle}>Smart Parsing</h3>
            <p style={styles.cardText}>
              AI extracts essential resume data with high accuracy.
            </p>
          </div>
          <div
            style={styles.card}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }>
            <h3 style={styles.cardTitle}>Skill Match</h3>
            <p style={styles.cardText}>
              Matches resume skills with job descriptions effectively.
            </p>
          </div>
          <div
            style={styles.card}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }>
            <h3 style={styles.cardTitle}>Analytics</h3>
            <p style={styles.cardText}>
              Scoring and summary dashboard for hiring decisions.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.resumeSection}>
        <div style={styles.resumeContainer}>
          <div style={styles.resumeLeft}>
            <h2 style={styles.resumeTitle}>Improve your Resume .</h2>
            <p style={styles.resumeDescription}>
              Designed by top recruiters, our AI-powered platform instantly
              gives you tailored feedback on your resume and LinkedIn profile.
            </p>
            <p style={styles.resumeSubtext}>
              Land 5x more interviews, opportunities and job offers.
            </p>
            <div style={styles.resumeButtons}>
              <button
                onClick={() => navigate("/ResumeUpload")}
                style={styles.primaryButton}
                onMouseOver={(e) => (e.target.style.background = "#28a745")}
                onMouseOut={(e) => (e.target.style.background = "#34d058")}>
                Get started for free ➤
              </button>
              <button
                style={styles.secondaryButton}
                onMouseOver={(e) => (e.target.style.color = "#00ffff")}
                onMouseOut={(e) => (e.target.style.color = "#aadfff")}>
                See preview ▼
              </button>
            </div>
          </div>
          <div style={styles.resumeRight}>
            <div style={styles.mockupContainer}>
              <div style={styles.mockupPhone}>
                <div style={styles.phoneHeader}></div>
                <div style={styles.phoneContent}>
                  <div style={styles.scoreSection}>
                    <div style={styles.scoreCircle}>
                      <span style={styles.scoreNumber}>78</span>
                      <span style={styles.scoreLabel}>Overall Score</span>
                    </div>
                    <p style={styles.scoreText}>
                      Your resume scored 78 out of 100.
                    </p>
                  </div>

                  <div style={styles.breakdownSection}>
                    <h4 style={styles.breakdownTitle}>BREAKDOWN</h4>
                    <div style={styles.categoryRow}>
                      <div style={styles.category}>
                        <span style={styles.categoryLabel}>IMPACT</span>
                        <span style={styles.categoryScore}>
                          100<span style={styles.categoryTotal}>/100</span>
                        </span>
                        <span
                          style={styles.categoryStatus}
                          data-status="excellent">
                          EXCELLENT
                        </span>
                      </div>
                      <div style={styles.category}>
                        <span style={styles.categoryLabel}>BREVITY</span>
                        <span style={styles.categoryScore}>
                          65<span style={styles.categoryTotal}>/100</span>
                        </span>
                        <span
                          style={styles.categoryStatus}
                          data-status="average">
                          AVERAGE
                        </span>
                      </div>
                      <div style={styles.category}>
                        <span style={styles.categoryLabel}>STYLE</span>
                        <span style={styles.categoryScore}>
                          90<span style={styles.categoryTotal}>/100</span>
                        </span>
                        <span style={styles.categoryStatus} data-status="good">
                          VERY GOOD
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={styles.impactSection}>
                    <div style={styles.impactCircle}>
                      <span style={styles.impactNumber}>100</span>
                      <span style={styles.impactLabel}>Impact Score</span>
                    </div>
                    <div style={styles.checklistContainer}>
                      <div style={styles.checklistItem}>
                        <span style={styles.checkmark}>✓</span>
                        <span>Quantifying impact</span>
                        <span style={styles.checkmark}>✓</span>
                        <span>Unique action verbs</span>
                      </div>
                      <div style={styles.checklistItem}>
                        <span style={styles.checkmark}>✓</span>
                        <span>Strong action verbs</span>
                        <span style={styles.checkmark}>✓</span>
                        <span>Accomplishments</span>
                      </div>
                      <div style={styles.checklistItem}>
                        <span style={styles.checkmark}>✓</span>
                        <span>No spelling errors</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 Jobready AI | Built by Ashwini Kumar Nayak</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#0a0f24",
    color: "#f1f1f1",
    padding: 0,
    margin: 0,
    minHeight: "100vh",
    position: "relative",
  },
  canvas: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  header: {
    backgroundColor: "transparent",
    textAlign: "center",
    padding: "100px 20px",
    zIndex: 1,
    position: "relative",
  },
  title: {
    fontSize: "3.5rem",
    margin: 0,
    color: "#00ffff",
    textShadow: "0 0 10px #00ffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginTop: "1rem",
    color: "#aadfff",
  },
  ctaButton: {
    marginTop: "2rem",
    background: "#00bfff",
    border: "none",
    padding: "14px 40px",
    fontSize: "1rem",
    color: "white",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    boxShadow: "0 4px 15px rgba(0,191,255,0.3)",
  },
  featuresSection: {
    padding: "60px 20px",
    textAlign: "center",
    zIndex: 1,
    position: "relative",
    backgroundColor: "transparent",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#1e90ff",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "#121c34",
    borderRadius: "15px",
    padding: "30px",
    width: "300px",
    textAlign: "left",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#00ffff",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "1rem",
    color: "#ccddee",
  },
  resumeSection: {
    backgroundColor: "transparent",
    padding: "80px 20px",
    zIndex: 1,
    position: "relative",
  },
  resumeContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  resumeLeft: {
    flex: "1",
    minWidth: "400px",
    maxWidth: "50%",
  },
  resumeTitle: {
    fontSize: "2.8rem",
    color: "#f1f1f1",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  resumeDescription: {
    fontSize: "1.1rem",
    color: "#aadfff",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  resumeSubtext: {
    fontSize: "1.1rem",
    color: "#aadfff",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  resumeButtons: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  primaryButton: {
    background: "#34d058",
    border: "none",
    padding: "14px 30px",
    fontSize: "1rem",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s ease",
    fontWeight: "600",
  },
  secondaryButton: {
    background: "transparent",
    border: "none",
    padding: "14px 30px",
    fontSize: "1rem",
    color: "#aadfff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  resumeRight: {
    flex: "1",
    minWidth: "400px",
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  mockupContainer: {
    position: "relative",
  },
  mockupPhone: {
    background: "#1a1a2e",
    borderRadius: "20px",
    width: "350px",
    height: "650px",
    padding: "25px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    border: "2px solid #2d2d5a",
  },
  phoneHeader: {
    background: "#2d2d5a",
    height: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  phoneContent: {
    color: "#f1f1f1",
  },
  scoreSection: {
    textAlign: "center",
    marginBottom: "30px",
  },
  scoreCircle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "4px solid #ff7b54",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
  },
  scoreNumber: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ff7b54",
  },
  scoreLabel: {
    fontSize: "0.7rem",
    color: "#888",
    textTransform: "uppercase",
  },
  scoreText: {
    fontSize: "0.9rem",
    color: "#ccc",
    margin: 0,
  },
  breakdownSection: {
    marginBottom: "25px",
  },
  breakdownTitle: {
    fontSize: "0.8rem",
    color: "#888",
    marginBottom: "15px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  categoryRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "15px",
  },
  category: {
    flex: "1",
    minWidth: "80px",
    textAlign: "center",
  },
  categoryLabel: {
    display: "block",
    fontSize: "0.7rem",
    color: "#888",
    marginBottom: "5px",
    fontWeight: "600",
  },
  categoryScore: {
    display: "block",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#1e90ff",
    marginBottom: "3px",
  },
  categoryTotal: {
    fontSize: "0.8rem",
    color: "#666",
  },
  categoryStatus: {
    display: "block",
    fontSize: "0.6rem",
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#34d058", // Default green for EXCELLENT
  },
  impactSection: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  impactCircle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "3px solid #34d058",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  impactNumber: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#34d058",
  },
  impactLabel: {
    fontSize: "0.6rem",
    color: "#888",
    textAlign: "center",
  },
  checklistContainer: {
    flex: 1,
  },
  checklistItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    fontSize: "0.8rem",
    color: "#ccc",
    gap: "8px",
    flexWrap: "wrap",
  },
  checkmark: {
    color: "#34d058",
    fontWeight: "bold",
  },
  footer: {
    background: "#020916",
    color: "#888",
    textAlign: "center",
    padding: "20px",
    fontSize: "0.9rem",
    zIndex: 1,
    position: "relative",
  },
};

export default Homepage;
