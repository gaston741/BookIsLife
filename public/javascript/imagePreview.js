function fileValidation(){
    let fileInput = document.getElementById('inputFile');
    /*Validaciones de archivos*/
    let filePath = fileInput.value;
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Solo archivos con estas extensiones .jpeg /.jpg /.png /.gif only.');
        fileInput.value = '';
        return false;
    }else{
        /* vista previa de la imagen */
            document.getElementById('portada').addEventListener('change', (e) => {
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0])
                reader.onload = () => {
                    document.getElementById('img-preview').src = reader.result
            }
        })
    }
}