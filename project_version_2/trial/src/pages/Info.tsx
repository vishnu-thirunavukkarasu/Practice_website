import Header from '../components/Header/Header';
import { pageHeadings } from '../types/pageHeadings';
import { TypingEffect } from '../components/ui/typing-effect';
import logo from '../assets/info.png';




function Info() {
    const heading = pageHeadings.find(h => h.id === 'info');

    return (

        <div className="info-page">
            <Header title={heading?.title || 'Untitled Page'} />

            {/* Add top padding to move text below header */}
            <div className="typing-container">
                <TypingEffect text="Welcome to the info page...My name is Vishnu Thirunavukkarasu...Its a Fun page to try out React and css styles" />

            </div>
            <div className="info-content">
                <img src={logo} alt="Info Logo" />
            </div>
            <div className="info-text">
                <p>
                    Hello, I am <span className="info-highlight">Vishnu Thirunavukkarasu</span> — a
                    full-stack developer and software engineer with experience building scalable
                    backend systems and intuitive front-end applications. I have worked with
                    <span className="info-highlight"> Java Spring Boot</span>,{" "}
                    <span className="info-highlight">React</span>,{" "}
                    <span className="info-highlight">Python FastAPI</span>, and cloud technologies
                    to create reliable tools, dashboards, and automation solutions.
                </p>

                <p style={{ marginTop: "1rem" }}>
                    My background spans enterprise development at{" "}
                    <span className="info-highlight">Infosys</span>, custom web applications at{" "}
                    <span className="info-highlight">Forvia Hella</span>, and academic projects in
                    signal processing and sensor technology. I enjoy designing clean systems,
                    solving complex problems, and building technology that feels smooth, efficient,
                    and human-friendly.
                </p>

                <p style={{ marginTop: "1rem" }}>
                    If you like exploring <span className="info-highlight">tech</span>,{" "}
                    <span className="info-highlight">data</span>, or{" "}
                    <span className="info-highlight">creative engineering ideas</span>, you are in
                    the right place.
                </p>
            </div>


        </div>

    );
}

export default Info;
