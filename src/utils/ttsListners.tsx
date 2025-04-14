import Tts from "react-native-tts"

export const initializeTtsListners = async() => {
    Tts.getInitStatus().then(
        ()=>{
            console.log("ALL OK TTS");
        },
        (error)=>{
        if (error.code === 'no_engine') {
            console.log('NO ENGINE TTS');
            Tts.requestInstallEngine();
        }
    }
    )

    // const voices = await Tts.voices();
    // console.log(voices);
    // Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert')

    Tts.setDefaultRate(0.3,true)
    Tts.setIgnoreSilentSwitch("ignore")
    Tts.setDefaultPitch(0.7)

    // Listener for when TTS starts speaking
    Tts.addEventListener("tts-start",(event)=>{
        // console.log("TTS Started: ",event);
    })

    // Listener for TTS progress (triggered repeatedly while speaking)
    Tts.addEventListener('tts-progress', (event) => {
        // console.log('TTS progress: ', event)
    });

    // Listener for when TTS finishes speaking
    Tts.addEventListener('tts-finish', (event) => {
        // console.log('TTS finished: ', event);
    });

    // Listener for when TTS is canceled
    Tts.addEventListener('tts-cancel', (event) => {
        // console.log('TTS Cancel: ', event);
    });
}