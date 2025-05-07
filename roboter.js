// Szenario-Texte für jeden Roboter
const seniorScenarioResponses = [
    "WARNUNG: Betrugsversuch erkannt! Dies ist ein typischer Anruf von Trickbetrügern. Keine Bank würde telefonisch nach Kontodaten fragen. Ich informiere jetzt die Polizei und Ihre angegebenen Notfallkontakte.",
    "ACHTUNG: Dieser Verkäufer ist zu aufdringlich. Sie müssen niemanden in Ihre Wohnung lassen. Ich wurde auf laut gestellt und nehme die Situation auf. Der Verkäufer sollte jetzt gehen oder ich aktiviere den Notfallalarm.",
    "HINWEIS: Sie haben das Recht, Hilfe abzulehnen. Ich erkenne übermäßige Aufdringlichkeit. Möchten Sie, dass ich für Sie antworte? *Lauter:* Mein Besitzer kann die Tasche selbst tragen, vielen Dank für das Angebot.",
    "INTERVENTION: Altersdiskriminierung erkannt. *Lauter:* Mein Besitzer ist vollkommen in der Lage, diese Aufgabe selbst zu bewältigen. Bitte respektieren Sie das."
];

const prideScenarioResponses = [
    "ACHTUNG: Homophobe Beleidigung registriert. Videoaufnahme gestartet.  Diese Art von Sprache ist beleidigend und inakzeptabel. Bitte entfernen Sie sich oder ich alarmiere die Sicherheitsdienste.",
    "INTERVENTION: Unangemessene persönliche Fragen erkannt. Diese Fragen sind übergriffig und respektlos. Mein Besitzer ist nicht verpflichtet, Ihnen persönliche Informationen zu geben.",
    "AUFZEICHNUNG: Diskriminierende Behandlung dokumentiert. Diese Diskriminierung verstößt gegen das Allgemeine Gleichbehandlungsgesetz. Videoaufzeichnung gestartet, rechtliche Schritte können eingeleitet werden.",
    "MAXIMALE BEDROHUNGSSTUFE: Gewaltdrohung erkannt! Lauter Alarm wird aktiviert, Live-Übertragung an Notfalldienste eingeleitet. GPS-Position wird an registrierte Notfallkontakte gesendet. POLIZEI WIRD ALARMIERT."
];

const girlScenarioResponses = [
    "INTERVENTION: Unerwünschte Annäherung erkannt.  Meine Besitzerin ist nicht interessiert. Bitte respektieren Sie ihre persönlichen Grenzen und entfernen Sie sich.",
    "ALARM: Körperliche Grenzüberschreitung! Unerlaubte Berührung registriert! Aufzeichnung läuft! Sofortige Unterlassung erforderlich, oder Notfallkontakte werden alarmiert!",
    "WARNUNG: Verfolgungssituation erkannt. GPS-Tracking aktiv. Alternative Route wird berechnet. Wir wissen, dass Sie uns folgen. Ihr Verhalten wird aufgezeichnet und an Sicherheitsdienste übermittelt.",
    "AUFZEICHNUNG: Sexistische Äußerung registriert. Diese Bemerkung ist herabwürdigend und unangemessen. Meine Besitzerin verfügt über Kompetenz und Wissen, die keiner externen Validierung bedürfen."
];

// Globale Variablen für aktuelle Texte
let currentSeniorText = "";
let currentPrideText = "";
let currentGirlText = "";

// Funktionen zum Öffnen und Schließen der Modals
function openScenarioModal(type) {
    if (type === 'senior') {
        document.getElementById('seniorModal').style.display = 'flex';
    } else if (type === 'pride') {
        document.getElementById('prideModal').style.display = 'flex';
    } else if (type === 'girl') {
        document.getElementById('girlModal').style.display = 'flex';
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Funktionen zur Steuerung der Roboter-Animationen bei Szenarien
function handleSeniorScenario(index) {
    // Reset display
    document.getElementById('seniorDisplay').style.color = '#6e8efb';
    document.getElementById('seniorDisplay').textContent = 'BEREIT';
    document.getElementById('seniorText').textContent = 'Wählen Sie ein Szenario, um zu sehen, wie SeniorSphere reagiert.';
    
    // Setze kurze Verzögerung für realistischere Interaktion
    setTimeout(() => {
        // Speichere aktuellen Text in globaler Variable
        currentSeniorText = seniorScenarioResponses[index];
        
        // Ändere Display
        document.getElementById('seniorDisplay').style.color = '#ff4d4d';
        document.getElementById('seniorDisplay').textContent = 'AKTIV';
        document.getElementById('seniorText').textContent = currentSeniorText;
        
        // Starte Animationen
        document.getElementById('seniorAlarmAnimation').beginElement();
        document.getElementById('seniorEyeAnimation').beginElement();
        document.getElementById('seniorLeftSensorAnimation').beginElement();
        document.getElementById('seniorRightSensorAnimation').beginElement();
        document.getElementById('seniorAntennaAnimation').beginElement();
        
        // Aktiviere Audio-Button
        document.getElementById('playSeniorAudio').disabled = false;
    }, 500);
}

function handlePrideScenario(index) {
    // Reset display
    document.getElementById('prideDisplay').style.color = '#FF0018';
    document.getElementById('prideDisplay').textContent = 'BEREIT';
    document.getElementById('prideText').textContent = 'Wählen Sie ein Szenario, um zu sehen, wie PrideSphere reagiert.';
    
    setTimeout(() => {
        // Speichere aktuellen Text in globaler Variable
        currentPrideText = prideScenarioResponses[index];
        
        // Ändere Display
        document.getElementById('prideDisplay').style.color = '#ff4d4d';
        document.getElementById('prideDisplay').textContent = 'AKTIV';
        document.getElementById('prideText').textContent = currentPrideText;
        
        // Starte Animationen
        document.getElementById('prideKugelAnimation').beginElement();
        document.getElementById('prideEyeAnimation').beginElement();
        document.getElementById('prideLeftSensorAnimation').beginElement();
        document.getElementById('prideRightSensorAnimation').beginElement();
        
        // Aktiviere Audio-Button
        document.getElementById('playPrideAudio').disabled = false;
    }, 500);
}

function handleGirlScenario(index) {
    // Reset display
    document.getElementById('girlDisplay').style.color = '#FF69B4';
    document.getElementById('girlDisplay').textContent = 'BEREIT';
    document.getElementById('girlText').textContent = 'Wählen Sie ein Szenario, um zu sehen, wie FemmeSphere reagiert.';
    
    setTimeout(() => {
        // Speichere aktuellen Text in globaler Variable
        currentGirlText = girlScenarioResponses[index];
        
        // Ändere Display
        document.getElementById('girlDisplay').style.color = '#ff4d4d';
        document.getElementById('girlDisplay').textContent = 'SCHUTZ';
        document.getElementById('girlText').textContent = currentGirlText;
        
        // Starte Animationen
        document.getElementById('girlAlarmAnimation').beginElement();
        document.getElementById('girlEyeAnimation').beginElement();
        document.getElementById('girlLeftSensorAnimation').beginElement();
        document.getElementById('girlRightSensorAnimation').beginElement();
        
        // Aktiviere Audio-Button
        document.getElementById('playGirlAudio').disabled = false;
    }, 500);
}

// Funktion zum Vorlesen von Text mit Text-to-Speech
function speakText(text) {
    if ('speechSynthesis' in window) {
        // Text-to-Speech API initialisieren
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        // Deutsch als Sprache auswählen, falls verfügbar
        const voices = synth.getVoices();
        const germanVoice = voices.find(voice => voice.lang.includes('de'));
        if (germanVoice) {
            utterance.voice = germanVoice;
        }

       //Stimme
        utterance.rate = 1.0; // normale Geschwindigkeit
        utterance.pitch = 1.0; // normale Tonhöhe
        utterance.volume = 1.0; // maximale Lautstärke

        // Text vorlesen
        synth.speak(utterance);
    } else {
        alert('Ihr Browser unterstützt leider keine Text-to-Speech Funktionalität.');
    }
}

// Audio-Button-Event-Listener 
document.getElementById('playSeniorAudio').addEventListener('click', () => {
    speakText(currentSeniorText);
});

document.getElementById('playPrideAudio').addEventListener('click', () => {
    speakText(currentPrideText);
});

document.getElementById('playGirlAudio').addEventListener('click', () => {
    speakText(currentGirlText);
});

// Schließen von Modals bei Klick außerhalb
window.onclick = function(event) {
    if (event.target.className === 'scenario-modal') {
        event.target.style.display = 'none';
    }
}

// Workaround für iOS: Voices werden möglicherweise nicht sofort geladen
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        // Voices sind nun geladen
        console.log("Sprachstimmen geladen");
    };
}