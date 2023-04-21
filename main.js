let localStream;
let remoteStream;

let init = async () => {
    try {
      localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      document.getElementById('user-1').srcObject = localStream;
    } catch (err) {
      console.error('Error accessing media devices', err);
    }
  };
  
  init();
  