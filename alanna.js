function drawRainDrop(transmat, dropmat) {
  rain.forEach(cubes => (cubes.shapes).forEach(shape => drawShape(gl, shape, cubes.texture, transmat, false)));
  (new_rainDrop.shapes).forEach(shape => drawShape(gl, shape, new_rainDrop.texture, dropmat, false));
}

function dropRain(transmat, dropmat) {
  drawRainDrop(transmat, dropmat);
  if (rainHeight > -5) {
    rainHeight = rainHeight - 0.01;
    if (rainHeight <= -5)
      bouncing = true;
    var drop = vec3.create();
    vec3.set(drop, 0, 0, rainHeight);
    var droptranslation = mat4.fromTranslation(mat4.clone(dropmat), drop);
    transform_rain_2 = droptranslation;
    window.requestAnimationFrame(() => dropRain(transmat, droptranslation));
  }
}

function resetRainDropMatrices() {
  init = false;
  rain.push(new_rainDrop);
  if (rain.length >= 7) {
    rain.shift();
    ground.shift();

  }
  rainHeight = 0;
  maxHeight = 1;
  bouncing = false;
  transform_rain_1 = mat4.clone(transform_rain_2);
  transform_rain_2 = mat4.create();
}