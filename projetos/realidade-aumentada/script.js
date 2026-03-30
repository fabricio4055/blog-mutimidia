(function () {
  const viewer = document.getElementById("vandinha-viewer");
  const loadStatusElement = document.getElementById("load-status");
  const arStatusElement = document.getElementById("ar-status");
  const scaleRange = document.getElementById("scale-range");
  const rotationRange = document.getElementById("rotation-range");
  const zoomRange = document.getElementById("zoom-range");
  const scaleOutput = document.getElementById("scale-output");
  const rotationOutput = document.getElementById("rotation-output");
  const zoomOutput = document.getElementById("zoom-output");
  const resetViewButton = document.getElementById("reset-view");
  const focusViewButton = document.getElementById("focus-view");
  const defaults = {
    scale: 90,
    rotation: -10,
    zoom: 105
  };

  const state = { ...defaults };

  if (!viewer) {
    return;
  }

  const setLoadStatus = (message) => {
    if (loadStatusElement) {
      loadStatusElement.textContent = message;
    }
  };

  const updateOutputs = () => {
    if (scaleOutput) {
      scaleOutput.textContent = `${state.scale}%`;
    }

    if (rotationOutput) {
      rotationOutput.textContent = `${state.rotation}deg`;
    }

    if (zoomOutput) {
      zoomOutput.textContent = `${state.zoom}%`;
    }
  };

  const syncRanges = () => {
    if (scaleRange) {
      scaleRange.value = String(state.scale);
    }

    if (rotationRange) {
      rotationRange.value = String(state.rotation);
    }

    if (zoomRange) {
      zoomRange.value = String(state.zoom);
    }
  };

  const applyScene = () => {
    const scaleValue = (state.scale / 100).toFixed(2);
    viewer.scale = `${scaleValue} ${scaleValue} ${scaleValue}`;
    viewer.orientation = `0deg ${state.rotation}deg 0deg`;
    viewer.cameraOrbit = `-18deg 72deg ${state.zoom}%`;
    updateOutputs();
  };

  const updateArStatus = () => {
    if (!arStatusElement) {
      return;
    }

    const isIOS = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
    const isAndroid = /Android/i.test(window.navigator.userAgent);

    if (viewer.canActivateAR) {
      arStatusElement.textContent = "RA pronta: no celular compativel, o botao abre a camera traseira.";
      return;
    }

    if (isAndroid) {
      arStatusElement.textContent =
        "Android detectado: a experiencia pode abrir em RA com camera traseira, dependendo do aparelho.";
      return;
    }

    if (isIOS) {
      arStatusElement.textContent =
        "iPhone detectado: a visualizacao 3D funciona, mas a RA completa costuma pedir USDZ.";
      return;
    }

    arStatusElement.textContent =
      "No desktop, esta pagina funciona como visualizador 3D. Para RA, abra a mesma URL no celular.";
  };

  const setDefaultScene = () => {
    state.scale = defaults.scale;
    state.rotation = defaults.rotation;
    state.zoom = defaults.zoom;
    syncRanges();
    applyScene();
    viewer.fieldOfView = "30deg";

    if (typeof viewer.jumpCameraToGoal === "function") {
      viewer.jumpCameraToGoal();
    }

    setLoadStatus("Cena resetada para o enquadramento padrao.");
  };

  if (scaleRange) {
    scaleRange.addEventListener("input", () => {
      state.scale = Number(scaleRange.value);
      applyScene();
      setLoadStatus("Escala atualizada para a visualizacao 3D.");
    });
  }

  if (rotationRange) {
    rotationRange.addEventListener("input", () => {
      state.rotation = Number(rotationRange.value);
      applyScene();
      setLoadStatus("Rotacao ajustada para a pose do modelo.");
    });
  }

  if (zoomRange) {
    zoomRange.addEventListener("input", () => {
      state.zoom = Number(zoomRange.value);
      applyScene();
      setLoadStatus("Zoom do estudio ajustado.");
    });
  }

  if (resetViewButton) {
    resetViewButton.addEventListener("click", setDefaultScene);
  }

  if (focusViewButton) {
    focusViewButton.addEventListener("click", () => {
      state.zoom = 82;
      syncRanges();
      applyScene();
      viewer.fieldOfView = "26deg";

      if (typeof viewer.jumpCameraToGoal === "function") {
        viewer.jumpCameraToGoal();
      }

      setLoadStatus("Modelo destacado com enquadramento mais proximo.");
    });
  }

  viewer.addEventListener("load", () => {
    setLoadStatus("Modelo carregado. Arraste para explorar e use o botao de RA no celular.");
    updateArStatus();
  });

  viewer.addEventListener("error", () => {
    setLoadStatus("Nao foi possivel carregar o modelo 3D. Confira o arquivo GLB.");
    if (arStatusElement) {
      arStatusElement.textContent = "Se o erro continuar, confira o caminho do arquivo dentro da pasta assets/media.";
    }
  });

  updateOutputs();
  syncRanges();
  applyScene();
  updateArStatus();
})();
