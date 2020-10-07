import {Component} de '@ angular / core'; 
importez {Plugins, CameraSource, CameraResultType} depuis '@ condensitor / core'; 
@Component ({ 
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
}) 
classe d'exportation HomePage { 
prisesPicture: any; 
async takePicture () { 
    const takePicture = await Plugins.Camera.getPhoto ( 
      { 
        qualité: 90, 
        allowEditing: true, 
        source: CameraSource.Camera, 
        resultType: CameraResultType.Uri 
      } 
    ); 
 
    this.takenPicture = takePicture.webPath; 
   } 
}
