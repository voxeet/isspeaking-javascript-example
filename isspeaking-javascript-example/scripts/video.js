// Track which participant is in which video container
let videoContainerList = [
  { participantId: undefined },
  { participantId: undefined },
  { participantId: undefined },
  { participantId: undefined },
  { participantId: undefined },
  { participantId: undefined },
  { participantId: undefined },
  { participantId: undefined },
  { participantId: undefined },
];

const addVideoNode = (participant, stream) => {
  let videoNode = document.getElementById('video-' + participant.id);

  // if a video node does not exist for a participant with this id, made a <video> element
  if (!videoNode) {
    videoNode = document.createElement('video');
    videoNode.setAttribute('id', 'video-' + participant.id);
    videoNode.setAttribute('height', 240);
    videoNode.setAttribute('width', 320);
    videoNode.setAttribute('playsinline', true);
    videoNode.muted = true;
    videoNode.setAttribute('autoplay', 'autoplay');

    // if participant id is not present in the video container list,
    // insert participant id into list and update DOM
    for (let i = 0; i < videoContainerList.length; i++) {
      if (!videoContainerList[i].participantId) {
        videoContainerList[i].participantId = participant.id;
        let videoContainer = document.getElementById('video-container-' + i);
        videoContainer.appendChild(videoNode);
        let nameText = document.createElement('div');
        nameText.setAttribute('class', 'caption');
        nameText.innerText = participant.info.name;
        videoContainer.appendChild(nameText);
        break;
      }
    }
  }
  navigator.attachMediaStream(videoNode, stream);
};

const removeVideoNode = (participant) => {
  let videoNode = document.getElementById('video-' + participant.id);
  if (videoNode) {
    videoNode.srcObject = null; // Prevent memory leak in Chrome
    let caption = videoNode.parentNode.children[1];
    caption.remove();
    // remove leaving participant's video node from the DOM
    videoNode.parentNode.removeChild(videoNode);
    for (let i = 0; i < videoContainerList.length; i++) {
      // remove particpant from container list when they leave
      if (videoContainerList[i].participantId === participant.id) {
        videoContainerList[i].participantId = undefined;
      }
    }
  }
};
