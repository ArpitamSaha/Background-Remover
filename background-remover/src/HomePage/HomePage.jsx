import React from 'react'
let imageURL;


const HomePage = () => {
    function submitHandler() {
        console.log("click");
        const fileInput = document.getElementById('fileInput');
        console.log(fileInput.files);
        const image = fileInput.files[0];
    
        // Multipart file
        const formData = new FormData();
        formData.append('image_file', image);
        formData.append('size', 'auto');
    
        const apiKey = 'qJyr4VDQrkXzDxgjfP2uHLjE';
    
        fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': apiKey
            },
            body: formData
        })
            .then(function (reponse) {
                return reponse.blob();
            })
            .then(function (blob) {
                console.log(blob);
                const url = URL.createObjectURL(blob);
                imageURL = url;
                const img = document.createElement('img');
                img.src = url;
                document.body.appendChild(img);
            })
            .catch();
    }
    
    function downloadFile() {
        var anchorElement = document.createElement('a'); //<a></a>
        anchorElement.href = imageURL;
        anchorElement.download = 'naciasv.png';
        document.body.appendChild(anchorElement);
    
        anchorElement.click();
    
        document.body.removeChild(anchorElement);
    }
    return (
    <div>
         <div className="container mt-4">
        <div className="row mt-4">
            <div className="col-md-12 card mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="fileInput">Select a File: </label>
                        <input id="fileInput" className="form-control" type="file"/>
                    </div>
                    <input className="btn btn-primary m-1" type="button" onClick={submitHandler} value="Upload"/>
                </form>

                <button className="btn btn-warning" onClick={downloadFile}>Download</button>

            </div>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"></script>
    <script src="script.js"></script>
    </div>
  )
}

export default HomePage