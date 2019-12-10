function drawShadow(gl, shape, texture, transmat, isCharacter, scalemat) {
  program1.draw(gl, shape, function () {
    if (program1.xform_projMat != null) {
      gl.uniformMatrix4fv(program1.xform_projMat, false, getProjMatrix());
    }
    if (program1.xform_viewMat != null) {
      gl.uniformMatrix4fv(program1.xform_viewMat, false, getViewMatrix());
    }
    if (program1.xform_modelMat != null) {
      gl.uniformMatrix4fv(program1.xform_modelMat, false, getModelMatrix());
    }
    if (transmat != null) {
      if (program1.transform_Mat != null) {
        gl.uniformMatrix4fv(program1.transform_Mat, false, transmat);
      }
    }
    if (scalemat != null) {
      if (program1.xform_scaleMat != null) {
        gl.uniformMatrix4fv(program1.xform_scaleMat, false, scalemat);
      }
    }
    if (program1.xform_normalMat != null) {
      gl.uniformMatrix4fv(program1.xform_normalMat, false, getNormalMatrix());
    }
    if (program1.texture != null) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.uniform1i(program1.texture, 0);
    }
    if (program1.isCharacter != null) {
      if (isCharacter) {
        gl.uniform1f(program1.isCharacter, 1.0);
      } else {
        gl.uniform1f(program1.isCharacter, 0.0);
      }
    }
  });

}