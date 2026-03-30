(function () {
  const viewer = document.getElementById("vandinha-viewer");
  const modelShell = document.getElementById("model-shell");
  const stage = document.getElementById("selfie-stage");
  const video = document.getElementById("selfie-video");
  const placeholder = document.getElementById("camera-placeholder");
  const startButton = document.getElementById("start-selfie");
  const stopButton = document.getElementById("stop-selfie");
  const saveButton = document.getElementById("save-selfie");
  const cameraStatus = document.getElementById("camera-status");
  const modelStatus = document.getElementById("model-status");
  const scaleRange = document.getElementById("scale-range");
  const rotationRange = document.getElementById("rotation-range");
  const xRange = document.getElementById("x-range");
  const yRange = document.getElementById("y-range");
  const scaleOutput = document.getElementById("scale-output");
  const rotationOutput = document.getElementById("rotation-output");
  const xOutput = document.getElementById("x-output");
  const yOutput = document.getElementById("y-output");
  const baseLeft = 58;
  let stream = null;
  let modelReady = false;

  const state = {
    scale: 96,
    rotation: -8,
    x: 0,
    y: 3
  };

  if (!viewer || !modelShell || !stage || !video) {
    return;
  }

  const setCameraStatus = (message) => {
    if (cameraStatus) {
      cameraStatus.textContent = message;
    }
  };

  const setModelStatus = (message) => {
    if (modelStatus) {
      modelStatus.textContent = message;
    }
  };

  const refreshButtons = () => {
    const hasStream = Boolean(stream);

    if (startButton) {
      startButton.disabled = hasStream;
    }

    if (stopButton) {
      stopButton.disabled = !hasStream;
    }

    if (saveButton) {
      saveButton.disabled = !hasStream || !modelReady;
    }
  };

  const updateOutputs = () => {
    if (scaleOutput) {
      scaleOutput.textContent = `${state.scale}%`;
    }

    if (rotationOutput) {
      rotationOutput.textContent = `${state.rotation}deg`;
    }

    if (xOutput) {
      xOutput.textContent = `${state.x}%`;
    }

    if (yOutput) {
      yOutput.textContent = `${state.y}%`;
    }
  };

  const applyComposition = () => {
    const scaleValue = (state.scale / 100).toFixed(2);
    viewer.scale = `${scaleValue} ${scaleValue} ${scaleValue}`;
    viewer.orientation = `0deg ${state.rotation}deg 0deg`;
    modelShell.style.left = `calc(${baseLeft}% + ${state.x}%)`;
    modelShell.style.bottom = `${state.y}%`;
    updateOutputs();
  };

  const stopCamera = () => {
    if (!stream) {
      return;
    }

    stream.getTracks().forEach((track) => track.stop());
    stream = null;
    video.srcObject = null;
    video.hidden = true;

    if (placeholder) {
      placeholder.hidden = false;
    }

    setCameraStatus("Camera frontal desligada. Clique para iniciar.");
    refreshButtons();
  };

  const startCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraStatus("Seu navegador nao liberou acesso a camera frontal.");
      return;
    }

    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 1600 }
        },
        audio: false
      });

      video.srcObject = stream;
      video.hidden = false;

      if (placeholder) {
        placeholder.hidden = true;
      }

      await video.play();
      setCameraStatus("Camera frontal ativa. Ajuste a Vandinha e salve sua selfie.");
      refreshButtons();
    } catch (error) {
      stream = null;
      setCameraStatus("Nao foi possivel abrir a camera frontal. Verifique a permissao do navegador.");
      refreshButtons();
    }
  };

  const drawCoverVideo = (context, canvasWidth, canvasHeight) => {
    const sourceWidth = video.videoWidth;
    const sourceHeight = video.videoHeight;

    if (!sourceWidth || !sourceHeight) {
      return;
    }

    const scale = Math.max(canvasWidth / sourceWidth, canvasHeight / sourceHeight);
    const drawWidth = sourceWidth * scale;
    const drawHeight = sourceHeight * scale;
    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    context.save();
    context.translate(canvasWidth, 0);
    context.scale(-1, 1);
    context.drawImage(video, -(offsetX + drawWidth), offsetY, drawWidth, drawHeight);
    context.restore();
  };

  const blobToImage = (blob) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      const objectUrl = URL.createObjectURL(blob);

      image.onload = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(image);
      };

      image.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Falha ao montar a imagem do modelo."));
      };

      image.src = objectUrl;
    });

  const saveSelfie = async () => {
    if (!stream || !video.videoWidth || !modelReady) {
      setCameraStatus("Ative a camera frontal e espere a Vandinha carregar para salvar.");
      return;
    }

    if (typeof viewer.toBlob !== "function") {
      setModelStatus("Seu navegador nao liberou a captura da composicao. Use um print da tela.");
      return;
    }

    try {
      setModelStatus("Gerando selfie...");

      const stageRect = stage.getBoundingClientRect();
      const modelRect = modelShell.getBoundingClientRect();
      const exportWidth = Math.max(1200, video.videoWidth || 1200);
      const exportHeight = Math.round(exportWidth * (stageRect.height / stageRect.width));
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const modelBlob = await viewer.toBlob({ mimeType: "image/png", idealAspect: true });
      const modelImage = await blobToImage(modelBlob);

      if (!context) {
        throw new Error("Falha ao criar o canvas de exportacao.");
      }

      canvas.width = exportWidth;
      canvas.height = exportHeight;

      drawCoverVideo(context, exportWidth, exportHeight);

      const drawX = ((modelRect.left - stageRect.left) / stageRect.width) * exportWidth;
      const drawY = ((modelRect.top - stageRect.top) / stageRect.height) * exportHeight;
      const drawWidth = (modelRect.width / stageRect.width) * exportWidth;
      const drawHeight = (modelRect.height / stageRect.height) * exportHeight;

      context.drawImage(modelImage, drawX, drawY, drawWidth, drawHeight);

      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.download = "selfie-vandinha.png";
      downloadLink.click();

      setModelStatus("Selfie salva com sucesso.");
    } catch (error) {
      setModelStatus("Nao foi possivel salvar a selfie automaticamente. Tente novamente.");
    }
  };

  const bindRange = (rangeElement, key) => {
    if (!rangeElement) {
      return;
    }

    rangeElement.addEventListener("input", () => {
      state[key] = Number(rangeElement.value);
      applyComposition();
    });
  };

  bindRange(scaleRange, "scale");
  bindRange(rotationRange, "rotation");
  bindRange(xRange, "x");
  bindRange(yRange, "y");

  if (startButton) {
    startButton.addEventListener("click", startCamera);
  }

  if (stopButton) {
    stopButton.addEventListener("click", stopCamera);
  }

  if (saveButton) {
    saveButton.addEventListener("click", saveSelfie);
  }

  viewer.addEventListener("load", () => {
    modelReady = true;
    setModelStatus("Vandinha pronta. Ajuste tamanho, giro e posicao para a selfie.");
    refreshButtons();
  });

  viewer.addEventListener("error", () => {
    modelReady = false;
    setModelStatus("Nao foi possivel carregar o modelo 3D. Confira o arquivo GLB.");
    refreshButtons();
  });

  window.addEventListener("pagehide", stopCamera);
  applyComposition();
  refreshButtons();
})();
