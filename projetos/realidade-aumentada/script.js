(function () {
  const viewer = document.getElementById("vandinha-viewer");
  const loadingElement = document.getElementById("viewer-loading");
  const loadStatusElement = document.getElementById("load-status");
  const arStatusElement = document.getElementById("ar-status");
  const scaleButtons = Array.from(document.querySelectorAll("[data-scale]"));
  const rotateLeftButton = document.getElementById("rotate-left");
  const rotateRightButton = document.getElementById("rotate-right");
  const resetViewButton = document.getElementById("reset-view");
  const focusViewButton = document.getElementById("focus-view");
  const defaultScale = "0.85 0.85 0.85";
  const defaultOrbit = "0deg 75deg 105%";
  const focusOrbit = "0deg 70deg 82%";
  let currentRotation = 0;

  if (!viewer) {
    return;
  }

  const isIOS = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
  const isAndroid = /Android/i.test(window.navigator.userAgent);

  const hideLoading = () => {
    if (loadingElement) {
      loadingElement.classList.add("is-hidden");
    }
  };

  const setLoadStatus = (message) => {
    if (loadStatusElement) {
      loadStatusElement.textContent = message;
    }
  };

  const setArStatus = () => {
    if (!arStatusElement) {
      return;
    }

    if (viewer.canActivateAR) {
      arStatusElement.textContent = "RA pronta: toque em Abrir em RA no celular compativel.";
      return;
    }

    if (isIOS) {
      arStatusElement.textContent =
        "iPhone detectado: a visualizacao 3D funciona, mas a RA completa costuma exigir um arquivo USDZ.";
      return;
    }

    if (isAndroid) {
      arStatusElement.textContent =
        "Android detectado: se o aparelho tiver suporte, o botao de RA tentara abrir o Scene Viewer.";
      return;
    }

    arStatusElement.textContent =
      "No desktop, esta pagina funciona como visualizador 3D. Para RA, abra a URL no celular.";
  };

  const activateScaleButton = (activeButton) => {
    scaleButtons.forEach((button) => {
      button.classList.toggle("is-active", button === activeButton);
    });
  };

  const setScale = (scaleValue, activeButton) => {
    viewer.scale = scaleValue;
    activateScaleButton(activeButton);

    if (activeButton) {
      setLoadStatus(`Modelo carregado - escala ${activeButton.dataset.label.toLowerCase()}.`);
    }
  };

  const setOrientation = () => {
    viewer.orientation = `0deg ${currentRotation}deg 0deg`;
  };

  scaleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setScale(button.dataset.scale, button);
    });
  });

  if (rotateLeftButton) {
    rotateLeftButton.addEventListener("click", () => {
      currentRotation -= 20;
      setOrientation();
      setLoadStatus("Modelo carregado - orientacao ajustada para a esquerda.");
    });
  }

  if (rotateRightButton) {
    rotateRightButton.addEventListener("click", () => {
      currentRotation += 20;
      setOrientation();
      setLoadStatus("Modelo carregado - orientacao ajustada para a direita.");
    });
  }

  if (resetViewButton) {
    resetViewButton.addEventListener("click", () => {
      currentRotation = 0;
      viewer.orientation = "0deg 0deg 0deg";
      viewer.scale = defaultScale;
      viewer.cameraOrbit = defaultOrbit;
      viewer.fieldOfView = "28deg";
      activateScaleButton(scaleButtons.find((button) => button.dataset.scale === defaultScale) || null);

      if (typeof viewer.jumpCameraToGoal === "function") {
        viewer.jumpCameraToGoal();
      }

      setLoadStatus("Visao resetada para o enquadramento padrao.");
    });
  }

  if (focusViewButton) {
    focusViewButton.addEventListener("click", () => {
      viewer.cameraOrbit = focusOrbit;
      viewer.fieldOfView = "24deg";

      if (typeof viewer.jumpCameraToGoal === "function") {
        viewer.jumpCameraToGoal();
      }

      setLoadStatus("Camera aproximada para destacar o modelo.");
    });
  }

  viewer.addEventListener("load", () => {
    hideLoading();
    setLoadStatus("Modelo carregado - pronto para interacao.");
    setArStatus();
  });

  viewer.addEventListener("error", () => {
    hideLoading();
    setLoadStatus("Nao foi possivel carregar o modelo 3D.");
    if (arStatusElement) {
      arStatusElement.textContent = "Confira se o arquivo GLB esta no caminho esperado dentro do projeto.";
    }
  });

  viewer.addEventListener("ar-status", setArStatus);
  setArStatus();
})();
