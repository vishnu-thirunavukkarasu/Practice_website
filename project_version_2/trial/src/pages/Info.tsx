import Header from '../components/Header/Header';
import { pageHeadings } from '../types/pageHeadings';
import { TypingEffect } from '../components/ui/typing-effect';





function Info() {
    const heading = pageHeadings.find(h => h.id === 'info');

    return (
        <div>
            <div className="info-page">
                <Header title={heading?.title || 'Untitled Page'} />

                {/* Add top padding to move text below header */}
                <div className="typing-container">
                    <TypingEffect text="Welcome to the info page...My name is Vishnu Thirunavukkarasu...Its a Fun page to try out React and css styles" />
                </div>

            </div>

        </div>
    );
}

export default Info;
