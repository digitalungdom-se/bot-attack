import TerminalHeading from '../components/TerminalHeading'

const Rules = () => {
    return (
        <main>
            <div className="terminal-container terminal-fullpage">
                <div className="terminal">
                    <TerminalHeading heading="Bot-Attack Regler" />
                    <p id="regler">
                        §1 Alla som spelar måste vara medlemmar i Digital Ungdom.<br /><br />
                        §2 En bot per medlem.<br /><br />
                        §3 Du får inte kalla din bot något olämpligt.<br /><br />
                        §4 All skadegörelse på servern är förbjuden.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Rules;