import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  services = [
    {
      title: 'Organización y representación de datos',
      img: 'https://ingenieriaelectronica.org/wp-content/uploads/Organizaci%C3%B3n-y-visualizaci%C3%B3n-de-datos.jpg',
      description: 'Herramientas para la organización y representación de datos.',
      descriptionComplete: `Este servicio te permitirá obetner todas las herramientas para 
      crear una experiencia visual. Transmite la información de tu empresa.`
    },
    {
      title: 'Almacenamiento de Datos',
      img: 'https://www.tesselar.mx/hubfs/Portadas-para-Blog-almacenamiento-en-la-nube.jpg',
      description: 'Herramientas  para  almacenamiento  de  datos  como:  imágenes,  videos,  archivos grandes.',
      descriptionComplete: `Servicio gestionado en el que te proporcionaremos acceso a una plataforma de 
      almacenamiento de datos`
    },
    {
      title: 'Análisis de Datos',
      img: 'https://datos.gob.es/sites/default/files/styles/blog_image/public/blog/image/analisis_de_datos.jpg?itok=5Lvo2pXS',
      description: 'Herramientas para el análisis de los datos.',
      descriptionComplete: `Con nuestra herramienta podrás obtener conocimiento de la 
      información subyacente de los datos y extraer conclusiones que permitan tomar decisiones informadas. 
      Realiza análisis exploratorio, descriptivo, predictivo y prescriptivo de todos tus datos.`
    },
    {
      title: 'Presentación de Datos',
      img: 'https://img.remediosdigitales.com/58351e/56397d9c-d9cc-4625-8276-138210176860_what-is-fundamental-analysis_-1-/450_1000.jpeg',
      description: 'Herramientas para la presentación de los datos.',
      descriptionComplete: `Revisa a fondo tus datos y elabora estrategias comerciales más eficientes, renueva  constantemente tus fórmulas comerciales 
      con estas excelentes herramientas de visualización.`
    },
    {
      title: 'Respaldo de Datos',
      img: 'http://www.icorp.com.mx/blog/wp-content/uploads/2019/09/respaldo_de_datos_2.jpg',
      description: 'Herramientas para respaldo.',
      descriptionComplete: `Realiza tus labores de una forma más tranquila y segura. Mantén a salvo tus archivos respaldándolos 
      ante cualquier inconveniente que puedas presentar.`
    },
  ]

  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit(): void {
  }

  request(e: Event, description: string, image: string) {
    e.preventDefault()
    this.requestService.updateRequest(description);
    this.requestService.updateImage(image);
    this.router.navigate(['/request']);
  }

}
